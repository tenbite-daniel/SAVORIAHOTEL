import { dishes } from "../Data/dishes";

export default function Dishes(props) {
    return (
        <div className="dark:bg-gray-800 bg-gray-50">
            {/* Title & Description */}
            <h1 className="font-bold text-5xl text-center pt-10 mb-2 text-stone-700 dark:text-gray-100">
                {props.title}
            </h1>
            <p className="text-center text-stone-700 dark:text-gray-300 text-xl mt-5 mb-10 px-4">
                {props.description}
            </p>

            {/* Dishes Grid */}
            <div className="w-full bg-gray-50 dark:bg-gray-800 py-8 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl md:max-w-7xl mx-auto px-4">
                    {dishes
                        .filter((item) => item.category === props.category)
                        .map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow dark:shadow-gray-700/30 p-5 relative max-w-md mx-auto hover:shadow-lg dark:hover:shadow-gray-700/50 transition"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-40 object-cover rounded mb-4 md:h-52"
                                />
                                <h2 className="text-xl font-semibold text-stone-900 dark:text-white">
                                    {item.name}
                                </h2>
                                <p className="text-md text-gray-600 dark:text-gray-300 mb-2">
                                    {item.description}
                                </p>
                                <p className="text-amber-700 dark:text-amber-400 font-semibold text-md">
                                    ${item.price.toFixed(2)}
                                </p>
                                <button className="absolute right-6 bottom-4 bg-amber-600 dark:bg-amber-700 text-white rounded-md px-4 py-2 text-sm hover:bg-amber-700 dark:hover:bg-amber-800 transition">
                                    Add to Order
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
