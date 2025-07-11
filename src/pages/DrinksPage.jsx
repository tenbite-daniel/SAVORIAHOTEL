import Dishes from "../components/Dishes";
const DrinksPage = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Dishes
                title="Drinks"
                description="Sip and relax with a drink from our cozy collection of beverages"
                category="Drinks"
            />
        </div>
    );
};
export default DrinksPage;
