import { Box, Button, Stack, Typography } from '@mui/material';
import StatusBadge from './StatusBadge';
import StatCard, { StatCardRow } from './StatCard';
import PageHeader from './PageHeader';
import DataTable from './DataTable';

const sampleRows = [
  { id: 1, name: 'Nimal Perera', licence: 'B1234567', status: 'Active' },
  { id: 2, name: 'Kavindu Silva', licence: 'B2098234', status: 'Pending' },
  { id: 3, name: 'Amaya Fernando', licence: 'B8812411', status: 'Inactive' },
];

const columns = [
  { key: 'name', label: 'Driver name' },
  { key: 'licence', label: 'Licence no.' },
  { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> },
];

// Team style guide. Open http://localhost:5173/dev/components
export default function ComponentsPreview() {
  return (
    <Box sx={{ p: 4, maxWidth: 1000 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Shared components
      </Typography>

      <Typography fontWeight={600} sx={{ mt: 3, mb: 1 }}>StatusBadge</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {['Active', 'Pending', 'Critical', 'Open', 'Inactive', 'Resolved', 'High', 'Low'].map((s) => (
          <StatusBadge key={s} status={s} />
        ))}
      </Stack>

      <Typography fontWeight={600} sx={{ mt: 3, mb: 1 }}>StatCard</Typography>
      <StatCardRow>
        <StatCard label="Total drivers" value={48} note="All registered" />
        <StatCard label="Active" value={42} />
        <StatCard label="Critical alerts" value={2} color="error.main" note="High priority" />
      </StatCardRow>

      <Typography fontWeight={600} sx={{ mt: 3, mb: 1 }}>PageHeader + DataTable</Typography>
      <PageHeader description="Manage driver profiles and licence details.">
        <Button variant="contained">+ Add driver</Button>
      </PageHeader>
      <DataTable columns={columns} rows={sampleRows} />
    </Box>
  );
}