import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Starterspage from "./pages/Starterspage"; // Make sure the filename matches exactly (case-sensitive)

// Image imports
import startersImg from "./assets/images/Starters.png";
import mainDishesImg from "./assets/images/MainDishes.jpg";
import drinksImg from "./assets/images/Drinks.jpg";
import dessertsImg from "./assets/images/Desserts.jpg";

// Menu data
const menuCategories = [
  { name: "Starters", img: startersImg },
  { name: "Main Dishes", img: mainDishesImg },
  { name: "Drinks", img: drinksImg },
  { name: "Desserts", img: dessertsImg },
];

// Descriptions
const menuDescriptions = {
  Starters: "Delicious bites to share or savor, setting the perfect tone for your dining experience.",
  "Main Dishes": "The main event. Bold flavors and creative combinations designed to delight.",
  Drinks: "Raise a glass to refreshment. Classic and creative beverages for every mood.",
  Desserts: "Our sweet treats, baked with love to complete your dining experience.",
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Pages will be rendered here */}
        <Routes>
          <Route path="/" element={<Menu categories={menuCategories} descriptions={menuDescriptions} />} />
          <Route path="/starters" element={<Starterspage />} />
        </Routes>

        {/* Footer shown on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
