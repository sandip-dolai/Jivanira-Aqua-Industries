'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { brandColors } from '@/theme/colors';

export default function PreLaunchBanner() {
  return (
    <Box
      sx={{
        backgroundColor: brandColors.deepNavy,
        color: '#FFFFFF',
        py: 0.9,
        borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
        fontSize: '0.8125rem',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1.2,
            textAlign: 'center',
          }}
        >
          <Chip
            size="small"
            label="Pre-Establishment Notice"
            sx={{
              backgroundColor: brandColors.primaryBlue,
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.6875rem',
              height: 20,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.92)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <InfoOutlinedIcon sx={{ fontSize: 15, color: '#64B5F6', flexShrink: 0 }} />
            Jivanira Aqua Industries is an upcoming enterprise. Planned business launch: 2027.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
