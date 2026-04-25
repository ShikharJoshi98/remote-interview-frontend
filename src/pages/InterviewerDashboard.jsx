import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function InterviewerDashboard() {
    return (
        <div className="py-4 px-4 sm:px-8">
            <div className="flex justify-between text-white">
                <div>
                    <h1 className="text-2xl font-semibold">Welcome back, Alex!</h1>
                    <p className="text-white/60 text-sm mt-1">Here's an overview of your interviews and candidates.</p>
                </div>
                <div className="hidden sm:flex gap-4">
                    <div className="flex gap-2">
                        <FaRegUserCircle className="text-white/80 text-4xl" />
                        <div>
                            <h3 className="text-sm">Alex Johnson</h3>
                            <p className="text-[10px] mt-1 text-white/50">Interviewer</p>
                        </div>
                    </div>
                    <IoIosArrowDown className="text-white/60 mt-1 cursor-pointer hover:text-white" />
                </div>
            </div>
        </div>
    )
}