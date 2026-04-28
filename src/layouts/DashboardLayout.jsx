import { Outlet } from "react-router-dom";
import Sidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import { useSelector } from "react-redux";

export default function DashboardLayout() {
    const { user } = useSelector(state => state.auth);
    return (
        <main className="flex min-h-screen">
            <div className="sticky top-0 left-0">
                <Sidebar />
            </div>
            <div className="flex flex-col w-full">
                <div className={`flex-1 ${user?.role === 'interviewer' ? 'bg-[#090e1e]' : 'bg-[#070d18]'}`}>
                    <Outlet />
                </div>
            </div>
        </main>
    )
}