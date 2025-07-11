import React, { useState } from "react";
import { Link } from "react-router-dom";


const Menu = ({ categories, descriptions }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

return (
  <div className="bg-white min-h-screen border border-gray-200 font-sans">
    {/* Header + Nav Bar Combined */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between px-8 py-6 border-b border-gray-200 bg-white gap-4">
      {/* Header */}
      <div className="flex items-center">
        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 0C18.75 0 13.5 1.5 13.5 8.25V13.5C13.5 15.1547 14.8453 16.5 16.5 16.5H18V22.5C18 23.3297 18.6703 24 19.5 24C20.3297 24 21 23.3297 21 22.5V16.5V11.25V1.5C21 0.670312 20.3297 0 19.5 0ZM3 0.75C3 0.365625 2.71406 0.046875 2.32969 0.0046875C1.94531 -0.0375 1.60313 0.215625 1.51875 0.585938L0.0984375 6.975C0.0328125 7.27031 0 7.57031 0 7.87031C0 10.0219 1.64531 11.7891 3.75 11.9813V22.5C3.75 23.3297 4.42031 24 5.25 24C6.07969 24 6.75 23.3297 6.75 22.5V11.9813C8.85469 11.7891 10.5 10.0219 10.5 7.87031C10.5 7.57031 10.4672 7.27031 10.4016 6.975L8.98125 0.585938C8.89688 0.210938 8.54531 -0.0375 8.16562 0.0046875C7.78594 0.046875 7.5 0.365625 7.5 0.75V7.04062C7.5 7.29375 7.29375 7.5 7.04062 7.5C6.80156 7.5 6.60469 7.31719 6.58125 7.07812L5.99531 0.684375C5.9625 0.295313 5.63906 0 5.25 0C4.86094 0 4.5375 0.295313 4.50469 0.684375L3.92344 7.07812C3.9 7.31719 3.70312 7.5 3.46406 7.5C3.21094 7.5 3.00469 7.29375 3.00469 7.04062V0.75H3ZM5.26406 7.875H5.25H5.23594L5.25 7.84219L5.26406 7.875Z" fill="#D97706" />
        </svg>
        <span className="font-bold text-2xl leading-8 text-gray-900 ml-2">
          Savoria
        </span>
      </div>
      
      <nav className="flex items-center gap-3 py-0">
        <a href="#" className="font-normal text-base text-stone-700 no-underline">Home</a>
         <div className="relative">
  <button
  onClick={() => setDropdownOpen(!dropdownOpen)}
  className="bg-none border-none font-normal text-base text-gray-900 cursor-pointer"
  >
  Menu <span className="ml-1">▼</span>
  </button>

  {dropdownOpen && (
  <div className="absolute top-full left-0 bg-white border border-gray-200 rounded shadow-md z-10 min-w-[140px] mt-2">
    {categories.map((cat) => (
    <Link
      key={cat.name}
      to={`/starters`} 
      className="block px-4 py-2 text-gray-900 border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
      onClick={() => setDropdownOpen(false)} // close dropdown on click
    >
      {cat.name}
    </Link>
    ))}
  </div>
  )}
</div>

        <a href="#" className="font-normal text-base text-stone-700">Our Story</a>
        <a href="#" className="font-normal text-base text-stone-700 no-underline">Feedback</a>
      </nav>
    </div>
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
