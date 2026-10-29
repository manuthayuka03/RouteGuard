import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import { adminMenu, officerMenu } from './layouts/menus';
import LoginPage from './features/admin/pages/LoginPage';
import { adminRoutes } from './features/admin/routes';
import { transportRoutes } from './features/transport/routes';
import { monitoringRoutes } from './features/monitoring/routes';
import { complianceRoutes } from './features/compliance/routes';

// Turns each module's list of pages into router entries.
const toRoutes = (routes) =>
  routes.map((r) => <Route key={r.path} path={r.path} element={r.element} />);

// Nobody should need to edit this file. Add your pages in your own
// features/<module>/routes.jsx instead.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin"
          element={<DashboardLayout menuItems={adminMenu} roleLabel="Administrator" />}
        >
          <Route index element={<Navigate to="/admin/overview" replace />} />
          {toRoutes([...adminRoutes, ...transportRoutes])}
        </Route>

        <Route
          path="/officer"
          element={<DashboardLayout menuItems={officerMenu} roleLabel="Government Officer" />}
        >
          <Route index element={<Navigate to="/officer/dashboard" replace />} />
          {toRoutes([...monitoringRoutes, ...complianceRoutes])}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}