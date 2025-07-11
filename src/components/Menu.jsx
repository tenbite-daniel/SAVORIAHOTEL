import React, { useState } from "react";
import { Link } from "react-router-dom";


const Menu = ({ categories, descriptions }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

return (
  <div className="bg-white min-h-screen border border-gray-200 font-sans">
   

      
    
    <hr style={{ border: "none", borderTop: "4px solid #F9FAFB", margin: 0 }} />

    {/* MENU Title */}
    <h1 className="font-bold text-5xl text-center mt-10 mb-2 text-stone-700">
      MENU
    </h1>

    <div className="text-sm text-center text-stone-700 mb-10">
      Welcome to our table. Explore a menu crafted with care, featuring timeless favorites and comforting flavors.
    </div>

    {/* Menu Grid Full Width BG */}
    <div className="w-full bg-gray-50 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12 px-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-white border border-gray-200 rounded-lg flex flex-col p-5 relative shadow-md shadow-gray-300"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full max-w-xs h-36 object-cover rounded-lg mb-4"
            />
            <div className="font-semibold text-lg text-stone-900 mb-2 text-left">
              {cat.name}
            </div>
            <div className="text-sm text-gray-500 mb-8 text-left">
              {descriptions[cat.name]}
            </div>  
            <Link
              to="/starters"
              className="absolute right-6 bottom-6 bg-amber-600 text-white rounded px-3 py-1 text-sm hover:bg-amber-700 transition flex items-center justify-center"
            >
              Explore
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Menu;
