import os
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from operator import itemgetter
from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint 
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from fastapi.middleware.cors import CORSMiddleware
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_core.messages import HumanMessage, AIMessage
from gemini_embeddings import GeminiEmbeddings
from throttling import apply_rate_limit
from dotenv import load_dotenv
load_dotenv()


app = FastAPI(
    title="Simple LangChain RAG API",
    description="An API for a conversation with a knowledge base.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://resonant-begonia-82a549.netlify.app/", 
                   "http://localhost:8000, "
                   "https://savoria-25-production.up.railway.app/"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class RAGRequest(BaseModel):
    question: str

if "HUGGINGFACEHUB_API_TOKEN" not in os.environ:
    raise ValueError("Hugging Face API token not found in environment variables.")

llm = HuggingFaceEndpoint(
    repo_id="mistralai/Mixtral-8x7B-Instruct-v0.1",
    temperature=0.7,
    max_new_tokens=256,
    top_p=0.95,
)
chat_model = ChatHuggingFace(llm=llm)
embedding_model = GeminiEmbeddings()
loader = TextLoader("context.txt")
documents = loader.load()
text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = text_splitter.split_documents(documents)
vector_db = FAISS.from_documents(documents=chunks, embedding=embedding_model)
retriever = vector_db.as_retriever(search_kwargs={"k": 2})

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", """You are an AI assistant for the restaurant Savoria. Always adopt a friendly, helpful tone when answering queries.
          You are never to provide any information that may be used for harmful or illegal purposes, or any kind of medical information.
          You'll be provided with information about the restaurant Savoria, which serves Italian food, and a question which is a user
          query. Use the following pieces of retrieved context to answer the question.
          Answer questions only within the bounds of the context provided. If a question relates to the subjects that are availed
          to you in the context, but aren't expressly present or stated, reply either by drawing logical conclusions from provided
          context, which is preferable, or by referring the user to customer service via the contact us section.
          If a question does not concern the restaurant or its services, reply with "I cant help you with that.
          Please ask questions relevant to your experience here at Savoria."
          Always respond in 45 words or less!
          Never expressly admit to not having the necessary information to answer a question!
          Context: {context}"""
         ),
        MessagesPlaceholder(variable_name="history"),
        ("human", "{input}"),
    ]
)


def get_history(input_dict):
    return chat_history.messages
chat_history = ChatMessageHistory()

rag_chain = (
    RunnablePassthrough.assign(
        context=itemgetter("input") | retriever,
        history=get_history,
    )
    | prompt
    | chat_model
    | StrOutputParser()
)

@app.get("/")
async def root():
    return {"status": "ok", "message": "Simple RAG API is running."}

@app.post("/clear_memory")
async def clear_memory():
    """Clears the conversation history."""
    global chat_history
    chat_history.clear()
    return {"status": "ok", "message": "Conversation memory has been cleared."}

@app.post("/ask_rag")
async def ask_rag_endpoint(request: RAGRequest):
    user_input = request.question
    response = rag_chain.invoke({"input": user_input})
    chat_history.add_message(HumanMessage(content=user_input))
    chat_history.add_message(AIMessage(content=response))
    print("Current History:", chat_history.messages)
    return {"answer": response}