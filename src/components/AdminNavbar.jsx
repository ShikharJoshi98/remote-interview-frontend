import { useDispatch } from "react-redux"
import { logoutThunk } from "../store/features/auth/authThunk";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <nav
            className="py-4 px-5 sticky top-0 flex items-center justify-between border-b bg-[#030303] border-white/40">
            <h1 className="text-white text-2xl">Dashboard</h1>
            <button
                onClick={() => {
                    dispatch(logoutThunk())
                        .unwrap()
                        .then(() => {
                            navigate('/');
                        });
                }}
                className="focus:outline-none rounded-full bg-red-500/40 hover:bg-red-500/20 cursor-pointer border border-red-800 px-3 py-2 text-sm font-medium text-red-400 backdrop-blur-3xl">
                Logout
            </button>
        </nav>
    )
}