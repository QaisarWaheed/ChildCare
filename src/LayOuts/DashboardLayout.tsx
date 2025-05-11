import { Outlet } from "react-router";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
      }}
    >
      <SideBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
