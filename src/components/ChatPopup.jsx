import React from "react";
import { nanoid } from "nanoid";

export default function ChatPopup(props) {
    const [messages, setMessages] = React.useState([]);
    const [inputMessage, setInputMessage] = React.useState("");

    const suggestions = [
        "What's the most popular dish?",
        "Do you have vegetarian options?",
        "Tell me about wine pairings",
    ];

    React.useEffect(() => {
        const messagesDiv = document.getElementById("messages-container");
        if (messagesDiv) {
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
    }, [messages]);

    const addMessage = (msg, isUser, isTyping = false) => {
        const newMessage = {
            content: msg,
            isUser,
            isTyping,
            id: nanoid(),
        };

        setMessages((prev) => [...prev, newMessage]);
        return newMessage;
    };

    const sendMessageFromText = async (text) => {
        if (text.trim() === "") return;
        addMessage(text, true);

        const typingMessage = addMessage("Savoria chef is typing...", false, true);

        const apiUrl = "https://savoria-25-production.up.railway.app/ask_rag";
        const requestBody = {
            question: text,
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            const aiAnswer = data.answer;

            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === typingMessage.id
                        ? { ...msg, content: aiAnswer, isTyping: false }
                        : msg
                )
            );

        } catch (error) {
            console.error("Error fetching AI response:", error);
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === typingMessage.id
                        ? { ...msg, content: "Sorry, I'm having trouble connecting. Please try again later.", isTyping: false }
                        : msg
                )
            );
        }
    };

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            sendMessageFromText(inputMessage);
            setInputMessage("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center p-0 sm:justify-end sm:items-end sm:pb-5 sm:pr-5">
            <div className="bg-white rounded-none shadow-lg w-full h-full pt-10 overflow-y-auto sm:w-[600px] sm:h-[95vh] sm:rounded-xl relative">
                <button
                    onClick={props.onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <i class="fa-solid fa-x"></i>
                </button>
                <article className="w-full h-auto flex flex-col justify-center items-center gap-3 mt-5 bg-white dark:bg-gray-900">
                    <h2 className="text-4xl text-amber-900 dark:text-amber-200 font-medium text-center">
                        <span className="whitespace-nowrap inline-block">
                            Chat with Our
                        </span>{" "}
                        <span className="whitespace-nowrap inline-block">
                            AI Assistant
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 text-center">
                        Ask about our dishes, ingredients, or get personalized
                        recommendations
                    </p>

                    <section className="w-full max-w-xl mt-5">
                        <div className="w-full bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl">
                            <h2 className="w-full bg-amber-900 dark:bg-amber-700 text-white -mt-10 mb-0 p-2 border dark:border-amber-800 rounded-tl-xl rounded-tr-xl whitespace-nowrap">
                                Savoria AI Assistant
                            </h2>

                            <div
                                id="messages-container"
                                className="h-80 pt-10 overflow-y-auto border-b-slate-200 dark:border-b-gray-700 scroll-smooth"
                            >
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`w-1/2 py-2 px-5 my-1 rounded-2xl ${message.isUser
                                            ? "ml-auto bg-amber-900 text-white text-right"
                                            : "mr-auto bg-gray-200 dark:bg-gray-600 text-black dark:text-white text-left"
                                            }`}
                                    >
                                        {message.content}
                                    </div>
                                ))}
                            </div>

                            <div className="w-full p-1 flex flex-col justify-center items-center border-t border-slate-400 dark:border-gray-600">
                                <section className="sm:flex sm:flex-row flex flex-col gap-3 mt-2">
                                    {suggestions.map((suggestion, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                sendMessageFromText(suggestion)
                                            }
                                            className="bg-gray-300 dark:bg-gray-600 py-1 px-3 rounded-lg cursor-pointer text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </section>

                                <section className="w-full mt-3 flex">
                                    <input
                                        type="text"
                                        value={inputMessage}
                                        onChange={(e) =>
                                            setInputMessage(e.target.value)
                                        }
                                        onKeyPress={handleKeyPress}
                                        className="w-11/12 flex-grow p-2 mb-2 mx-2 border border-slate-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        placeholder="Type a message..."
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="py-1 px-2 mb-2 mr-2 text-white bg-amber-900 dark:bg-amber-700 border-none rounded-md cursor-pointer hover:bg-amber-800 dark:hover:bg-amber-600 transition-colors"
                                    >
                                        <i className="fa-solid fa-paper-plane"></i>
                                    </button>
                                </section>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}
