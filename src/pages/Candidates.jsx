import { LuCalendar, LuEllipsisVertical, LuFileText, LuSearch, LuUser } from "react-icons/lu";
import { candidatePipelineArray, candidates, candidatesCards, stageStyles, statusStyles } from "../constant/DashboardConstant";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import FormSelect from "../components/FormSelect";
import FormInput from "../components/FormInput";

export default function Candidates() {
    return (
        <main className="py-5 px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 sm:justify-between sm:items-end text-white">
                <div>
                    <h1 className="text-2xl font-semibold">Candidates</h1>
                    <p className="text-white/60 text-sm mt-1">Manage and track all candidates in your pipeline.</p>
                </div>
            </div>
            <div className="mt-16 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {
                    candidatesCards.map((card, index) => {
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
            <div className="w-full rounded-2xl mt-6 border border-white/10 bg-[#111827] p-6 shadow-lg">
                <h1 className="font-semibold text-lg text-slate-200 mb-6">Candidate Pipeline</h1>
                <div className="flex flex-wrap items-center justify-evenly gap-4">
                    {candidatePipelineArray.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex items-center gap-3">
                                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0f172a] border border-white/5">
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${item.iconColor}`}>
                                        <Icon className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50">{item.title}</p>
                                        <p className="text-lg font-semibold text-white">{item.data}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between mt-10">
                <div className="flex items-center gap-2">
                    <FormSelect
                        placeholder="All Roles"
                        options={[
                            {
                                label: 'Frontend Developer',
                                value: 'Frontend Developer'
                            }
                        ]}
                    />
                    <FormSelect
                        placeholder="All Statuses"
                        options={[
                            {
                                label: 'In Progress',
                                value: 'In Progress'
                            }
                        ]}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <FormInput Icon={LuSearch} placeholder="Search" />

                </div>
            </div>
            <div className="overflow-x-auto bg-[#0b1220] border mt-6 border-white/10 rounded-2xl">
                <table className="min-w-full text-sm shadow-md ">
                    <thead className="text-white border-b border-white/15">
                        <tr>
                            <th className="py-2 px-4">Candidate</th>
                            <th className="py-2 px-4">Role</th>
                            <th className="py-2 px-4">Stage</th>
                            <th className="py-2 px-4">Applied on</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((item, index) => (
                            <tr key={index} className="border-b border-white/5 hover:bg-white/2 transition">
                                <td className="py-2 text-center px-4">
                                    <div>
                                        <p className="text-white font-medium">{item.candidate}</p>
                                        <p className="text-white/40 text-xs mt-1">{item.email}</p>
                                    </div>
                                </td>
                                <td className="text-white/80 py-2 px-4">{item.role}</td>
                                <td className="py-2 px-4">
                                    <span className={`px-3 py-1 rounded-md text-xs font-medium ${stageStyles[item.stage]}`}>{item.stage}</span>
                                </td>
                                <td className="py-2 px-4 text-white/80">
                                    <p className="whitespace-nowrap">{item.date}</p>
                                    <p className="text-xs text-white/40 mt-1">{item.time}</p>
                                </td>
                                <td className="py-2 px-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusStyles[item.status]}`}>{item.status}</span>
                                </td>
                                <td className="py-2 px-4">
                                    <div className="flex items-center gap-3">
                                        <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
                                            <LuCalendar className="text-white/70" />
                                        </button>
                                        <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
                                            <LuEllipsisVertical className="text-white/70" />
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