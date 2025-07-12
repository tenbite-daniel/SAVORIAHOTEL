import Dishes from "../components/Dishes";
import Header from "../components/Header";
import Footer from "../components/Footer";
const DessertsPage = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Header />
            <Dishes
                title="Desserts"
                description="Our sweet treats, baked with love to complete your dining experience."
                category="Desserts"
            />
            <Footer />
        </div>
    );
};
export default DessertsPage;
