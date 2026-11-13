'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brandColors } from '@/theme/colors';

interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  maxWidth?: number | string;
  light?: boolean;
}

export default function SectionHeader({
  overline,
  title,
  subtitle,
  align = 'center',
  maxWidth = 720,
  light = false,
}: SectionHeaderProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: maxWidth,
        mx: align === 'center' ? 'auto' : undefined,
        mb: { xs: 4, md: 6 },
      }}
    >
      {overline && (
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            fontWeight: 800,
            letterSpacing: '0.14em',
            color: light ? '#90CAF9' : brandColors.primaryBlue,
            mb: 1,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
          }}
        >
          {overline}
        </Typography>
      )}

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
          fontWeight: 800,
          color: light ? '#FFFFFF' : brandColors.deepNavy,
          lineHeight: 1.2,
          mb: subtitle ? 2 : 0,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            color: light ? 'rgba(255, 255, 255, 0.82)' : brandColors.slateMuted,
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
