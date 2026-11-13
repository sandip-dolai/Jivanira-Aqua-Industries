'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { brandColors } from '@/theme/colors';

interface BottleVisualProps {
  volume: '500 ml' | '1 Litre' | string;
  height?: number;
}

export default function BottleVisual({ volume, height = 320 }: BottleVisualProps) {
  const isOneLitre = volume.toLowerCase().includes('1');
  const imageSrc = isOneLitre ? '/images/bottle-1litre.jpg' : '/images/bottle-500ml.jpg';

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1.5,
      }}
    >
      {/* Studio Commercial Packshot Image */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 240,
          height,
          borderRadius: 2.5,
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(13, 117, 183, 0.12)',
          border: `1px solid rgba(13, 117, 183, 0.15)`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 16px 32px rgba(13, 117, 183, 0.18)',
          },
        }}
      >
        <Box
          component="img"
          src={imageSrc}
          alt={`JIVANIRA ${volume} Packaged Drinking Water Bottle`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            p: 1,
          }}
        />
      </Box>

      {/* Conceptual Design Tag */}
      <Chip
        label="Conceptual Packaging Preview"
        size="small"
        sx={{
          mt: 2,
          fontSize: '0.6875rem',
          height: 22,
          backgroundColor: brandColors.lightBlue,
          color: brandColors.primaryBlue,
          fontWeight: 600,
          border: `1px solid rgba(13, 117, 183, 0.2)`,
        }}
      />
    </Box>
  );
}
