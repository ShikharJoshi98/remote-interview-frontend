import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { candidateSideNav, interviewerSideNav } from "../constant/DashboardConstant";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../store/features/auth/authThunk";

export default function Sidebar() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [isSideNav, setSideNav] = useState(true);
    const location = useLocation();

    const handleLogout = async () => {
        dispatch(logoutThunk())
            .unwrap()
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.error(err.message);
            });
    }

    return (
        <aside
            className={`${isSideNav ? 'w-54' : 'w-20'} transition-all duration-300 min-h-screen hidden ${user?.role === 'interviewer' ? 'bg-[#090e1e]' : 'bg-[#070d18]'} p-4 lg:block sticky top-0 left-0 border-r border-white/15`}
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
                className="absolute cursor-pointer z-50 -right-3 top-20 bg- border border-white/70 text-white rounded-full p-1 bg-[#090e1e] shadow-md hover:scale-105 transition"
            >
                {isSideNav ? <LuChevronLeft size={16} /> : <LuChevronRight size={16} />}
            </button>
            <ul className="list-none space-y-2 mt-20">
                {(user?.role === 'interviewer' ? interviewerSideNav : candidateSideNav).map((sideNavItem, index) => {
                    const Icon = sideNavItem.icon;
                    return (
                        <li
                            onClick={() => navigate(sideNavItem.path)}
                            key={index}
                            className={`cursor-pointer relative flex items-center justify-between p-2 rounded-md text-white/70 group ${location.pathname === sideNavItem.path ? (user?.role === 'interviewer' ? 'bg-purple-500/10' : 'bg-blue-500/15') : (user?.role === 'interviewer' ? 'hover:bg-[#1c193d]' : 'hover:bg-blue-500/10')}`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`text-xl ${location.pathname === sideNavItem.path ? (user?.role === 'interviewer' ? 'text-[#9257f6]' : 'text-[#2578fb]') : (user?.role === 'candidate' ? 'group-hover:text-[#2578fb] text-white/70' :
                                    'group-hover:text-[#9257f6] text-white/70')} `}>
                                    <Icon />
                                </span>
                                <span
                                    className={`font-semibold ${location.pathname === sideNavItem.path ? 'text-white' : 'group-hover:text-white text-white/70'} transition-opacity duration-300 text-sm whitespace-nowrap
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
            <button onClick={handleLogout} className="flex items-center gap-3 p-2 cursor-pointer absolute bottom-10 hover:text-red-600 text-red-500">
                <span className='text-xl'>
                    <LuLogOut />
                </span>
                <span
                    className={`font-semibold transition-opacity duration-300 text-sm whitespace-nowrap ${isSideNav ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden pointer-events-none'}`}
                >
                    Logout
                </span>
            </button>
        </aside>
    )
}