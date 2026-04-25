import { FiUsers } from "react-icons/fi";
import { LuCalendar, LuLayoutDashboard, LuPlus } from "react-icons/lu";
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
        path: ''
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