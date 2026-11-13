'use client';

import { createTheme } from '@mui/material/styles';
import { brandColors } from './colors';

export { brandColors };

const theme = createTheme({
  palette: {
    primary: {
      main: brandColors.primaryBlue,
      light: '#3ea5e4',
      dark: '#084F7D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: brandColors.deepNavy,
      light: '#285873',
      dark: '#0C2331',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: brandColors.deepNavy,
      secondary: brandColors.slateMuted,
    },
    action: {
      hover: 'rgba(13, 117, 183, 0.06)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
      color: brandColors.deepNavy,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: brandColors.deepNavy,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
      color: brandColors.deepNavy,
    },
    h4: {
      fontWeight: 600,
      color: brandColors.deepNavy,
    },
    h5: {
      fontWeight: 600,
      color: brandColors.deepNavy,
    },
    h6: {
      fontWeight: 600,
      color: brandColors.deepNavy,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 22px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(13, 117, 183, 0.2)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0D75B7 0%, #085B8F 100%)',
        },
        outlinedPrimary: {
          borderColor: brandColors.primaryBlue,
          borderWidth: 1.5,
          '&:hover': {
            borderWidth: 1.5,
            backgroundColor: brandColors.lightBlue,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: `1px solid ${brandColors.borderLight}`,
          boxShadow: '0 2px 8px rgba(21, 59, 80, 0.04)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 12px 28px rgba(21, 59, 80, 0.08)',
            borderColor: '#CBD5E1',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(12px)',
          color: brandColors.deepNavy,
          boxShadow: '0 1px 4px rgba(21, 59, 80, 0.06)',
        },
      },
    },
  },
});

export default theme;
