// Signature Dish Images
import TruffleRisotto from "../assets/images/signature dishes/truffle-risotto.png";
import OssoBuco from "../assets/images/signature dishes/osso-buco.png";
import ClassicTiramisu from "../assets/images/signature dishes/classic-tiramisu.png";
import LinguineAlle from "../assets/images/signature dishes/linguine-alle-vongole.png";
import AntipastoDella from "../assets/images/signature dishes/antipasto-della-casa.png";
import BranzinoAl from "../assets/images/signature dishes/branzino-al-sale.png";
import PannaCotta from "../assets/images/signature dishes/panna-cotta.png";
import CarbonaraRomana from "../assets/images/signature dishes/carbonara-romana.png";

// Menu Images
import startersImg from "../assets/images/Starters.png";
import mainDishesImg from "../assets/images/MainDishes.jpg";
import drinksImg from "../assets/images/Drinks.jpg";
import dessertsImg from "../assets/images/Desserts.jpg";

// Starter Images
import TomatoBasil from "../assets/images/TomatoBasil.png";
import Calamari from "../assets/images/Calamari.png";
import Trio from "../assets/images/Bruschetta.png";
import Mushrooms from "../assets/images/Stuffed Mushrooms.png";
import Cocktail from "../assets/images/Shrimp cocktail.png";
import Spinach from "../assets/images/Spinachdip.png";

// Main Dishe Images
import ButternutSquash from "../assets/images/main dishes/Butternut Squash.png";
import ChickenMarsala from "../assets/images/main dishes/Chicken Marsala.png";
import ClassicCarbonara from "../assets/images/main dishes/Classic Carbonara.png";
import GrilledSteak from "../assets/images/main dishes/Grilled Pepper Steak.png";
import LentilPie from "../assets/images/main dishes/Lentil and Mushroom Shepherd's Pie.png";
import PrawnCurry from "../assets/images/main dishes/Prawn & Coconut Curry.png";

// Drink Images
import IcedTea from "../assets/images/drinks/Berry Blast Iced Tea.png";
import CoconutCitrus from "../assets/images/drinks/Coconut Citrus Cooler.png";
import MintyLemon from "../assets/images/drinks/Minty Lemon Sparkler.png";
import ChaiLatte from "../assets/images/drinks/Spiced Chai Latte.png";
import TropicalSunset from "../assets/images/drinks/Tropical Sunset Punch.png";
import VanillaSmoothie from "../assets/images/drinks/Vanilla Banana Smoothie.png";

// Dessert Images
import ChocolateCake from "../assets/images/deserts/Chocolate Lava Cake.png";
import CinnamonCrumble from "../assets/images/deserts/Cinnamon Apple Crumble.png";
import DateOat from "../assets/images/deserts/Date & Oat Energy Bites.png";
import FruitDelight from "../assets/images/deserts/Fruit Skewer Delight.png";
import MangoPudding from "../assets/images/deserts/Mango Coconut Pudding.png";
import MiniCheesecakes from "../assets/images/deserts/Mini Vanilla Bean Cheesecakes.png";

// Signature Dishes Details
export const signatureDishes = [
    {
        id: 1,
        name: "Truffle Risotto",
        description: "Creamy Arborio rice with black truffle and aged Parmesan",
        category: "Vegetarian",
        image: TruffleRisotto,
        isSpecial: false,
        price: 22.5,
    },
    {
        id: 2,
        name: "Osso Buco",
        description: "Slow-braised veal shank with saffron risotto milanese",
        category: "Non-Vegetarian",
        image: OssoBuco,
        isSpecial: false,
        price: 26.0,
    },
    {
        id: 3,
        name: "Classic Tiramisu",
        description:
            "Traditional mascarpone dessert with espresso-soaked ladyfingers",
        category: "Vegetarian",
        image: ClassicTiramisu,
        isSpecial: true,
        price: 9.5,
    },
    {
        id: 4,
        name: "Linguine alle Vongole",
        description: "Fresh clams with white wine, garlic, and parsley",
        category: "Non-Vegetarian",
        image: LinguineAlle,
        isSpecial: true,
        price: 18.0,
    },
    {
        id: 5,
        name: "Antipasto della Casa",
        description: "Selection of cured meats, artisanal cheeses, and olives",
        category: "Non-Vegetarian",
        image: AntipastoDella,
        isSpecial: true,
        price: 14.0,
    },
    {
        id: 6,
        name: "Branzino al Sale",
        description: "Mediterranean sea bass baked in sea salt crust",
        category: "Non-Vegetarian",
        image: BranzinoAl,
        isSpecial: false,
        price: 25.0,
    },
    {
        id: 7,
        name: "Panna Cotta",
        description: "Silky vanilla custard with seasonal berry compote",
        category: "Vegetarian",
        image: PannaCotta,
        isSpecial: true,
        price: 8.0,
    },
    {
        id: 8,
        name: "Carbonara Romana",
        description: "Traditional Roman pasta with pancetta and pecorino",
        category: "Non-Vegetarian",
        image: CarbonaraRomana,
        isSpecial: false,
        price: 16.0,
    },
];

