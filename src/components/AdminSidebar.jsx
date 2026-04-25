import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuLayoutDashboard } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { interviewerSideNav } from "../constant/DashboardConstant";

export default function Sidebar() {
    const [isSideNav, setSideNav] = useState(true);
    const location = useLocation();

    return (
        <aside
            className={`${isSideNav ? 'w-52' : 'w-20'} transition-all duration-300 min-h-screen hidden bg-[#090e1e] p-4 lg:block sticky top-0 left-0 border-r border-white/40`}
        >
            <div className="flex items-center gap-2">
                <img
                    src="/remote_interview_logo.png"
                    alt="Interview Pro Logo"
                    className="w-8 h-8 object-contain shrink-0"
                />
                <span
                    className={`text-md sm:text-xl mb-1 transition-all duration-300 font-semibold text-white tracking-tight
                    ${isSideNav
                            ? 'opacity-100 translate-x-0 w-auto'
                            : 'opacity-0 overflow-hidden w-0 pointer-events-none'
                        }`}
                >
                    Interview<span className="text-blue-500">Pro</span>
                </span>
            </div>
            <button
                onClick={() => setSideNav(!isSideNav)}
                className="absolute cursor-pointer z-50 -right-3 top-20 bg-zinc-800 border border-gray-300 text-white rounded-full p-1 shadow-md hover:scale-105 transition"
            >
                {isSideNav ? <LuChevronLeft size={16} /> : <LuChevronRight size={16} />}
            </button>
            <ul className="list-none space-y-2 mt-20">
                {interviewerSideNav.map((sideNavItem, index) => {
                    const Icon = sideNavItem.icon;
                    return (<li
                        className={`cursor-pointer relative flex items-center justify-between p-2 rounded-md text-white/70 group ${location.pathname === '/dashboard/candidate' ? 'bg-blue-500/10' : 'hover:bg-[#1c193d]'}`}
                    >
                        <div className="flex items-center gap-3">
                            <span className={`text-xl ${location.pathname === '/dashboard/candidate' ? 'text-[#9257f6]' : 'group-hover:text-[#9257f6] text-white/70'} `}>
                                <Icon />
                            </span>
                            <span
                                className={`font-semibold ${location.pathname === '/dashboard/candidate' ? 'text-white' : 'group-hover:text-white text-white/70'} transition-opacity duration-300 text-sm whitespace-nowrap
                                        ${isSideNav
                                        ? 'opacity-100'
                                        : 'opacity-0 w-0 overflow-hidden pointer-events-none'
                                    }`}
                            >
                                {sideNavItem.title}
                            </span>
                        </div>
                    </li>)
                }
                )}
            </ul>
        </aside>
    )
}