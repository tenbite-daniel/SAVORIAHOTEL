import os
import google.generativeai as genai
from langchain_core.embeddings import Embeddings

class GeminiEmbeddings(Embeddings):
    def __init__(self, model_name="models/embedding-001", task_type="retrieval_document"):
        self.model_name = model_name
        self.task_type = task_type
        if "GEMINI_API_KEY" not in os.environ:
            raise ValueError("Gemini API key not found in environment variables.")
        genai.configure(api_key=os.environ["GEMINI_API_KEY"])

    def embed_documents(self, texts):
        return [self._embed_text(text) for text in texts]

    def embed_query(self, text):
        return self._embed_text(text)

    def _embed_text(self, text):
        response = genai.embed_content(
            model=self.model_name,
            content=text,
            task_type=self.task_type,
        )
        return response["embedding"]

