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
                <AdminNavbar />
                <div className="flex-1 text-white text-3xl bg-[#030303] overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}