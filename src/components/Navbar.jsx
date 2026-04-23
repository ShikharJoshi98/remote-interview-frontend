import { useState } from "react";
import { AuthModal } from "./Modal/AuthModal";
import { IoMenu } from "react-icons/io5";
import { homeNav } from "../constant/LandingPage";

export default function Navbar() {
    const [isAuthModal, setAuthModal] = useState(false);

    return (
        <header className="p-1 bg-black">
            <nav
                className="bg-gray-800/60 fixed z-10 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl mx-auto top-2 flex items-center justify-between py-3 px-4 sm:px-8 backdrop-blur-lg rounded-full">
                <div className="flex items-center gap-1 font-semibold">
                    <img
                        src="/remote_interview_logo.png"
                        alt="Interview Pro Logo"
                        className="w-12 h-12 object-contain shrink-0"
                    />
                    <h1 className="text-white text-lg sm:text-2xl">Interview<span className="text-blue-400">Pro</span></h1>
                </div>
                <ul className="md:flex items-center hidden gap-12 text-sm text-white list-none">
                    {
                        homeNav.map((navItem, index) => (
                            <li key={index} className="cursor-pointer text-white/60 hover:text-white font-semibold">
                                {navItem.title}
                            </li>
                        ))
                    }
                </ul>
                <aside className="flex items-center gap-2">
                    <button
                        onClick={() => setAuthModal(true)}
                        className="relative hidden focus:outline-none md:inline-flex h-10 overflow-hidden rounded-full p-0.5"
                    >
                        <span
                            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#93C5FD_0%,#3B82F6_40%,#1D4ED8_60%,#93C5FD_100%)]" />
                        <span
                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Get Started
                        </span>
                    </button>
                    <IoMenu className="text-white text-xl md:hidden block" />
                </aside>
            </nav>
            {
                isAuthModal && <AuthModal onClose={() => setAuthModal(false)} />
            }
        </header>
    )
}