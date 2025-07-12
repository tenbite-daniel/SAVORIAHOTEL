import { Link } from "react-router-dom";

const Menu = ({ categories, descriptions }) => {
    // Function to generate route paths from category names
    const getRoutePath = (categoryName) => {
        switch (categoryName) {
            case "Starters":
                return "/starters";
            case "Main Dishes":
                return "/maindishes";
            case "Drinks":
                return "/drinks";
            case "Desserts":
                return "/desserts";
            default:
                return "/starters"; // fallback
        }
    };

    return (
        <div
            id="menu"
            className="bg-gray-50 dark:bg-gray-900 min-h-screen border border-gray-200 dark:border-gray-700 font-sans transition-colors duration-300"
        >
            {/* MENU Title */}
            <h1 className="font-bold text-5xl text-center mt-10 mb-2 text-stone-700 dark:text-gray-100">
                MENU
            </h1>
            <div className="text-xl text-center text-stone-700 dark:text-gray-300 mt-5 mb-10 px-4">
                Welcome to our table. Explore a menu crafted with care,
                featuring timeless favorites and comforting flavors.
            </div>

            {/* Menu Grid Full Width BG */}
            <div className="w-full bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-12 px-4">
                    {categories.map((cat) => (
                        <div
                            key={cat.name}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg flex flex-col p-5 relative shadow-md shadow-gray-300 dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
                        >
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full max-w-5xl h-52 object-cover rounded-lg mb-4"
                            />
                            <div className="font-semibold text-xl text-stone-900 dark:text-gray-100 mb-2 text-left">
                                {cat.name}
                            </div>
                            <div className="text-md text-gray-500 dark:text-gray-400 mb-8 text-left">
                                {descriptions[cat.name]}
                            </div>
                            <Link
                                to={getRoutePath(cat.name)}
                                className="absolute right-6 bottom-6 bg-amber-600 dark:bg-amber-700 text-white rounded px-4 py-2 text-sm hover:bg-amber-700 dark:hover:bg-amber-800 transition-colors duration-200 flex items-center justify-center"
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
