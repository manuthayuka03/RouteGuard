import { Paper, Typography } from '@mui/material';

export default function PlaceholderPage({ title, owner }) {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h6" fontWeight={700} gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary">Not built yet. Owner: {owner}</Typography>
    </Paper>
  );
}