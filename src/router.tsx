import { BrowserRouter, createBrowserRouter } from "react-router";
import Dashboard from "./pages/DashboardComponents/Dashboard";
import DevelopmentalScreening from "./pages/DevelopMental Screening/DevelopmentalScreening";
import PersonalizedCarePage from "./pages/PersonalizedCare/PersonalizedCarePage";

const router = createBrowserRouter([
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
]);

export default router;
