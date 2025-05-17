import Navbar from "./Navbar";

function AdminDashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="bg-[#dee9da]">{children}</div>
    </>
  );
}

export default AdminDashboardLayout;
