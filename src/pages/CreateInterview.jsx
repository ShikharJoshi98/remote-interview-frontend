import { FaRegUser } from "react-icons/fa"
import FormInput from "../components/FormInput"
import { LuBriefcase, LuCalendar, LuClipboard, LuClock, LuCode, LuMail, LuVideo } from "react-icons/lu"
import FormSelect from "../components/FormSelect"
import { FaRegPenToSquare } from "react-icons/fa6"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createInterviewThunk } from "../store/features/interview/interviewThunk"
import InterviewModal from "../components/Modal/InterviewModal"

export default function CreateInterview() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const [isInterviewModal, setInterviewModal] = useState(false);
    const [formData, setformData] = useState({
        name: '',
        email: '',
        jobRole: '',
        interviewType: '',
        interviewer: user?._id,
        interviewMode: '',
        date: '',
        time: '',
        extraNotes: ''
    });

    useEffect(() => {
        if (user?._id) {
            setformData(prev => ({
                ...prev,
                interviewer: user._id
            }));
        }
    }, [user]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setInterviewModal(true);
    }
    return (
        <main className="py-5 px-4 sm:px-8">
            <h1 className="text-2xl text-white font-semibold">Create Interview</h1>
            <p className="text-white/60 text-sm mt-1">Schedule a new interview and invite a candidate.</p>
            <form onSubmit={handleSubmit} className="w-full space-y-8 rounded-2xl border border-white/10 bg-[#111827] p-5 shadow-lg mt-12">
                <span className="mb-4 flex items-center gap-3">
                    <LuClipboard className="text-xl text-violet-500" />
                    <p className="text-white text-xl font-medium">Interview Details</p>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput label="Candidate Name" name="name" value={formData.name} onChange={handleChange} required Icon={FaRegUser} placeholder="Enter candidate full name" />
                    <FormInput label="Candidate Email" name="email" value={formData.email} onChange={handleChange} type="email" required Icon={LuMail} placeholder="Enter candidate email" />
                </div>
                <FormSelect label="Job Role" name="jobRole" value={formData.jobRole} onChange={handleChange} required Icon={LuBriefcase} placeholder="Select Job Role"
                    options={[
                        {
                            label: 'Frontend Developer Role',
                            value: 'Frontend Developer'
                        },

                    ]}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormSelect label="Interview Type" name="interviewType" value={formData.interviewType} onChange={handleChange} required Icon={LuCode} placeholder="Interview Type"
                        options={[
                            {
                                label: 'Technical',
                                value: 'technical'
                            },

                        ]}
                    />
                    <FormSelect label="Interview Mode" name="interviewMode" value={formData.interviewMode} onChange={handleChange} required Icon={LuVideo} placeholder="Select Interview Mode"
                        options={[
                            {
                                label: 'Online',
                                value: 'online'
                            },
                            {
                                label: 'In-person',
                                value: 'in-person'
                            },
                        ]}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput label="Date" name="date" value={formData.date} onChange={handleChange} required Icon={LuCalendar} type="date" />
                    <FormInput label="Time" name="time" value={formData.time} onChange={handleChange} type="time" required Icon={LuClock} />
                </div>
                <div className="w-full space-y-2">
                    <label className="block text-sm font-medium text-white/60">
                        Description / Notes
                    </label>
                    <div className="flex items-center gap-3 w-full rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500/30 transition-all">
                        <textarea name="extraNotes" value={formData.extraNotes} onChange={handleChange} placeholder="Add additional information about the interview (optional)" className="w-full h-20 bg-transparent text-white outline-none placeholder:text-white/35 text-sm"></textarea>
                    </div>
                </div>
                <button className="text-white block bg-violet-600 py-2 px-4 mx-auto rounded-lg cursor-pointer font-medium hover:bg-violet-700">Create Interview</button>
            </form>
            {
                isInterviewModal && <InterviewModal candidate={formData} onClose={() => setInterviewModal(false)} />
            }
        </main>
    )
}