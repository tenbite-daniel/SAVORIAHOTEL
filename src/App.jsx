// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Form from "./components/Form";
import Footer from "./components/Footer";

import Starterspage from "./pages/Starterspage";
import MainDishesPage from "./pages/MainDishesPage";
import DrinksPage from "./pages/DrinksPage";
import DessertsPage from "./pages/DessertsPage";

// Menu data
import { menuCategories, menuDescriptions } from "./Data/dishes";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="story">
          <Story />
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/starters" element={<Starterspage />} />
        <Route path="/maindishes" element={<MainDishesPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/desserts" element={<DessertsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
