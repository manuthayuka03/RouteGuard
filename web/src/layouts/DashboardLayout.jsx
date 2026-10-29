import { Box, Button, Typography } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar, { SIDEBAR_WIDTH } from './Sidebar';

export default function DashboardLayout({ menuItems, roleLabel }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // The top bar shows the title of whichever menu item matches the URL.
  const current = menuItems.find((item) => pathname.startsWith(item.path));
  const title = current ? current.title ?? current.label : 'RouteGuard';

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar menuItems={menuItems} footerLabel={roleLabel} />

      <Box sx={{ flexGrow: 1, ml: `${SIDEBAR_WIDTH}px`, minHeight: '100vh' }}>
        <Box
          sx={{
            bgcolor: '#fff',
            px: 4,
            py: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {roleLabel}
            </Typography>
            <Button size="small" color="secondary" onClick={() => navigate('/login')}>
              Sign out
            </Button>
          </Box>
        </Box>

        <Box sx={{ p: 4 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}