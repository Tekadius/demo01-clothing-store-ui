import Navbar from "./Navbar";
import SideBar from "./SideBar";

function AdminDashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex">
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
