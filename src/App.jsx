import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Starterspage from "./pages/Starterspage"; // Make sure the filename matches exactly (case-sensitive)
import MainDishesPage from "./pages/MainDishesPage";
import DrinksPage from "./pages/DrinksPage";
import DessertsPage from "./pages/DessertsPage";

// Menu data
import { menuCategories, menuDescriptions } from "./Data/dishes";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Pages will be rendered here */}
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
            </div>
        </Router>
    );
}

export default App;
