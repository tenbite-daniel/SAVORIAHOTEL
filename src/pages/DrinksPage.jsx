import Dishes from "../components/Dishes";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DrinksPage = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Header />
            <Dishes
                title="Drinks"
                description="Sip and relax with a drink from our cozy collection of beverages"
                category="Drinks"
            />
            <Footer />
        </div>
    );
};
export default DrinksPage;
