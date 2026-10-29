import { createTheme } from '@mui/material/styles';

// Shared brand colours. Everyone should use these instead of typing hex codes.
export const colors = {
  sidebar: '#142B4A',
  primary: '#142B4A',
  accent: '#2563EB',
  teal: '#0F766E',
  background: '#F3F6FA',
  textPrimary: '#142B4A',
  textSecondary: '#64748B',
  success: { text: '#15803D', bg: '#DCFCE7' },
  warning: { text: '#B45309', bg: '#FEF3C7' },
  error: { text: '#B91C1C', bg: '#FEE2E2' },
  info: { text: '#1D4ED8', bg: '#DBEAFE' },
};

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.teal },
    background: { default: colors.background, paper: '#FFFFFF' },
    text: { primary: colors.textPrimary, secondary: colors.textSecondary },
    success: { main: colors.success.text, light: colors.success.bg },
    warning: { main: colors.warning.text, light: colors.warning.bg },
    error: { main: colors.error.text, light: colors.error.bg },
    info: { main: colors.info.text, light: colors.info.bg },
  },
  typography: {
    fontFamily: '"Inter", Arial, sans-serif',
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 },
      },
    },
  },
});

export default theme;