import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export function LandingPageLayout() {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <section className="bg-black flex-1">
                <Outlet />
            </section>
        </main>
    )
}