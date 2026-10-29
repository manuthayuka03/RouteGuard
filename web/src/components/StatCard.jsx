import { Box, Paper, Typography } from '@mui/material';

// One number card. Usage: <StatCard label="Total drivers" value={48} note="All registered" />
export default function StatCard({ label, value, note, color }) {
  return (
    <Paper variant="outlined" sx={{ p: 2.5, flex: 1, minWidth: 180 }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="h4" fontWeight={700} sx={{ color: color ?? 'text.primary' }}>
        {value}
      </Typography>
      {note && (
        <Typography variant="caption" color="text.secondary">
          {note}
        </Typography>
      )}
    </Paper>
  );
}

// A row that holds several cards. Usage: <StatCardRow> <StatCard .../> ... </StatCardRow>
export function StatCardRow({ children }) {
  return <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>{children}</Box>;
}