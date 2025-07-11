import React, { useState } from "react";
import { Link } from "react-router-dom";
import starters from "../Data/Starters";

const Starterspage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

return (
    <div className="bg-white min-h-screen font-sans">
        {/* Header + Navbar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-8 py-6 border-b border-gray-200 bg-white gap-4">
            <div className="flex items-center">
                {/* Logo */}
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.5 0C18.75 0 13.5 1.5 13.5 8.25V13.5C13.5 15.1547 14.8453 16.5 16.5 16.5H18V22.5C18 23.3297 18.6703 24 19.5 24C20.3297 24 21 23.3297 21 22.5V16.5V11.25V1.5C21 0.670312 20.3297 0 19.5 0ZM3 0.75C3 0.365625 2.71406 0.046875 2.32969 0.0046875C1.94531 -0.0375 1.60313 0.215625 1.51875 0.585938L0.0984375 6.975C0.0328125 7.27031 0 7.57031 0 7.87031C0 10.0219 1.64531 11.7891 3.75 11.9813V22.5C3.75 23.3297 4.42031 24 5.25 24C6.07969 24 6.75 23.3297 6.75 22.5V11.9813C8.85469 11.7891 10.5 10.0219 10.5 7.87031C10.5 7.57031 10.4672 7.27031 10.4016 6.975L8.98125 0.585938C8.89688 0.210938 8.54531 -0.0375 8.16562 0.0046875C7.78594 0.046875 7.5 0.365625 7.5 0.75V7.04062C7.5 7.29375 7.29375 7.5 7.04062 7.5C6.80156 7.5 6.60469 7.31719 6.58125 7.07812L5.99531 0.684375C5.9625 0.295313 5.63906 0 5.25 0C4.86094 0 4.5375 0.295313 4.50469 0.684375L3.92344 7.07812C3.9 7.31719 3.70312 7.5 3.46406 7.5C3.21094 7.5 3.00469 7.29375 3.00469 7.04062V0.75H3ZM5.26406 7.875H5.25H5.23594L5.25 7.84219L5.26406 7.875Z"
                        fill="#D97706"
                    />
                </svg>
                <span className="font-bold text-2xl leading-8 text-gray-900 ml-2">Savoria</span>
            </div>

            <nav className="flex items-center gap-3 py-0">
                <Link to="/" className="text-base text-stone-700">Home</Link>
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-base text-gray-900 cursor-pointer"
                    >
                        Menu <span className="ml-1">▼</span>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-full left-0 bg-white border border-gray-200 rounded shadow-md z-10 min-w-[140px] mt-2">
                            {["Starters", "Main Dishes", "Drinks", "Desserts"].map((item) => (
                                <Link
                                    key={item}
                                    to="/starters"
                                    className="block px-4 py-2 text-gray-900 hover:bg-gray-50"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <a href="#" className="text-base text-stone-700">Our Story</a>
                <a href="#" className="text-base text-stone-700">Feedback</a>
            </nav>
        </div>

        <hr style={{ border: "none", borderTop: "4px solid #F9FAFB", margin: 0 }} />

        {/* Title & Description */}
        <h1 className="font-bold text-5xl text-center mt-10 mb-2 text-stone-700">Starters</h1>
        <p className="text-center text-stone-700 text-sm mb-10 px-4">
            Explore our delicious starter dishes — light, flavorful, and perfect to begin your meal.
        </p>

        {/* Starters Grid */}
        <div className="w-full bg-gray-50 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
                {starters.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow p-5 relative">
                        <img
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-40 object-cover rounded mb-4"
                        />
                        <h2 className="text-xl font-semibold text-stone-900">{item.name}</h2>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <p className="text-amber-700 font-semibold text-sm">${item.price.toFixed(2)}</p>
                        <button className="absolute right-6 bottom-4 bg-amber-600 text-white rounded px-3 py-1 text-sm hover:bg-amber-700 transition">
                            Add to Order
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default Starterspage;