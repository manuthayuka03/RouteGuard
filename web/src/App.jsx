import { Box, Button, Typography } from '@mui/material';

export default function App() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        RouteGuard
      </Typography>
      <Button variant="contained">Primary button</Button>
    </Box>
  );
}