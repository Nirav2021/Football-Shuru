import { Card } from "@/components/ui/card";
import { ChevronRight, Bookmark } from "lucide-react";
const img1 = "/Group27.png";
const img2 = "/Rectangle12-1.png";
const img3 = "/Rectangle.png";
const img4 = "/Rectangle12-2.png";
const img5 = "/Rectangle12-3.png";
const img6 = "/Rectangle12-4.png";

const news = [
    {
        image: img1,
        title: "Results And Scores From The Premier League...!!",
        time: "5 Hours Ago",
        featured: true,
    },
    {
        image: img2,
        title: "Here Are The Top 100 Players And Managers",
        time: "11 Oct 2023, 06:00 AM",
    },
    {
        image: img3,
        title: "Results And Scores From The Premier League...!!",
        time: "10 Oct 2023, 09:00 PM",
    },
    {
        image: img4,
        title: "Join Or Start A Competition Now!",
        time: "10 Oct 2023, 02:40 PM",
    },
    {
        image: img5,
        title: "Results And Scores From The Premier League...!!",
        time: "09 Oct 2023, 08:12 AM",
    },
    {
        image: img6,
        title: "Results And Scores From The Premier League...!!",
        time: "09 Oct 2023, 02:00 PM",
    },
];

export default function TrendingNews() {
    return (
        <Card className="flex flex-col bg-[#191B1E] border-none m-2 p-2 gap-4 rounded-xl shadow-lg w-full max-w-xs md:max-w-xs md:w-80 md:fixed md:right-2 md:top-0 md:bottom-1 md:overflow-y-auto sm:max-w-4xl sm:mx-auto">
            <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold text-lg">
                    Trending News
                </span>
                <ChevronRight className="w-5 h-5 text-[#C3CC5A]" />
            </div>
            {/* News */}
            <div className="mb-3">
                <img
                    src={news[0].image}
                    alt={news[0].title}
                    className="w-full h-28 object-cover rounded-xl mb-2"
                />
                <div className="flex items-start justify-between">
                    <div>
                        <div className="text-white font-semibold text-sm leading-tight mb-1">
                            {news[0].title}
                        </div>
                        <div className="text-[#bdbdbd] text-xs">
                            {news[0].time}
                        </div>
                    </div>
                    <Bookmark className="w-5 h-5 text-[#C3CC5A] fill-[#C3CC5A] mt-1" />
                </div>
            </div>
            {/* News List */}
            <div className="flex flex-col gap-3">
                {news.slice(1).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <div className="text-white font-semibold text-xs leading-tight mb-1">
                                {item.title}
                            </div>
                            <div className="text-[#bdbdbd] text-[10px]">
                                {item.time}
                            </div>
                        </div>
                        <Bookmark className="w-4 h-4 text-[#C3CC5A] mt-1" />
                    </div>
                ))}
            </div>
        </Card>
    );
}
