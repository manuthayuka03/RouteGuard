import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { colors } from '../theme';

export const SIDEBAR_WIDTH = 240;

export default function Sidebar({ menuItems, footerLabel }) {
  return (
    <Box
      sx={{
        width: SIDEBAR_WIDTH,
        bgcolor: colors.sidebar,
        color: '#fff',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={700}>
          ◇ RouteGuard
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          TRANSPORT OPERATIONS
        </Typography>
      </Box>

      <List sx={{ px: 1.5, flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            sx={{
              borderRadius: 1.5,
              mb: 0.5,
              color: 'rgba(255,255,255,0.8)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' },
              '&.active': { bgcolor: colors.accent, color: '#fff' },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
            />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ p: 2, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <Typography variant="body2">{footerLabel}</Typography>
      </Box>
    </Box>
  );
}