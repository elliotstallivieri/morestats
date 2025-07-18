import { Outlet, useNavigate } from "react-router-dom";
import "./AdminLayout.css";

export default function AdminLayout() {
  const navigate = useNavigate();
  return (
    <div className="admin-root">
      <aside className="sidebar">
        <div onClick={() => navigate("/statistships/admin/competitions")}>
          Competitions
        </div>
        <div onClick={() => navigate("/statistships/admin/competitions")}>
          Editions
        </div>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
