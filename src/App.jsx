import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Starterspage from "./pages/Starterspage";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Story from "./components/Story";

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

// Create a component that uses useLocation
function AppContent() {
  const location = useLocation();
  
  // Pages where you DON'T want the footer
 
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pages will be rendered here */}

       <Header />
       <Hero/>
       <Story/>
       <Form />
       
       
       
       

       
       
      <Routes>
        
        <Route path="/" element={<Menu categories={menuCategories} descriptions={menuDescriptions} />} />
        <Route path="/reservation" element={<Form />} />
        
      </Routes>
      <Footer/>

    
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;