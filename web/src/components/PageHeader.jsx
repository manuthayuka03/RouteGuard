import { Box, Typography } from '@mui/material';

// Description on the left, action buttons on the right.
// Usage: <PageHeader description="Manage driver profiles."> <Button>+ Add driver</Button> </PageHeader>
export default function PageHeader({ description, children }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
      <Typography color="text.secondary">{description}</Typography>
      <Box>{children}</Box>
    </Box>
  );
}