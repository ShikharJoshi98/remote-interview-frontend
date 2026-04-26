import { LuCheck, LuFileText, LuX } from "react-icons/lu";
import { interviewDetails } from "../../constant/DashboardConstant";
import { useDispatch } from "react-redux";
import { createInterviewThunk } from "../../store/features/interview/interviewThunk";

export default function InterviewModal({ onClose, ...candidate }) {
    const dispatch = useDispatch();
    const data = candidate.candidate;
    console.log(candidate);
    const handleAccept = () => {
        dispatch(createInterviewThunk(data))
            .unwrap()
            .then(() => {
                alert("created interview");
                onClose();
            })
            .catch((err) => {
                console.error(err.message);
            });
    }
    const handleReject = () => {
        onClose();
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-10">
            <div className="relative w-full max-h-[99vh] max-w-7xl rounded-2xl border border-white/10 bg-[#0d1320] overflow-y-auto shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-white"
                >
                    <LuX size={20} />
                </button>
                <div className="px-6 pt-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-violet-500/20">
                            <LuFileText className="text-violet-400 text-xl" />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-white">
                                Interview Summary
                            </h2>
                            <p className="text-sm text-neutral-400">
                                Review before creating interview
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {interviewDetails.map((detail, index) => {
                        const Icon = detail.icon;
                        return (
                            <div key={index}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Icon className={detail.iconColor} />
                                    <span className="text-sm text-neutral-400">
                                        {detail.title} :
                                    </span>
                                </div>

                                <p className="text-white font-medium text-sm border border-slate-500 p-2 rounded-xl h-10 overflow-y-auto">
                                    {data[detail.value]}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="border-t border-white/10 px-6 py-5 flex justify-end gap-3">
                    <button onClick={handleReject} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/15 border border-red-500/30 text-red-300 hover:bg-red-500/25">
                        <LuX />
                        Reject
                    </button>
                    <button onClick={handleAccept} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-green-500/80 text-white font-medium hover:bg-green-500">
                        <LuCheck />
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}
