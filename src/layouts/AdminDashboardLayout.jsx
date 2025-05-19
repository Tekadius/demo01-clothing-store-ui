import { use } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { SidebarContext } from "../Contexts/SidebarContext";

function AdminDashboardLayout({ children }) {
  const { isMobileSidebarOpen } = use(SidebarContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] min-h-screen">
      <div
        className={`${
          isMobileSidebarOpen
            ? "absolute z-40 top-12 bottom-0 right-0 bg-white px-4 py-12"
            : "fixed opacity-0"
        } md:flex md:opacity-100 z-40 bg-white md:relative md:px-0 md:py-0 md:top-0 md:translate-none`}>
        <SideBar />
      </div>
      <div>
        <Navbar />
        <div className="p-8 lg:p-10 h-full bg-[#e6f3df] text-[#343a40]">{children}</div>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
