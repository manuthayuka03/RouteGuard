import PlaceholderPage from '../../components/PlaceholderPage';

// Member 4's pages (officer portal).
export const complianceRoutes = [
  {
    path: '/officer/alert-centre',
    element: <PlaceholderPage title="Alert Centre" owner="Member 4" />,
  },
  {
    path: '/officer/incidents',
    element: <PlaceholderPage title="Incident Management" owner="Member 4" />,
  },
  {
    path: '/officer/reports',
    element: <PlaceholderPage title="Trip History & Reports" owner="Member 4" />,
  },
];