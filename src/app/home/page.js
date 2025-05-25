import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import TrendingNews from "../../components/TrendingNews";

export default function Home() {
    return (
        <>
            <div className="flex md:flex-row sm:flex-col">
                <div className="">
                    <MainContent />
                </div>
                <div className="">
                    <TrendingNews />
                </div>
            </div>
        </>
    );
}
