import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import { LandingPage } from "./pages/LandingPage";
import { LandingPageLayout } from "./layouts/LandingPageLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuthThunk } from "./store/features/auth/authThunk";
import ProtectedRoute from "./guards/ProtectedRoute";
import CandidateDashboard from "./pages/CandidateDashboard";
import InterviewerDashboard from "./pages/InterviewerDashboard";
import RoleProtectedRoute from "./guards/RoleProtectedRoute";
import CreateInterview from "./pages/CreateInterview";
import ScheduledInterview from "./pages/ScheduledInterview";
import Candidates from "./pages/Candidates";
import QuestionBank from "./pages/QuestionBank";
import Assessment from "./pages/Assessment";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageLayout />} >
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="candidate" element={<RoleProtectedRoute allowedRole="candidate"><CandidateDashboard /></RoleProtectedRoute>} />
          <Route path="interviewer" element={<RoleProtectedRoute allowedRole="interviewer"><InterviewerDashboard /></RoleProtectedRoute>} />
          <Route path="createInterview" element={<RoleProtectedRoute allowedRole="interviewer"><CreateInterview /></RoleProtectedRoute>} />
          <Route path="scheduled-interview" element={<RoleProtectedRoute allowedRole="interviewer"><ScheduledInterview /></RoleProtectedRoute>} />
          <Route path="candidates" element={<RoleProtectedRoute allowedRole="interviewer"><Candidates /></RoleProtectedRoute>} />
          <Route path="question-bank" element={<RoleProtectedRoute allowedRole="interviewer"><QuestionBank /></RoleProtectedRoute>} />
          <Route path="assessment" element={<RoleProtectedRoute allowedRole="interviewer"><Assessment /></RoleProtectedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
