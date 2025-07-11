import Dishes from "../components/Dishes";
const MainDishesPage = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Dishes
                title="Main Dishes"
                description="Bold flavors and generous portions designed to be the highlight of your meal."
                category="Main Dishes"
            />
        </div>
    );
};
export default MainDishesPage;
