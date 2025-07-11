import Dishes from "../components/Dishes";
const DessertsPage = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Dishes
                title="Desserts"
                description="Our sweet treats, baked with love to complete your dining experience."
                category="Desserts"
            />
        </div>
    );
};
export default DessertsPage;
