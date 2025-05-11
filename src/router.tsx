import { BrowserRouter, createBrowserRouter } from "react-router";
import Dashboard from "./pages/DashboardComponents/Dashboard";
import DevelopmentalScreening from "./pages/DevelopMental Screening/DevelopmentalScreening";
import PersonalizedCarePage from "./pages/PersonalizedCare/PersonalizedCarePage";
import DashboardLayout from "./LayOuts/DashboardLayout";
import DevelopmentTracking from "./pages/DevelopmentTracking/DevelopmentTracking";
import Telemedicine from "./pages/TeleMedicine/Telemedicine";
import Register from "./pages/auth/register";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";

const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/Developmental-Screening",
        element: <DevelopmentalScreening></DevelopmentalScreening>,
      },
      {
        path: "/Personalized-Care",
        element: <PersonalizedCarePage></PersonalizedCarePage>,
      },
      {
        path: "/DevelopmentTracking",
        element: <DevelopmentTracking></DevelopmentTracking>,
      },
      {
        path: "/telemedicine",
        element: <Telemedicine></Telemedicine>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Forgot-password",
    element: <ForgotPassword />,
  },
]);

export default router;
