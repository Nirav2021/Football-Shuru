"use client";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { Input } from "./ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Home,
    Trophy,
    Landmark,
    MessageCircle,
    Bell,
    Users,
    User,
    MapPin,
    Settings,
    Download,
    Sun,
    Moon,
    LogOut,
    ChevronRight,
    DiscAlbum,
    Shield,
    Search,
    LogIn,
} from "lucide-react";

const navLinks = [
    { label: "Home", icon: Home, active: true, href: "/home" },
    { label: "Leader Board", icon: Users, href: "/" },
    { label: "Ground", icon: DiscAlbum, href: "/" },
    { label: "Chat", icon: MessageCircle, href: "/" },
    { label: "Notification", icon: Bell, href: "/" },
];

const followed = [
    { label: "Followed Team", icon: Shield },
    { label: "Followed Players", icon: User },
    { label: "Followed Ground", icon: MapPin },
];

export default function Sidebar() {
    const [theme, setTheme] = useState("dark");
    const [currentMenu, setCurrentMenu] = useState("Home");
    const router = useRouter();

    const buttonClickHandler = (item) => {
        router.push(item.href);
        setCurrentMenu(item.label);
    };

    return (
        <aside className="flex flex-col md:fixed justify-between gap-2 bg-[#222222] mt-2 ml-2 p-2 rounded-xl shadow-lg md:bottom-1 top-0.5">
            {/* Logo */}
            <div className="flex flex-col">
                <div className="flex mb-2 mt-2 ml-4">
                    <span className="font-sofia-sans font-bold text-white">
                        FOOTBALL
                    </span>
                    <span className="font-sofia-sans italic text-[#C3CC5A]">
                        SHURU
                    </span>
                </div>
                {/* Search */}
                <div className="relative mb-2">
                    <Input
                        className="rounded font-sofia-sans text-center bg-[#303030] px-2 py-2 text-sm w-full focus:outline-none text-white placeholder:text-white border border-transparent focus:border-[#C3CC5A]"
                        placeholder="Search"
                    />
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Navigation */}
                <nav className="flex flex-col gap-0 mb-1">
                    {navLinks.map((item) => (
                        <Button
                            key={item.label}
                            variant="ghost"
                            onClick={() => buttonClickHandler(item)}
                            className={`font-sofia-sans relative justify-start px-3 py-2 text-sm font-medium flex gap-3 hover:bg-[#23262F] bg-[#222222] `}
                        >
                            {item.label === currentMenu && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-1 rounded-r-full bg-[#C3CC5A]" />
                            )}

                            <item.icon
                                className={`w-5 h-5 ${
                                    item.label === currentMenu
                                        ? "text-[#C3CC5A]"
                                        : "text-white"
                                }`}
                            />
                            <div
                                className={`${
                                    item.label === currentMenu
                                        ? "text-[#C3CC5A]"
                                        : "text-white"
                                }`}
                            >
                                {item.label}
                            </div>
                        </Button>
                    ))}
                </nav>
                <div className="border-t border-[#f1f1f2] my-1" />
                {/* Followed */}
                <div className="flex flex-col gap-0 mb-1">
                    {followed.map((item) => (
                        <Button
                            key={item.label}
                            variant="ghost"
                            onClick={() => setCurrentMenu(item.label)}
                            className="font-sofia-sans relative justify-start px-3 py-2 text-xs flex gap-3 text-white hover:bg-[#23262F]"
                        >
                            {item.label === currentMenu && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-1 rounded-r-full bg-[#C3CC5A]" />
                            )}

                            {/* <item.icon className="w-4 h-4 text-white" /> */}
                            <item.icon
                                className={`w-5 h-5 ${
                                    item.label === currentMenu
                                        ? "text-[#C3CC5A]"
                                        : "text-white"
                                }`}
                            />
                            {/* <div>{item.label}</div> */}
                            <div
                                className={`${
                                    item.label === currentMenu
                                        ? "text-[#C3CC5A]"
                                        : "text-white"
                                }`}
                            >
                                {item.label}
                            </div>

                            <ChevronRight className="ml-auto w-4 h-4 text-[#f1f1f2]" />
                        </Button>
                    ))}
                </div>
                <div className="border-t border-[#f1f1f2] my-1" />
                {/* Settings & Download */}
                <div className="flex flex-col gap-0 mb-1">
                    <Button
                        variant="ghost"
                        onClick={() => setCurrentMenu("settings")}
                        className="font-sofia-sans relative justify-start w-full text-left px-3 py-2 text-sm flex items-center gap-3 text-white hover:bg-[#23262F] rounded-lg"
                    >
                        {currentMenu === "settings" && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-1 rounded-r-full bg-[#C3CC5A]" />
                        )}
                        <Settings
                            className={`w-5 h-5 ${
                                currentMenu === "settings"
                                    ? "text-[#C3CC5A]"
                                    : "text-white"
                            }`}
                        />
                        <div
                            className={`${
                                currentMenu === "settings"
                                    ? "text-[#C3CC5A]"
                                    : "text-white"
                            }`}
                        >
                            Settings
                        </div>
                    </Button>
                    <Button
                        variant="ghost"
                        className="font-sofia-sans justify-start w-full text-left px-3 py-2 text-sm flex items-center gap-3 text-white hover:bg-[#23262F] rounded-lg"
                    >
                        <Download className="w-5 h-5 text-white" /> Download The
                        App
                    </Button>
                </div>
                {/* Theme Switch */}
                <div className="flex items-center justify-center gap-3 bg-[#303030] rounded-lg px-1 py-1">
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium ${
                            theme === "light"
                                ? "bg-[#222222] text-white"
                                : "text-white"
                        }`}
                        onClick={() => setTheme("light")}
                    >
                        <Sun className="w-4 h-4" /> Light
                    </button>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium ${
                            theme === "dark"
                                ? "bg-[#222222] text-white"
                                : "text-white"
                        }`}
                        onClick={() => setTheme("dark")}
                    >
                        <Moon className="w-4 h-4" /> Dark
                    </button>
                </div>
            </div>
            {/* User Info */}

            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-2">
                    {/* Avatar */}
                    <div className="flex bg-[#303030] rounded-lg overflow-hidden">
                        <Avatar className="flex relative w-10 h-15 m-1 rounded-xl bg-[#C8D34A] justify-center">
                            <img
                                src="/user-icon.png"
                                alt="User"
                                className="absolute w-7 h-7 bottom-0"
                            />
                        </Avatar>
                        {/* Info Box */}
                        <div className="bg-[#303030] px-0 py-0 pt-1 flex flex-col justify-center">
                            <span className="font-sofia-sans text-xs font-bold text-[#C8D34A] leading-tight">
                                Varun_kubal
                            </span>
                            <span className="font-sofia-sans text-xs text-white leading-tight">
                                varun_kubal@gmail.com
                            </span>
                        </div>
                    </div>
                    {/* Logout Button */}
                    <Button className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#303030]">
                        <LogOut className="w-50 h-50 text-[#C3CC5A]" />
                    </Button>
                </div>
            </div>
        </aside>
    );
}
