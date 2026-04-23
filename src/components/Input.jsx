import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Input({ ...props }) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = props.type === "password";

    return (
        <span className="relative w-full block">
            <input
                {...props}
                type={isPassword ? (showPassword ? "text" : "password") : props.type || "text"}
                placeholder={props.placeholder}
                className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none"
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            )}
        </span>
    )
}