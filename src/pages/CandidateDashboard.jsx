import { FaRegUserCircle } from "react-icons/fa";
import { candidateCards, upcomingInterviews } from "../constant/DashboardConstant";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";

export default function CandidateDashboard() {
    return (
        <main className="py-5 px-4 sm:px-8">
            <div className="flex justify-between items-center text-white">
                <div>
                    <h1 className="text-2xl font-semibold">Welcome back, Robert!</h1>
                    <p className="text-white/60 text-sm mt-1">Here's what's happening with your interviews.</p>
                </div>
                <div className="hidden sm:flex gap-4">
                    <div className="flex gap-2">
                        <FaRegUserCircle className="text-white/80 text-4xl" />
                        <div>
                            <h3 className="text-sm">Robert Johnson</h3>
                            <p className="text-[10px] mt-1 text-white/50">Candidate</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    candidateCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div key={index} className="w-full rounded-2xl border border-white/10 bg-[#111827] p-5 shadow-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-sm font-medium text-slate-300">
                                        {card.title}
                                    </p>
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconBackgroundColor}`}>
                                        <Icon className="text-2xl text-white" />
                                    </div>
                                </div>
                                <h2 className="text-4xl mb-3 font-semibold tracking-tight text-white">
                                    {card.data}
                                </h2>
                                <p className="text-xs text-slate-500">
                                    {card.subText}
                                </p>
                            </div>
                        )
                    })}
            </div>
            <div className="w-full mt-4 rounded-2xl border border-white/10 bg-[#111827] p-5 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <p className="font-medium text-lg text-slate-300">Upcoming Interviews</p>
                    <button className="text-blue-500 cursor-pointer text-sm font-medium">View all</button>
                </div>
                {upcomingInterviews.map((interview, index) => (
                    <div key={index} className="mb-4">
                        <div className="grid grid-cols-2 sm:grid-cols-[0.2fr_auto_auto] items-center">
                            <div>
                                <p className="text-white sm:whitespace-nowrap">{interview.company}</p>
                                <p className="text-xs sm:whitespace-nowrap font-semibold text-slate-500">{interview.designation}</p>
                            </div>
                            <div className="text-slate-300 justify-self-end sm:justify-start space-y-1">
                                <div className="flex items-center gap-3">
                                    <CiCalendar />
                                    <p className="text-sm">{interview.date}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <GoClock />
                                    <p className="text-sm">{interview.time}</p>
                                </div>
                            </div>
                            <button className="border col-span-2 sm:col-span-1
                justify-self-end w-fit border-blue-500 mt-4 sm:mt-0 cursor-pointer hover:bg-blue-500/15 rounded-lg p-2 text-sm font-semibold text-blue-500">Start Interview</button>
                        </div>
                        {index != upcomingInterviews.length - 1 &&
                            <div className="h-px w-full mt-3 bg-white/15"></div>}
                    </div>
                ))}
            </div>
        </main>
    )
}