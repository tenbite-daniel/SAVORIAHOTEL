// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Signature from "./components/Signature";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ChatPopup from "./components/ChatPopup";
import Starterspage from "./pages/Starterspage";
import MainDishesPage from "./pages/MainDishesPage";
import DrinksPage from "./pages/DrinksPage";
import DessertsPage from "./pages/DessertsPage";

// Menu data
import { menuCategories, menuDescriptions } from "./Data/dishes";

function HomePage() {
    React.useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 300);
        }
    }, []);
    return (
        <>
            <Header />
            <main>
                <section id="hero">
                    <Hero />
                </section>
                <section id="story">
                    <Story />
                </section>
                <section id="signaturedishes">
                    <Signature
                        title="Signture Dishes"
                        description="Discover our chef's masterpieces, crafted with passion and the finest ingredients"
                    />
                </section>
                <section id="menu">
                    <Menu
                        categories={menuCategories}
                        descriptions={menuDescriptions}
                    />
                </section>
                <section id="reservation">
                    <Form />
                </section>
            </main>
            <Footer />
        </>
    );
}

function App() {
    const [isOpen, setIsOpen] = React.useState(false);

    const togglePopup = () => {
        setIsOpen((prev) => !prev);
    };

    React.useEffect(() => {
        if (isOpen) {
            document.body.classList.add("body-no-scroll");
        } else {
            document.body.classList.remove("body-no-scroll");
        }
        // Cleanup function to remove the class when component unmounts
        return () => {
            document.body.classList.remove("body-no-scroll");
        };
    }, [isOpen]);

    return (
        <Router>
            <div className="flex flex-col min-h-screen relative bg-white dark:bg-gray-900 transition-colors duration-300">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/starters" element={<Starterspage />} />
                    <Route path="/maindishes" element={<MainDishesPage />} />
                    <Route path="/drinks" element={<DrinksPage />} />
                    <Route path="/desserts" element={<DessertsPage />} />
                </Routes>

                {/* Chat Button */}
                <button
                    className="fixed w-14 h-14 bottom-10 right-10 z-50 bg-green-600 hover:bg-green-700 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={togglePopup}
                    aria-label="Open chat support"
                >
                    <i className="fa-solid fa-headset text-2xl"></i>
                </button>

                {/* Chat Popup */}
                {isOpen && <ChatPopup onClose={togglePopup} />}
            </div>
        </Router>
    );
}

export default App;
