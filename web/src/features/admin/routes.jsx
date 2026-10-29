import PlaceholderPage from '../../components/PlaceholderPage';

// Member 1's pages. Replace each placeholder with your real page when it is built.
export const adminRoutes = [
  {
    path: '/admin/overview',
    element: <PlaceholderPage title="Administration Overview" owner="Member 1" />,
  },
  {
    path: '/admin/officers',
    element: <PlaceholderPage title="Officers & Credentials" owner="Member 1" />,
  },
  {
    path: '/admin/audit-logs',
    element: <PlaceholderPage title="Audit Logs" owner="Member 1" />,
  },
];