import { LuCalendar, LuPlus, LuSearch, LuTrash } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { badgeStyles, interviews, scheduledInterviewCards } from "../constant/DashboardConstant";
import { useState } from "react";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import { LuClock3, LuEye, LuSquarePen, LuEllipsisVertical, LuCode, LuMonitor } from "react-icons/lu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



export default function ScheduledInterview() {
    const navigate = useNavigate();
    const [status, setStatus] = useState('All');

    return (
        <main className="py-5 px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 sm:justify-between sm:items-end text-white">
                <div>
                    <h1 className="text-2xl font-semibold">Scheduled Interviews</h1>
                    <p className="text-white/60 text-sm mt-1">View and manage all your scheduled interviews.</p>
                </div>
                <button onClick={() => navigate('/dashboard/createInterview')} className="text-white w-fit flex items-center gap-2 bg-violet-600 py-2 px-4 rounded-lg cursor-pointer font-medium hover:bg-violet-700 self-end text-sm">
                    <LuPlus />
                    <span>Create Interview</span>
                </button>
            </div>
            <div className="mt-16 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {
                    scheduledInterviewCards.map((card, index) => {
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
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between mt-10">
                <div>
                    {
                        ['All', 'Upcoming', 'Completed', 'Cancelled'].map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setStatus(item)}
                                className={`text-xs mr-2 mt-2 py-2 px-4 font-medium rounded-lg cursor-pointer  text-white border border-white/60  ${status === item ? 'bg-purple-500' : 'hover:bg-white/10'}`}>{item}</button>
                        ))
                    }
                </div>
                <div className="flex items-center gap-2">
                    <FormInput Icon={LuSearch} placeholder="Search" />
                    <FormSelect
                        placeholder="Duration"
                        options={[
                            {
                                label: 'Today',
                                value: 'today'
                            },
                            {
                                label: 'This Week',
                                value: 'week'
                            },
                            {
                                label: 'This Month',
                                value: 'month'
                            },
                            {
                                label: 'This Year',
                                value: 'year'
                            }
                        ]}
                    />
                </div>
            </div>
            <div className="overflow-x-auto bg-[#0b1220] border mt-6 border-white/10 rounded-2xl">
                <table className="min-w-full text-sm shadow-md ">
                    <thead className="text-white border-b border-white/15">
                        <tr>
                            <th className="py-2 px-4">Candidate</th>
                            <th className="py-2 px-4">Role</th>
                            <th className="py-2 px-4">Interview Type</th>
                            <th className="py-2 px-4">Date & Time</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interviews.map((item, index) => (
                            <tr key={index} className="border-b border-white/5 hover:bg-white/2 transition">
                                <td className="py-2 text-center px-4">
                                    <div>
                                        <p className="text-white font-medium">{item.candidate}</p>
                                        <p className="text-white/40 text-xs mt-1">{item.email}</p>
                                    </div>
                                </td>
                                <td className="text-white/80 text-center py-2 px-4">{item.role}</td>
                                <td className="py-2 px-4">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="flex items-center gap-2 text-white/80">
                                            {item.type === "Coding" ? (
                                                <LuCode />
                                            ) : (
                                                <LuMonitor />
                                            )}
                                            <span>{item.type}</span>
                                        </div>
                                        {item.tag && (
                                            <span className="px-2 py-1 rounded-md bg-violet-500/20 text-violet-300 text-xs">
                                                {item.tag}
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="text-white/80 text-center py-2 px-4">
                                    <p className="whitespace-nowrap">{item.date}</p>
                                    <p className="text-white/40 text-xs mt-1">
                                        {item.time}
                                    </p>
                                </td>
                                <td className="py-2 px-4 text-center">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeStyles[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4">
                                    <div className="flex justify-center gap-2">
                                        <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
                                            <LuTrash className="text-red-500/70" />
                                        </button>
                                        <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
                                            <LuSquarePen className="text-white/70" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
                <IoIosArrowBack className="text-white cursor-pointer hover:bg-white/10 border border-white/60 p-1 w-7 h-7 rounded-lg" />
                <span className="text-white/90 bg-violet-600 hover:bg-violet-700 cursor-pointer p-1 w-7 h-7 text-sm rounded-lg flex items-center justify-center">1</span>
                <IoIosArrowForward className="text-white cursor-pointer hover:bg-white/10 border border-white/60 p-1 w-7 h-7 rounded-lg" />
            </div>
        </main>
    )
}