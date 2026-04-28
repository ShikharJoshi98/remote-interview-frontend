import { FaClipboardList, FaRegPaperPlane, FaUser } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuBrain, LuBriefcase, LuCalendar, LuChartLine, LuCircleCheck, LuClipboard, LuClock, LuCode, LuComputer, LuFile, LuFilePen, LuFileText, LuLayoutDashboard, LuMail, LuPlus, LuUser, LuUsers, LuVideo } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
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
        path: '/dashboard/scheduled-interview'
    },
    {
        title: 'Create Interview',
        icon: LuPlus,
        path: '/dashboard/createInterview'
    },
    {
        title: 'Candidates',
        icon: FiUsers,
        path: '/dashboard/candidates'
    },
    {
        title: 'Question Bank',
        icon: MdOutlineLibraryBooks,
        path: '/dashboard/question-bank'
    },
    {
        title: 'Assessment',
        icon: VscGraph,
        path: '/dashboard/assessment'
    }
]

export const candidateSideNav = [
    {
        title: 'Dashboard',
        icon: LuLayoutDashboard,
        path: '/dashboard/candidate'
    },
    {
        title: 'My Interviews',
        icon: LuCalendar,
        path: '/dashboard/interview'
    },
    {
        title: 'Assessments',
        icon: LuFileText,
        path: ''
    },
    {
        title: 'Profile',
        icon: LuUser,
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

export const candidateCards = [
    {
        title: 'Upcoming Interviews',
        icon: LuCalendar,
        data: 3,
        subText: 'Next: Google - Tomorrow, 10:00 AM',
        iconBackgroundColor: 'bg-blue-500/65'
    },
    {
        title: 'Completed Interviews',
        icon: LuCircleCheck,
        data: 5,
        subText: 'Keep up the great work',
        iconBackgroundColor: 'bg-green-500/65'
    },
    {
        title: 'Success Rate',
        icon: LuChartLine,
        data: '82%',
        subText: 'Keep pushing your limits!',
        iconBackgroundColor: 'bg-yellow-500/65'
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

export const upcomingInterviews = [
    {
        company: 'Google',
        designation: 'Frontend Developer',
        date: '22 May, 2025',
        time: '10:00 AM'
    },
    {
        company: 'Microsoft',
        designation: 'Backend Developer',
        date: '22 May, 2025',
        time: '2:00 PM'
    },
    {
        company: 'Amazon',
        designation: 'Full Stack Developer',
        date: '23 May, 2025',
        time: '11:00 AM'
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

export const interviewDetails = [
    {
        icon: LuUser,
        title: 'Candidate',
        value: 'name',
        iconColor: 'text-blue-500'
    },
    {
        icon: LuMail,
        title: 'Email',
        value: 'email',
        iconColor: 'text-yellow-500'
    },
    {
        icon: LuBriefcase,
        title: 'Job Role',
        value: 'jobRole',
        iconColor: 'text-sky-500'
    },
    {
        icon: LuCode,
        title: 'Interview Type',
        value: 'interviewType',
        iconColor: 'text-blue-700'
    },
    {
        icon: LuVideo,
        title: 'Interview Mode',
        value: 'interviewMode',
        iconColor: 'text-violet-500'
    },
    {
        icon: LuCalendar,
        title: 'Date',
        value: 'date',
        iconColor: 'text-green-500'
    },
    {
        icon: LuClock,
        title: 'Time',
        value: 'time',
        iconColor: 'text-orange-500'
    },
    {
        icon: LuFilePen,
        title: 'Notes',
        value: 'extraNotes',
        iconColor: 'text-yellow-700'
    }
]

export const scheduledInterviewCards = [
    {
        title: 'Total Interviews',
        icon: LuCalendar,
        data: 28,
        subText: 'All scheduled interviews',
        iconBackgroundColor: 'bg-violet-500/65'
    },
    {
        title: 'Upcoming',
        icon: LuClock,
        data: 12,
        subText: 'Interviews to come',
        iconBackgroundColor: 'bg-blue-500/65'
    },
    {
        title: 'Completed',
        icon: LuCircleCheck,
        data: 14,
        subText: 'Successfully completed',
        iconBackgroundColor: 'bg-green-500/65'
    },
    {
        title: 'Cancelled',
        icon: RxCrossCircled,
        data: 2,
        subText: 'Interviews cancelled',
        iconBackgroundColor: 'bg-red-500/65'
    }
]

export const myInterviewCards = [
    {
        title: 'Upcoming',
        icon: LuCalendar,
        data: 3,
        subText: 'Interviews',
        iconBackgroundColor: 'bg-violet-500/65'
    },
    {
        title: 'In Progress',
        icon: LuClock,
        data: 1,
        subText: 'Interviews',
        iconBackgroundColor: 'bg-blue-500/65'
    },
    {
        title: 'Completed',
        icon: LuCircleCheck,
        data: 5,
        subText: 'Interviews',
        iconBackgroundColor: 'bg-green-500/65'
    },
    {
        title: 'Cancelled',
        icon: RxCrossCircled,
        data: 1,
        subText: 'Interviews cancelled',
        iconBackgroundColor: 'bg-red-500/65'
    }
]

export const interviews = [
    {
        candidate: "Rohit Sharma",
        email: "rohit@email.com",
        role: "Frontend Developer",
        type: "Coding",
        tag: "DSA",
        date: "26 May, 2025",
        time: "10:00 AM",
        duration: "60 min",
        status: "Upcoming"
    },
    {
        candidate: "Priya Patel",
        email: "priya@email.com",
        role: "Backend Developer",
        type: "System Design",
        tag: null,
        date: "26 May, 2025",
        time: "02:00 PM",
        duration: "90 min",
        status: "Upcoming"
    },
    {
        candidate: "Neha Singh",
        email: "neha@email.com",
        role: "Frontend Developer",
        type: "System Design",
        tag: null,
        date: "27 May, 2025",
        time: "03:00 PM",
        duration: "90 min",
        status: "Completed"
    },
    {
        candidate: "Vikram Mehta",
        email: "vikram@email.com",
        role: "Frontend Developer",
        type: "Coding",
        tag: "DSA",
        date: "21 May, 2025",
        time: "11:00 AM",
        duration: "60 min",
        status: "Cancelled"
    }
];

export const myInterviews = [
    {
        interview: "Frontend Developer Interview",
        company: "TechNova Solutions",
        role: "Frontend Developer",
        type: "Coding",
        date: "26 May, 2025",
        time: "10:00 AM",
        status: "Upcoming"
    }
];

export const badgeStyles = {
    Upcoming: "bg-blue-500/20 text-blue-400",
    Completed: "bg-green-500/20 text-green-400",
    Cancelled: "bg-red-500/20 text-red-400"
};

export const candidatesCards = [
    {
        title: 'Total Candidates',
        icon: LuUsers,
        data: 156,
        subText: 'All candidates',
        iconBackgroundColor: 'bg-violet-500/65'
    },
    {
        title: 'In Pipeline',
        icon: LuUser,
        data: 68,
        subText: 'Active Candidates',
        iconBackgroundColor: 'bg-blue-500/65'
    },
    {
        title: 'Hired',
        icon: LuCircleCheck,
        data: 24,
        subText: 'Successfully Hired',
        iconBackgroundColor: 'bg-green-500/65'
    },
    {
        title: 'Rejected',
        icon: RxCrossCircled,
        data: 64,
        subText: 'Not Moved forward',
        iconBackgroundColor: 'bg-red-500/65'
    }
]

export const candidatePipelineArray = [
    {
        icon: LuFileText,
        title: 'Applied',
        data: 56,
        iconColor: 'bg-violet-700/40'
    },
    {
        icon: LuUser,
        title: 'In Pipeline',
        data: 32,
        iconColor: 'bg-blue-700/40'
    },
    {
        icon: LuCalendar,
        title: 'Interview',
        data: 28,
        iconColor: 'bg-orange-700/40'
    },
    {
        icon: LuFile,
        title: 'Assessment',
        data: 16,
        iconColor: 'bg-blue-500/40'
    },
    {
        icon: LuMail,
        title: 'Offer',
        data: 8,
        iconColor: 'bg-green-500/40'
    },
    {
        icon: LuUser,
        title: 'Hired',
        data: 24,
        iconColor: 'bg-green-700/40'
    }
];

export const candidates = [
    {
        candidate: "Rohit Sharma",
        email: "rohit@email.com",
        role: "Frontend Developer",
        stage: "Interview",
        date: "26 May, 2025",
        time: "10:00 AM",
        status: "In Progress"
    },
    {
        candidate: "Vikram Mehta",
        email: "vikram@email.com",
        role: "Backend Developer",
        stage: "Screening",
        date: "22 May, 2025",
        time: "10:00 AM",
        status: "Hired"
    }
]

export const stageStyles = {
    Interview: "bg-orange-500/20 text-orange-300",
    Screening: "bg-blue-500/20 text-blue-300",
    Assessment: "bg-cyan-500/20 text-cyan-300",
    Offer: "bg-green-500/20 text-green-300",
    Hired: "bg-emerald-500/20 text-emerald-300",
    Rejected: "bg-red-500/20 text-red-300"
};

export const statusStyles = {
    "In Progress": "bg-blue-500/20 text-blue-300",
    Pending: "bg-orange-500/20 text-orange-300",
    Hired: "bg-green-500/20 text-green-300",
    Rejected: "bg-red-500/20 text-red-300"
};

export const questionBankCardArray = [
    {
        title: 'Total Questions ',
        icon: LuClipboard,
        data: 1248,
        subText: 'All questions',
        iconBackgroundColor: 'bg-violet-500/65'
    },
    {
        title: 'Coding Questions',
        icon: LuCode,
        data: 568,
        subText: 'Coding Related',
        iconBackgroundColor: 'bg-blue-500/65'
    },
    {
        title: 'System Design',
        icon: LuComputer,
        data: 312,
        subText: 'System Design questions',
        iconBackgroundColor: 'bg-green-500/65'
    },
    {
        title: 'Behavioral',
        icon: LuBrain,
        data: 368,
        subText: 'Behavioral questions',
        iconBackgroundColor: 'bg-orange-500/65'
    }
]

export const typeStyles = {
    Coding: "bg-violet-500/20 text-violet-300",
    "System Design": "bg-blue-500/20 text-blue-300",
    Behavioral: "bg-orange-500/20 text-orange-300"
};

export const difficultyStyles = {
    Easy: "bg-green-500/20 text-green-300",
    Medium: "bg-yellow-500/20 text-yellow-300",
    Hard: "bg-red-500/20 text-red-300"
};

export const questionTypeIcon = {
    Coding: "bg-violet-500/70",
    "System Design": "bg-blue-500/70",
    Behavioral: "bg-orange-500/70"
};

export const problemArray = [
    {
        title: "Two Sum Problem",
        description: "Given an array of integers nums...",
        type: "Coding",
        difficulty: "Easy",
        topic: "Arrays",
        date: "26 May, 2025",
        time: "10:00 AM"
    }
]

export const assessmentCardArray = [
    {
        title: 'Total Assessments ',
        icon: LuFileText,
        data: 28,
        subText: 'All assessments',
        iconBackgroundColor: 'bg-violet-500/65'
    },
    {
        title: 'Active Assessments',
        icon: FaRegPaperPlane,
        data: 16,
        subText: 'Currently active',
        iconBackgroundColor: 'bg-blue-500/65'
    },
    {
        title: 'Completed',
        icon: LuCircleCheck,
        data: 234,
        subText: 'Total Completed',
        iconBackgroundColor: 'bg-green-500/65'
    },
    {
        title: 'Drafts',
        icon: LuClock,
        data: 7,
        subText: 'Saved as Drafts',
        iconBackgroundColor: 'bg-orange-500/65'
    }
]

export const typeAssessmentStyles = {
    Coding: "bg-violet-500/20 text-violet-300",
    "System Design": "bg-blue-500/20 text-blue-300",
    Behavioral: "bg-orange-500/20 text-orange-300"
};

export const difficultyAssessmentStyles = {
    Easy: "bg-green-500/20 text-green-300",
    Medium: "bg-yellow-500/20 text-yellow-300",
    Hard: "bg-red-500/20 text-red-300"
};

export const statusAssessmentStyles = {
    Active: "bg-green-500/20 text-green-300",
    Draft: "bg-orange-500/20 text-orange-300",
    Inactive: "bg-blue-500/20 text-blue-300"
};

export const assessmentIconStyles = {
    Coding: "bg-violet-500/20",
    "System Design": "bg-blue-500/20",
    Behavioral: "bg-orange-500/20"
};

export const assessmentArray = [
    {
        title: "Frontend Developer Test",
        description: "Evaluate skills in HTML CSS...",
        type: "Coding",
        difficulty: "Medium",
        questions: 10,
        duration: 60,
        status: "Active",
        date: "26 May, 2025",
        time: "10:00 AM"
    }
]