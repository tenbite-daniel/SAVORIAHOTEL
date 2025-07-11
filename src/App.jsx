import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ChatPopup from "./components/ChatPopup";
import Starterspage from "./pages/Starterspage"; // Make sure the filename matches exactly (case-sensitive)
import MainDishesPage from "./pages/MainDishesPage";
import DrinksPage from "./pages/DrinksPage";
import DessertsPage from "./pages/DessertsPage";

// Menu data
import { menuCategories, menuDescriptions } from "./Data/dishes";

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
            <div className="flex flex-col min-h-screen relative">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Menu
                                categories={menuCategories}
                                descriptions={menuDescriptions}
                            />
                        }
                    />
                    <Route path="/starters" element={<Starterspage />} />
                    <Route path="/mainDishes" element={<MainDishesPage />} />
                    <Route path="/drinks" element={<DrinksPage />} />
                    <Route path="/desserts" element={<DessertsPage />} />
                </Routes>
                {/* Footer shown on every page */}
                <Footer />
                <button
                    className="fixed w-14 h-14 bottom-10 right-10 z-10 bg-green-600 rounded-full text-white"
                    onClick={togglePopup}
                >
                    <i class="fa-solid fa-headset text-3xl"></i>
                </button>
                {/* Chat Popup */}
                {isOpen && <ChatPopup onClose={togglePopup} />}
            </div>
        </Router>
    );
}

export default App;
