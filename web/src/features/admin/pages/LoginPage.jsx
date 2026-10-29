import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// TEMPORARY dev login. Member 1 will replace this with the real sign-in page.
export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, width: 380 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          RouteGuard
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Temporary development login.
        </Typography>
        <Stack spacing={2}>
          <Button variant="contained" onClick={() => navigate('/admin/overview')}>
            Continue as Administrator
          </Button>
          <Button variant="outlined" onClick={() => navigate('/officer/dashboard')}>
            Continue as Government Officer
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}