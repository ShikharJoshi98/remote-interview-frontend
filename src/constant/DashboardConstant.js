import { FaClipboardList, FaUser } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuCalendar, LuLayoutDashboard, LuPlus, LuUsers } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

export const interviewerSideNav = [
    {
        title: 'Dashboard',
        icon: LuLayoutDashboard,
        path: '/dashboard/interviewer'
    },
    {
        title: 'Scheduled Interviews',
        icon: LuCalendar,
        path: ''
    },
    {
        title: 'Create Interview',
        icon: LuPlus,
        path: '/dashboard/createInterview'
    },
    {
        title: 'Candidates',
        icon: FiUsers,
        path: ''
    },
    {
        title: 'Question Bank',
        icon: MdOutlineLibraryBooks,
        path: ''
    },
    {
        title: 'Assessment',
        icon: VscGraph,
        path: ''
    }
]

export const interviewerCards = [
    {
        title: 'Scheduled Interviews',
        icon: LuCalendar,
        data: 7,
        subText: 'Upcoming interviews this week',
        iconBackgroundColor: 'bg-violet-500/65'
    },
    {
        title: 'Total Candidates',
        icon: FaUser,
        data: 24,
        subText: 'Interviewed so far',
        iconBackgroundColor: 'bg-green-500/65'
    },
    {
        title: 'Completed Interviews',
        icon: FaClipboardList,
        data: 18,
        subText: 'This month',
        iconBackgroundColor: 'bg-blue-500/65'
    }
]

export const interviewCandidates = [
    {
        candidateName: 'Priya Sharma',
        designation: 'Frontend Developer',
        date: '22 May, 2025',
        time: '10:00 AM'
    },
    {
        candidateName: 'Rohan Mehta',
        designation: 'Backend Developer',
        date: '22 May, 2025',
        time: '2:00 PM'
    },
    {
        candidateName: 'Ananya Reddy',
        designation: 'Full Stack Developer',
        date: '23 May, 2025',
        time: '11:00 AM'
    },
    {
        candidateName: 'Karthik Iyer',
        designation: 'DevOps Engineer',
        date: '23 May, 2025',
        time: '3:00 PM'
    }
]

export const quickActionsArray = [
    {
        title: 'Create New Interview',
        icon: LuPlus,
        subText: 'Schedule a new interviewer',
        iconBackgroundColor: 'bg-violet-500/65'
    },
    {
        title: 'Add Candidate',
        icon: LuUsers,
        subText: 'Add a candidate to pipeline',
        iconBackgroundColor: 'bg-blue-500/65'
    },
    {
        title: 'Browse Question Bank',
        icon: MdOutlineLibraryBooks,
        subText: 'Search or create questions',
        iconBackgroundColor: 'bg-green-500/65'
    },
    {
        title: 'View Assessments',
        icon: VscGraph,
        subText: 'View previous assessments',
        iconBackgroundColor: 'bg-yellow-500/65'
    }
]

export const analyticsData = [
    { name: "Completed", value: 60, color: "#22c55e" },
    { name: "Scheduled", value: 23, color: "#3b82f6" },
    { name: "Cancelled", value: 10, color: "#f97316" },
    { name: "No Show", value: 7, color: "#8b5cf6" },
];