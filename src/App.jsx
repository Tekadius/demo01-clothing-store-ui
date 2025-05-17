import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
}

function AdminRoutes() {
  return (
    <AdminDashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to='dashboard' />}/>
        <Route path="dashboard" element={<AdminDashboard />}/>
      </Routes>
    </AdminDashboardLayout>
  );
}

export default App;
