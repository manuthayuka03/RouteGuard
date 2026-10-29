import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

// columns: [{ key: 'name', label: 'Driver name' }, { key: 'status', label: 'Status', render: (row) => <StatusBadge status={row.status} /> }]
// rows: a list of objects, each with a unique "id"
export default function DataTable({ columns, rows, emptyText = 'No records found' }) {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead sx={{ bgcolor: '#F8FAFC' }}>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.key} sx={{ color: 'text.secondary', fontWeight: 600, fontSize: 12 }}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                <Typography color="text.secondary" sx={{ py: 3 }}>
                  {emptyText}
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow key={row.id} hover>
                {columns.map((col) => (
                  <TableCell key={col.key}>{col.render ? col.render(row) : row[col.key]}</TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}