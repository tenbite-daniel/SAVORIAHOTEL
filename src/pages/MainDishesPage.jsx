import Dishes from "../components/Dishes";
import Header from "../components/Header";
import Footer from "../components/Footer";
const MainDishesPage = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Header />
            <Dishes
                title="Main Dishes"
                description="Bold flavors and generous portions designed to be the highlight of your meal."
                category="Main Dishes"
            />
            <Footer />
        </div>
    );
};
export default MainDishesPage;
