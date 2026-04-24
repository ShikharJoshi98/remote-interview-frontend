import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import { LandingPage } from "./pages/LandingPage";
import { LandingPageLayout } from "./layouts/LandingPageLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuthThunk } from "./store/features/auth/authThunk";
import ProtectedRoute from "./guards/ProtectedRoute";

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
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
