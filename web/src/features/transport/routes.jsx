import PlaceholderPage from '../../components/PlaceholderPage';

// Member 2's pages. These appear in the admin sidebar.
export const transportRoutes = [
  {
    path: '/admin/drivers',
    element: <PlaceholderPage title="Drivers" owner="Member 2" />,
  },
  {
    path: '/admin/vehicles',
    element: <PlaceholderPage title="Vehicles" owner="Member 2" />,
  },
  {
    path: '/admin/routes',
    element: <PlaceholderPage title="Routes" owner="Member 2" />,
  },
  {
    path: '/admin/trips-authorization',
    element: <PlaceholderPage title="Trip Authorization" owner="Member 2" />,
  },
];