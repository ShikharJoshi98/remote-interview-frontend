import { LuCode, LuMessageSquare, LuMonitor, LuPlus, LuSearch, LuSquarePen, LuTrash } from "react-icons/lu";
import { difficultyStyles, problemArray, questionBankCardArray, questionTypeIcon, typeStyles } from "../constant/DashboardConstant";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function QuestionBank() {
    return (
        <main className="py-5 px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 sm:justify-between sm:items-end text-white">
                <div>
                    <h1 className="text-2xl font-semibold">Question Bank</h1>
                    <p className="text-white/60 text-sm mt-1">create and manage questions for interviews and assessments.</p>
                </div>
                <button className="text-white w-fit flex items-center gap-2 bg-violet-600 py-2 px-4 rounded-lg cursor-pointer font-medium hover:bg-violet-700 self-end text-sm">
                    <LuPlus />
                    <span>Add Question</span>
                </button>
            </div>
            <div className="mt-16 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {
                    questionBankCardArray.map((card, index) => {
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
                <div className="flex items-center gap-2">
                    <FormSelect
                        placeholder="Categories"
                        options={[
                            {
                                label: 'All Categories',
                                value: 'All Categories'
                            }
                        ]}
                    />
                    <FormSelect
                        placeholder="Difficulty"
                        options={[
                            {
                                label: 'All Difficulty',
                                value: 'All Difficulty'
                            }
                        ]}
                    />
                    <FormSelect
                        placeholder="Types"
                        options={[
                            {
                                label: 'All Types',
                                value: 'All Types'
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
                            <th className="py-2 px-4">Question</th>
                            <th className="py-2 px-4">Type</th>
                            <th className="py-2 px-4">Difficulty</th>
                            <th className="py-2 px-4">Category</th>
                            <th className="py-2 px-4">Added on</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {problemArray.map((item, index) => (
                            <tr key={index} className="border-b border-white/5 hover:bg-white/2 transition">
                                <td className="px-4 py-2">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${questionTypeIcon[item.type]}`}>
                                            {item.type === "Coding" ? (
                                                <LuCode className="text-white" />
                                            ) : item.type === "System Design" ? (
                                                <LuMonitor className="text-white" />
                                            ) : (
                                                <LuMessageSquare className="text-white" />
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{item.title}</p>
                                            <p className="text-white/40 text-xs mt-1 max-w-xs truncate">{item.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <span className={`px-3 py-1 rounded-md text-xs font-medium ${typeStyles[item.type]}`}>
                                        {item.type}
                                    </span>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <span className={`px-3 py-1 rounded-md text-xs font-medium ${difficultyStyles[item.difficulty]}`}>{item.difficulty}</span>
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <span className="px-3 py-1 rounded-md bg-slate-700/40 text-slate-300 text-xs">
                                        {item.topic}
                                    </span>
                                </td>
                                <td className="px-4 py-2 text-center text-white/80">
                                    <p className="whitespace-nowrap">{item.date}</p>
                                    <p className="text-xs text-white/40 mt-1">{item.time}</p>
                                </td>
                                <td className="px-4 py-2">
                                    <div className="flex justify-center items-center gap-3">
                                        <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
                                            <LuSquarePen className="text-white/70" />
                                        </button>
                                        <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
                                            <LuTrash className="text-red-500/70" />
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