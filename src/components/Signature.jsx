import { useState } from "react";
import { signatureDishes } from "../Data/dishes";

export default function Dishes({ title, description }) {
    const [showAll, setShowAll] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter dishes based on category
    const filteredDishes = signatureDishes.filter((dish) => {
        if (activeFilter === "all") return true;
        if (activeFilter === "vegetarian")
            return dish.category === "Vegetarian";
        if (activeFilter === "non-vegetarian")
            return dish.category === "Non-Vegetarian";
        if (activeFilter === "special") return dish.isSpecial;
        return true;
    });

    // Determine which dishes to display
    const displayedDishes = showAll
        ? filteredDishes
        : filteredDishes.slice(0, 3);

    return (
        <div className="dark:bg-gray-800">
            <h1 className="font-bold text-5xl text-center mt-10 mb-2 text-amber-800 dark:text-amber-500 pt-10">
                {title}
            </h1>
            <p className="text-center text-stone-700 dark:text-gray-300 text-xl mt-5 mb-10 px-4">
                {description}
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 px-4 dark:bg-gray-800">
                <button
                    onClick={() => {
                        setActiveFilter("all");
                        setShowAll(false);
                    }}
                    className={`px-4 py-2 rounded-md transition ${
                        activeFilter === "all"
                            ? "bg-amber-600 dark:bg-amber-700 text-white"
                            : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                >
                    All Dishes
                </button>
                <button
                    onClick={() => {
                        setActiveFilter("vegetarian");
                        setShowAll(false);
                    }}
                    className={`px-4 py-2 rounded-md transition ${
                        activeFilter === "vegetarian"
                            ? "bg-amber-600 dark:bg-amber-700 text-white"
                            : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                >
                    Vegetarian
                </button>
                <button
                    onClick={() => {
                        setActiveFilter("non-vegetarian");
                        setShowAll(false);
                    }}
                    className={`px-4 py-2 rounded-md transition ${
                        activeFilter === "non-vegetarian"
                            ? "bg-amber-600 dark:bg-amber-700 text-white"
                            : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                >
                    Non-Vegetarian
                </button>
                <button
                    onClick={() => {
                        setActiveFilter("special");
                        setShowAll(false);
                    }}
                    className={`px-4 py-2 rounded-md transition ${
                        activeFilter === "special"
                            ? "bg-amber-600 dark:bg-amber-700 text-white"
                            : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                >
                    Chef's Special
                </button>
            </div>

            {/* Dishes Grid */}
            <div className="w-full dark:bg-gray-800 py-8 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl md:max-w-7xl mx-auto px-4">
                    {displayedDishes.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow dark:shadow-gray-700/30 p-5 relative max-w-md mx-auto group overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-40 object-cover rounded mb-4 md:h-52"
                            />
                            <h2 className="text-xl font-semibold text-stone-900 dark:text-white">
                                {item.name}
                            </h2>

                            {/* Hover Content */}
                            <div className="absolute inset-0 bg-white dark:bg-gray-900 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-opacity-90 dark:bg-opacity-90">
                                <div>
                                    <p className="text-md text-gray-800 dark:text-gray-300 mb-2">
                                        {item.description}
                                    </p>
                                    <p className="text-md text-gray-600 dark:text-gray-300 mb-2">
                                        {item.category}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-amber-700 dark:text-amber-400 font-semibold text-md">
                                        ${item.price.toFixed(2)}
                                    </p>
                                    <button className="bg-amber-600 dark:bg-amber-700 text-white rounded-md px-4 py-2 text-sm hover:bg-amber-700 dark:hover:bg-amber-800 transition">
                                        Add to Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Toggle Button (Load More/Show Less) */}
                {filteredDishes.length > 3 && (
                    <div className="text-center mt-10">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-amber-600 dark:bg-amber-700 text-white rounded-md px-6 py-3 text-lg hover:bg-amber-700 dark:hover:bg-amber-800 transition"
                        >
                            {showAll
                                ? "Show Less"
                                : `Load More (${filteredDishes.length - 3})`}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
