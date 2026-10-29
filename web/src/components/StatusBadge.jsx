import { Chip } from '@mui/material';
import { colors } from '../theme';

const tones = {
  success: colors.success,
  warning: colors.warning,
  error: colors.error,
  info: colors.info,
  neutral: { text: '#475569', bg: '#E2E8F0' },
};

// Which colour each status gets. To change a colour, edit it here once
// and every page updates. Unknown statuses fall back to grey.
const statusTone = {
  active: 'success',
  resolved: 'success',
  authorized: 'success',
  completed: 'success',
  compliant: 'success',
  low: 'success',
  'on route': 'success',

  pending: 'warning',
  review: 'warning',
  maintenance: 'warning',
  medium: 'warning',
  high: 'warning',
  delayed: 'warning',
  warning: 'warning',

  critical: 'error',
  deviation: 'error',
  rejected: 'error',

  open: 'info',
  assigned: 'info',
  draft: 'info',
  'in progress': 'info',

  inactive: 'neutral',
  cancelled: 'neutral',
  reviewing: 'neutral',
  unassigned: 'neutral',
};

// Usage: <StatusBadge status="Active" />
// Optional override: <StatusBadge status="Custom" tone="error" />
export default function StatusBadge({ status, tone }) {
  const key = String(status).toLowerCase();
  const chosen = tones[tone ?? statusTone[key] ?? 'neutral'];

  return (
    <Chip
      label={status}
      size="small"
      sx={{ bgcolor: chosen.bg, color: chosen.text, fontWeight: 600, fontSize: 12 }}
    />
  );
}