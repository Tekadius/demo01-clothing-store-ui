import { use } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { SidebarContext } from "../Contexts/SidebarContext";

function AdminDashboardLayout({ children }) {
  const { isMobileSidebarOpen } = use(SidebarContext);

  return (
    <div className="flex min-h-screen static">
      <div
        className={`${
          isMobileSidebarOpen
            ? "absolute z-40 top-12 right-0 bg-white px-4 py-12"
            : "fixed opacity-0"
        } md:flex md:opacity-100 z-40 md:-translate-x-full bg-white md:relative md:px-0 md:py-0 md:top-0 md:translate-none shadow-lg`}>
        <SideBar />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="bg-[#dee9da] flex-1">{children}</div>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
