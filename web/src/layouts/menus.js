// One list per role. The "owner" shows who builds each page.
export const adminMenu = [
  { label: 'Overview', title: 'Administration Overview', path: '/admin/overview', owner: 'Member 1' },
  { label: 'Officers', title: 'Officers & Credentials', path: '/admin/officers', owner: 'Member 1' },
  { label: 'Drivers', path: '/admin/drivers', owner: 'Member 2' },
  { label: 'Vehicles', path: '/admin/vehicles', owner: 'Member 2' },
  { label: 'Routes', path: '/admin/routes', owner: 'Member 2' },
  { label: 'Trips Authorization', title: 'Trip Authorization', path: '/admin/trips-authorization', owner: 'Member 2' },
  { label: 'Audit Logs', path: '/admin/audit-logs', owner: 'Member 1' },
];

export const officerMenu = [
  { label: 'Dashboard', title: 'Government Officer Dashboard', path: '/officer/dashboard', owner: 'Member 3' },
  { label: 'Live Monitoring', title: 'Live Vehicle Monitoring', path: '/officer/live-monitoring', owner: 'Member 3' },
  { label: 'Vehicles & Trips', title: 'Vehicle & Trip Details', path: '/officer/vehicles-trips', owner: 'Member 3' },
  { label: 'Alert Centre', path: '/officer/alert-centre', owner: 'Member 4' },
  { label: 'Incident Management', path: '/officer/incidents', owner: 'Member 4' },
  { label: 'Trip History & Reports', path: '/officer/reports', owner: 'Member 4' },
];