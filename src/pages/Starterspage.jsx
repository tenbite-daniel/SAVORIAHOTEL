import Dishes from "../components/Dishes";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Starterspage = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Header />
            <Dishes
                title="Starters"
                description="Explore our delicious starter dishes — light, flavorful, and
                perfect to begin your meal."
                category="Starters"
            />
            <Footer />
        </div>
    );
};

export default Starterspage;
