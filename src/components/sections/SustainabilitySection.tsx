'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import PlumbingOutlinedIcon from '@mui/icons-material/PlumbingOutlined';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import SectionHeader from '@/components/common/SectionHeader';
import { brandColors } from '@/theme/colors';

const PRIORITIES = [
  {
    title: 'Responsible Water Resource Management',
    description: 'Evaluating aquifer replenishment, avoiding over-extraction, and managing local groundwater thoughtfully.',
    icon: <WaterOutlinedIcon sx={{ fontSize: 32, color: '#2E7D32' }} />,
  },
  {
    title: 'Efficient Water Utilisation',
    description: 'Engineering high-recovery filtration designs to minimize water rejection during pre-treatment.',
    icon: <OpacityOutlinedIcon sx={{ fontSize: 32, color: '#2E7D32' }} />,
  },
  {
    title: 'Appropriate Wastewater Management',
    description: 'Operating planned effluent treatment protocols and exploring graywater repurposing for green belts.',
    icon: <PlumbingOutlinedIcon sx={{ fontSize: 32, color: '#2E7D32' }} />,
  },
  {
    title: 'Responsible Plastic Packaging Management',
    description: 'Committed to using 100% recyclable, food-grade PET plastics with lightweight structural designs.',
    icon: <RecyclingOutlinedIcon sx={{ fontSize: 32, color: '#2E7D32' }} />,
  },
  {
    title: 'Compliance with EPR Obligations',
    description: 'Preparing proactive operational alignment with India’s Extended Producer Responsibility (EPR) mandates.',
    icon: <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 32, color: '#2E7D32' }} />,
  },
  {
    title: 'Continuous Operational Improvement',
    description: 'Ongoing review of energy consumption, transport efficiency, and sustainable operational practices.',
    icon: <EnergySavingsLeafOutlinedIcon sx={{ fontSize: 32, color: '#2E7D32' }} />,
  },
];

export default function SustainabilitySection() {
  return (
    <Box
      id="sustainability"
      component="section"
      sx={{
        py: { xs: 5, sm: 7, md: 11 },
        backgroundColor: '#F8FAF8',
        scrollMarginTop: 80,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <SectionHeader
          overline="Sustainability"
          title="Responsible Growth. Responsible Practices."
          subtitle="We recognise the importance of responsible resource management in the packaged drinking water industry."
        />

        {/* Nature & Stewardship Feature Card */}
        <Card
          sx={{
            mb: { xs: 6, md: 8 },
            overflow: 'hidden',
            backgroundColor: '#EDF7ED',
            border: `1px solid rgba(46, 125, 50, 0.25)`,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ p: { xs: 3.5, md: 5 } }}>
                <Chip
                  label="Environmental Responsibility"
                  size="small"
                  sx={{
                    backgroundColor: '#2E7D32',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    mb: 1.5,
                  }}
                />
                <Typography variant="h4" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 2 }}>
                  Responsible Business Approach
                </Typography>
                <Typography variant="body1" sx={{ color: brandColors.deepNavy, lineHeight: 1.8, mb: 2.5 }}>
                  We recognise the importance of responsible resource management in the packaged drinking water industry.
                  As JIVANIRA develops its manufacturing operations, environmental responsibility will be an important
                  consideration.
                </Typography>
                <Typography variant="body2" sx={{ color: '#2E7D32', fontWeight: 600, lineHeight: 1.7 }}>
                  Our long-term objective is to build a business that grows responsibly while considering its environmental
                  impact.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src="/images/sustainability-nature.jpg"
                  alt="Pristine Natural Water Sourcing"
                  sx={{
                    width: '100%',
                    height: { xs: 260, md: 360 },
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    right: { xs: 12, sm: 'auto' },
                    backgroundColor: 'rgba(21, 59, 80, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1.5,
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.72rem' }}>
                    Freshwater Aquifer & Natural Source Stewardship
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* 6 Priorities Grid */}
        <Grid container spacing={3}>
          {PRIORITIES.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  borderTop: `4px solid #2E7D32`,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: '#E8F5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 1, fontSize: '1.05rem' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.65 }}>
                  {item.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
