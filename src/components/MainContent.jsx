"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { ChevronDown, Search } from "lucide-react";
import { Circle } from "lucide-react";
import moment from "moment";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { dateFilter } from "@/utility/constants";
// const API_URL = "/api/fixtures";
const footballBanner = "/banner.png";
const today = moment().format("YYYY-MM-DD");

export default function MainContent() {
    const [apiData, setApiData] = useState(null);
    const [date, setDate] = useState(today);
    const [calendarOpen, setCalendarOpen] = useState(false);
    // const [isLoadingData, setisLoadingData] = useState(true);

    const { isLoading, error, data } = useQuery({
        queryKey: ["fixtures", date],
        queryFn: async () => {
            // const res = await fetch(API_URL);
            const res = await fetch(`/api/fixtures?date=${date}`);
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        },
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (data) {
            setApiData(data.data);
            // setisLoadingData(false);
        }
    }, [data]);

    return (
        <main className="media-width flex flex-col gap-4 p-2 w-full mx-auto px-2 md:px-6 min-h-screen">
            {/* Header Image */}
            <div className="w-full h-40 md:h-56 rounded-xl mb-2 relative">
                <Image src={footballBanner} alt="Football Banner" sizes="" fill />
            </div>
            {/* Control */}
            <Card className="border-none bg-[#222222] px-3 py-3 flex flex-col gap-4 flex-1">
                {/* First Row: Live, Search, Dropdown */}
                <div className="flex items-center gap-3">
                    <Button className="flex items-center gap-2 px-2 py-2 rounded-xl bg-[#303030]">
                        <Circle className="w-4 h-4 text-[#C3CC5A] fill-[#C3CC5A]" />
                        <span className=" text-[#C3CC5A] text-lg">Live</span>
                        <span className="text-white text-lg">[1]</span>
                    </Button>
                    <div className="flex w-full relative">
                        <Input
                            className="rounded-xl font-sofia-sans text-center bg-[#303030] px-2 py-2 text-sm w-full focus:outline-none text-white placeholder:text-white border border-transparent focus:border-[#C3CC5A]"
                            placeholder="Search For Matches"
                        />
                        <Search className="w-4 font-bold h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white" />
                    </div>
                    <div>
                        <Select defaultValue="all">
                            <SelectTrigger className="w-44 h-10 font-sofia-sans gap-5 bg-[#303030] border-none rounded-xl px-2 flex justify-between text-white text-sm font-medium shadow-none focus:ring-0">
                                <SelectValue placeholder="All Matches" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#303030] text-white rounded-xl border-none">
                                <SelectItem value="all" selected>
                                    All Matches
                                </SelectItem>
                                <SelectItem value="live">Live</SelectItem>
                                <SelectItem value="upcoming">
                                    Upcoming
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {/* Date Buttons */}
                <div className="flex flex-row gap-1 w-full">
                    {dateFilter.map((ele, idx) => (
                        <Button
                            key={ele.day}
                            onClick={() => setDate(ele.value)}
                            className={`font-sofia-sans w-full flex-1 h-10 rounded-lg text-xs text-light px-2 py-1 shadow-none border ${
                                date === ele.value
                                    ? "border-[#C3CC5A] text-[#C3CC5A] bg-[#303030]"
                                    : "border-transparent text-white bg-[#303030] hover:bg-[#23262F]"
                            }`}
                        >
                            <div className="flex flex-col">
                                <span>{ele.day}</span>
                                <span>{ele.date}</span>
                            </div>
                        </Button>
                    ))}
                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                key={"calendar"}
                                // onClick={()=>setDate(ele.value)}
                                className={`font-sofia-sans w-full flex-1 h-10 rounded-lg text-xs text-light px-2 py-1 shadow-none border border-[#C3CC5A] text-[#C3CC5A] bg-[#303030]`}
                            >
                                <CalendarIcon className="w-7 h-7 text-[#C3CC5A]" />
                                <span className="flex flex-col items-start">
                                    <span className="text-[#C3CC5A]">View</span>
                                    <span className="text-white -mt-1">
                                        Calender
                                    </span>
                                </span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-[#303030] border-none">
                            <Calendar
                                mode="single"
                                selected={date ? new Date(date) : undefined}
                                onSelect={(d) => {
                                    if (d) {
                                        setDate(moment(d).format("YYYY-MM-DD"));
                                        setCalendarOpen(false);
                                    }
                                }}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                {/* Match Cards */}
                <div className="flex flex-col gap-4 mt-4">
                    {apiData && (
                        <>
                            {apiData?.map((data, idx) => (
                                <Card
                                    key={idx}
                                    className="bg-[#303030] text-white rounded-xl border-none overflow-hidden"
                                >
                                    <div className="font-sofia-sans bg-[#000000] text-sm p-2 flex">
                                        <div className="flex gap-5">
                                            <div>
                                                <img
                                                    src={data.venue.image_path}
                                                    alt="league"
                                                    className="w-5 h-5 rounded-md"
                                                ></img>
                                            </div>
                                            <div>{data.name}</div>
                                        </div>
                                        <div className="text-[#303030] font-bold flex m-auto">
                                            [{data.stage.name}]
                                        </div>
                                    </div>

                                    <div className="font-sofia-sans bg-[#303030] text-sm p-2 flex">
                                        <div className="flex p-1">
                                            <div
                                                // className={`${
                                                //     data.season.is_current
                                                //         ? "text-[#C3CC5A]"
                                                //         : "text-white"
                                                // }`}
                                                className="text-white"
                                            >
                                                {/* {data.season.is_current
                                            ? "Live"
                                            : moment.unix(data.starting_at_timestamp).format('HH:mm')} */}
                                                {moment
                                                    .unix(
                                                        data.starting_at_timestamp
                                                    )
                                                    .format("HH:mm")}
                                            </div>
                                            <div className="ml-40 font-bold">
                                                {
                                                    data.participants[0].country
                                                        .name
                                                }
                                            </div>
                                        </div>
                                        <div className="flex p-1">
                                            <div>
                                                <img
                                                    src={
                                                        data.participants[0]
                                                            .country.image_path
                                                    }
                                                    alt="league"
                                                    className="w-5 h-5 rounded-md"
                                                ></img>
                                            </div>
                                            <div className="ml-5">
                                                <img
                                                    src={
                                                        data.participants[1]
                                                            .country.image_path
                                                    }
                                                    alt="league"
                                                    className="w-5 h-5 rounded-md"
                                                ></img>
                                            </div>
                                            <div className="ml-2 font-bold">
                                                {
                                                    data.participants[1].country
                                                        .name
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </>
                    )}

                    {!isLoading && !apiData && (
                        <>
                            <div className="flex justify-center">
                                <h1 className="text-white mt-10">
                                    No data found for selected date.
                                </h1>
                            </div>
                        </>
                    )}

                    {isLoading && (
                        <>
                            <div className="flex justify-center">
                                <h1 className="text-white mt-10">
                                    Loading data...
                                </h1>
                            </div>
                        </>
                    )}
                </div>
            </Card>
        </main>
    );
}
