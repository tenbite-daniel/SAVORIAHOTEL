import Dishes from "../components/Dishes";
const Starterspage = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Dishes
                title="Starters"
                description="Explore our delicious starter dishes — light, flavorful, and
                perfect to begin your meal."
                category="Starters"
            />
        </div>
    );
};

export default Starterspage;
