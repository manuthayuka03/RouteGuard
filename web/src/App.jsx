import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import { adminMenu, officerMenu } from './layouts/menus';
import PlaceholderPage from './components/PlaceholderPage';
import LoginPage from './features/admin/pages/LoginPage';

// Each menu item gets a placeholder page for now.
// When a member builds a real page, they replace the matching element.
const placeholderRoutes = (menu) =>
  menu.map((item) => (
    <Route
      key={item.path}
      path={item.path}
      element={<PlaceholderPage title={item.title ?? item.label} owner={item.owner} />}
    />
  ));

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
          {placeholderRoutes(adminMenu)}
        </Route>

        <Route
          path="/officer"
          element={<DashboardLayout menuItems={officerMenu} roleLabel="Government Officer" />}
        >
          <Route index element={<Navigate to="/officer/dashboard" replace />} />
          {placeholderRoutes(officerMenu)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}