// Menu Details
export const menuCategories = [
    { name: "Starters", img: startersImg, path: "/starters" },
    { name: "Main Dishes", img: mainDishesImg, path: "/mainDishes" },
    { name: "Drinks", img: drinksImg, path: "/drinks" },
    { name: "Desserts", img: dessertsImg, path: "/desserts" },
];

// Descriptions
export const menuDescriptions = {
    Starters:
        "Delicious bites to share or savor, setting the perfect tone for your dining experience.",
    "Main Dishes":
        "The main event. Bold flavors and creative combinations designed to delight.",
    Drinks: "Raise a glass to refreshment. Classic and creative beverages for every mood.",
    Desserts:
        "Our sweet treats, baked with love to complete your dining experience.",
};

// Dishes Data
export const dishes = [
    // Starters
    {
        id: 1,
        name: "Tomato Basil Soup",
        description:
            "A creamy tomato soup served with fresh basil and garlic bread, perfect for warming your soul.",
        price: 8.99,
        category: "Starters",
        image: TomatoBasil,
    },
    {
        id: 2,
        name: "Crispy Clamari",
        description:
            "Golden fried squid rings served with zesty marinara sauce and fresh lemon wedges.",
        price: 12.99,
        category: "Starters",
        image: Calamari,
    },
    {
        id: 3,
        name: "Bruschetta Trio",
        description:
            "Three varieties of toasted bread topped with fresh tomatoes, mozzarella, and aromatic herbs.",
        price: 10.99,
        category: "Starters",
        image: Trio,
    },
    {
        id: 4,
        name: "Stuffed Mussrooms",
        description:
            "Button mushrooms filled with herbed cream cheese, breadcrumbs, and baked to perfection.",
        price: 9.99,
        category: "Starters",
        image: Mushrooms,
    },
    {
        id: 5,
        name: "Shrimp Cocktail",
        description:
            "Chilled jumbo shrimp served with our signature cocktail sauce and fresh lemon.",
        price: 14.99,
        category: "Starters",
        image: Cocktail,
    },
    {
        id: 6,
        name: "Spinach Artichoke Dip",
        description:
            "Chilled jumbo shrimp served with our signature cocktail sauce and fresh lemon.",
        price: 11.99,
        category: "Starters",
        image: Spinach,
    },
    // Main Dishes
    {
        id: 7,
        name: "Grilled Pepper Steak",
        description:
            "A tender fillet steak grilled to perfection, served with a peppercorn sauce and roasted potatoes",
        price: 19.25,
        category: "Main Dishes",
        image: GrilledSteak,
    },
    {
        id: 8,
        name: "Butternut Squash Ravioli",
        description:
            "Handmade ravioli filled with roasted butternut squash and ricotta, tossed in a brown butter sage sauce",
        price: 13.0,
        category: "Main Dishes",
        image: ButternutSquash,
    },
    {
        id: 9,
        name: "Chicken Marsala",
        description:
            "Pan-seared chicken breast in a creamy mushroom and Marsala wine sauce, served with linguine pasta",
        price: 14.75,
        category: "Main Dishes",
        image: ChickenMarsala,
    },
    {
        id: 10,
        name: "Prawn & Coconut Curry",
        description:
            "Large prawns in a fragrant coconut curry sauce, with notes of lemongrass and ginger, served with rice",
        price: 18.5,
        category: "Main Dishes",
        image: PrawnCurry,
    },
    {
        id: 11,
        name: "Lentil and Mushroom Shepherd's Pie",
        description:
            "A rich, savory filling of lentils, mushrooms, and vegetables topped with a creamy potato mash",
        price: 12.75,
        category: "Main Dishes",
        image: LentilPie,
    },
    {
        id: 12,
        name: "Classic Carbonara",
        description:
            "Spaghetti tossed in a rich sauce of egg yolk, Pecorino Romano cheese, cured pork  and black pepper",
        price: 13.95,
        category: "Main Dishes",
        image: ClassicCarbonara,
    },
    // Drinks
    {
        id: 13,
        name: "Tropical Sunset Punch",
        description:
            "A fruity mix of mango, pineapple, and orange juice. Kid-friendly and vegetarian",
        price: 3.8,
        category: "Drinks",
        image: TropicalSunset,
    },
    {
        id: 14,
        name: "Minty Lemon Sparkler",
        description:
            "Light, fizzy lemon soda with fresh mint. A refreshing non-alcoholic choice for tourists.",
        price: 4.5,
        category: "Drinks",
        image: MintyLemon,
    },
    {
        id: 15,
        name: "Vanilla Banana Smoothie",
        description:
            "Creamy blend of banana, vanilla, and oat milk. Great for vegetarians and kids.",
        price: 4.2,
        category: "Drinks",
        image: VanillaSmoothie,
    },
    {
        id: 16,
        name: "Spiced Chai Latte",
        description:
            "Warm tea with spices and steamed milk. A cozy option for everyone, especially tourists.",
        price: 3.9,
        category: "Drinks",
        image: ChaiLatte,
    },
    {
        id: 17,
        name: "Berry Blast Iced Tea",
        description:
            "Blackberry and strawberry infused tea over ice. No caffeine. Ideal for kids.",
        price: 3.5,
        category: "Drinks",
        image: IcedTea,
    },
    {
        id: 18,
        name: "Coconut Citrus Cooler",
        description:
            "Coconut water, lime, and orange - refreshing and hydrating. 100% vegetarian.",
        price: 3.7,
        category: "Drinks",
        image: CoconutCitrus,
    },
    // Desserts
    {
        id: 19,
        name: "Mango Coconut Pudding",
        description:
            "Creamy tropical dessert with fresh mango and coconut milk. Dairy-free and vegetarian.",
        price: 4.5,
        category: "Desserts",
        image: MangoPudding,
    },
    {
        id: 20,
        name: "Chocolate Lava Cake",
        description:
            "Warm, gooey chocolate cake with a molten center. A rich treat loved by kids and tourists.",
        price: 5.2,
        category: "Desserts",
        image: ChocolateCake,
    },
    {
        id: 21,
        name: "Fruit Skewer Delight",
        description:
            "Fresh watermelon, grapes, strawberries, and pineapple. Light and perfect for kids and vegetarians.",
        price: 3.8,
        category: "Desserts",
        image: FruitDelight,
    },
    {
        id: 22,
        name: "Cinnamon Apple Crumble",
        description:
            "Baked apples with a crunchy oat topping. A comforting, tourist-friendly dessert.",
        price: 4.0,
        category: "Desserts",
        image: CinnamonCrumble,
    },
    {
        id: 23,
        name: "Mini Vanilla Bean Cheesecakes",
        description:
            "Individual creamy cheesecakes topped with seasonal fruits. Elegant and vegetarian-friendly.",
        price: 4.7,
        category: "Desserts",
        image: MiniCheesecakes,
    },
    {
        id: 24,
        name: "Date & Oat Energy Bites",
        description:
            "No-bake, naturally sweetened bites - great for vegetarians and a healthy kid-friendly option.",
        price: 3.5,
        category: "Desserts",
        image: DateOat,
    },
];
