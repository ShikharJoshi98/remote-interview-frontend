import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const value = useSelector(state => state.auth);

    if (value.authCheckLoading) {
        return <p className="text-white">Loading...</p>
    }
    if (!value.isAuthenticated) {
        return <Navigate to='/' replace />;
    }
    return children;
}