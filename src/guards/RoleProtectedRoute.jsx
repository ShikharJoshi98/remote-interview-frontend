import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RoleProtectedRoute({ children, allowedRole }) {
    const { user, authCheckLoading } = useSelector(state => state.auth);

    if (authCheckLoading) {
        return <p className="text-white">Loading...</p>
    }

    if (!user) {
        return <Navigate to="/" replace />
    }

    if (user.role !== allowedRole) {
        return <Navigate to="/" replace />
    }

    return children;
}