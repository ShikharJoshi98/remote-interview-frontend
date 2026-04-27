import { Outlet } from "react-router-dom";
import Sidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

export default function DashboardLayout() {

    return (
        <main className="flex min-h-screen">
            <div className="sticky top-0 left-0">
                <Sidebar />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex-1 bg-[#090e1e]">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}