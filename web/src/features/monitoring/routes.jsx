import PlaceholderPage from '../../components/PlaceholderPage';

// Member 3's pages (officer portal).
export const monitoringRoutes = [
  {
    path: '/officer/dashboard',
    element: <PlaceholderPage title="Government Officer Dashboard" owner="Member 3" />,
  },
  {
    path: '/officer/live-monitoring',
    element: <PlaceholderPage title="Live Vehicle Monitoring" owner="Member 3" />,
  },
  {
    path: '/officer/vehicles-trips',
    element: <PlaceholderPage title="Vehicle & Trip Details" owner="Member 3" />,
  },
];