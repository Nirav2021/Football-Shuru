import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import TrendingNews from "../../components/TrendingNews";

export default function Home() {
    return (
        <>
            <div className="flex sm:flex-col">
                <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto">
                    <MainContent />
                </div>
                <div className="w-full md:w-80 flex-shrink-0">
                    <TrendingNews />
                </div>
            </div>
        </>
    );
}
