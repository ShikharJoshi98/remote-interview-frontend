import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { LuCalendar, LuPlus } from "react-icons/lu";
import { interviewCandidates, interviewerCards, quickActionsArray } from "../constant/DashboardConstant";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { Pie, PieChart, Cell } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
    { name: "Completed", value: 60, color: "#22c55e" },
    { name: "Scheduled", value: 23, color: "#3b82f6" },
    { name: "Cancelled", value: 10, color: "#f97316" },
    { name: "No Show", value: 7, color: "#8b5cf6" },
];

export default function InterviewerDashboard() {
    return (
        <div className="py-5 px-4 sm:px-8">
            <div className="flex justify-between items-center text-white">
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
            <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    interviewerCards.map((card, index) => {
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
                    })
                }
            </div>
            <div className="w-full mt-4 rounded-2xl border border-white/10 bg-[#111827] p-5 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <p className="font-medium text-lg text-slate-300">Upcoming Interviews</p>
                    <button className="text-violet-500 cursor-pointer text-sm font-medium">View all</button>
                </div>
                {interviewCandidates.map((candidate, index) => (
                    <div key={index} className="mb-4">
                        <div className="grid grid-cols-2 sm:grid-cols-[0.2fr_auto_auto] items-center">
                            <div>
                                <p className="text-white sm:whitespace-nowrap">{candidate.candidateName}</p>
                                <p className="text-xs sm:whitespace-nowrap font-semibold text-slate-500">{candidate.designation}</p>
                            </div>
                            <div className="text-slate-300 justify-self-end sm:justify-start space-y-1">
                                <div className="flex items-center gap-3">
                                    <CiCalendar />
                                    <p className="text-sm">{candidate.date}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <GoClock />
                                    <p className="text-sm">{candidate.time}</p>
                                </div>
                            </div>
                            <button className="border col-span-2 sm:col-span-1
    justify-self-end w-fit border-violet-500 mt-4 sm:mt-0 cursor-pointer hover:bg-violet-500/15 rounded-lg p-2 text-sm font-semibold text-violet-500">Start Interview</button>
                        </div>
                        {index != interviewCandidates.length - 1 &&
                            <div className="h-px w-full mt-3 bg-white/15"></div>}
                    </div>
                ))}
            </div>
            <div className="mt-4 grid gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="w-full rounded-2xl border border-white/10 bg-[#111827] p-5 shadow-lg">
                    <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-10">
                        <p className="font-medium text-lg text-slate-300">Interview Insights</p>
                        <select className="text-white/80 bg-[#111827] rounded-xl border border-gray-500 p-2 cursor-pointer text-sm font-medium">
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                            <option value="year">This Year</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between">
                        <div className="h-42 w-42 lg:h-48 lg:w-48 relative">
                            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    cornerRadius="50%"
                                    paddingAngle={5}
                                    stroke="none"
                                    isAnimationActive={true}
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={index}
                                            fill={entry.color}
                                        />
                                    ))}
                                </Pie>
                                <RechartsDevtools />
                            </PieChart>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h3 className="text-4xl font-bold text-white">
                                    18
                                </h3>
                                <p className="text-sm text-slate-400">
                                    Interviews
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {data.map(item => (
                                <div
                                    key={item.name}
                                    className="flex text-sm items-center justify-between gap-8"
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="h-3 w-3 rounded-full"
                                            style={{ background: item.color }}
                                        />
                                        <span className="text-slate-300">
                                            {item.name}
                                        </span>
                                    </div>

                                    <span className="text-white font-medium">
                                        {item.value}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-2xl border border-white/10 bg-[#111827] p-5 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                        <p className="font-medium text-lg text-slate-300">Quick Actions</p>
                    </div>
                    {quickActionsArray.map((action, index) => {
                        const Icon = action.icon;
                        return <div key={index} className="flex cursor-pointer hover:bg-white/5 p-2 rounded-2xl items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${action.iconBackgroundColor}`}>
                                    <Icon className="text-lg text-white" />
                                </div>
                                <div>
                                    <p className="text-white sm:whitespace-nowrap">{action.title}</p>
                                    <p className="text-xs sm:whitespace-nowrap font-semibold text-slate-500">{action.subText}</p>
                                </div>
                            </div>
                            <IoIosArrowForward className="text-white/60" />
                        </div>
                    }
                    )}
                </div>
            </div>
        </div>
    )
}