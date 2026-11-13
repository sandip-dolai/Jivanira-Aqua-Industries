'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from '@/components/common/SectionHeader';
import { brandColors } from '@/theme/colors';

const FOCUS_AREAS = [
  {
    step: '01',
    title: 'Water Source Assessment',
    description:
      'Evaluating the suitability, mineral characteristics, and aquifer integrity of the proposed raw water source before intake.',
    icon: <ExploreOutlinedIcon sx={{ fontSize: 34, color: brandColors.primaryBlue }} />,
  },
  {
    step: '02',
    title: 'Appropriate Water Treatment',
    description:
      'Selecting an engineered, multi-barrier purification process based on comprehensive laboratory analysis and standard specifications.',
    icon: <FilterAltOutlinedIcon sx={{ fontSize: 34, color: brandColors.primaryBlue }} />,
  },
  {
    step: '03',
    title: 'Manufacturing Hygiene',
    description:
      'Maintaining clean, automated, and strictly sanitized production, filling, sealing, and storage environments.',
    icon: <CleanHandsOutlinedIcon sx={{ fontSize: 34, color: brandColors.primaryBlue }} />,
  },
  {
    step: '04',
    title: 'Quality Testing & Monitoring',
    description:
      'Following applicable FSSAI testing requirements, conducting scheduled microbiology tests, and keeping permanent quality records.',
    icon: <ScienceOutlinedIcon sx={{ fontSize: 34, color: brandColors.primaryBlue }} />,
  },
  {
    step: '05',
    title: 'Secure Packaging Controls',
    description:
      'Utilizing high-grade, tamper-evident, food-grade recyclable packaging materials to safeguard product integrity.',
    icon: <Inventory2OutlinedIcon sx={{ fontSize: 34, color: brandColors.primaryBlue }} />,
  },
  {
    step: '06',
    title: 'Batch Identification & Traceability',
    description:
      'Implementing strict batch coding and verifiable record-keeping for complete product traceability across distribution.',
    icon: <QrCode2OutlinedIcon sx={{ fontSize: 34, color: brandColors.primaryBlue }} />,
  },
];

export default function QualitySection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="quality"
      component="section"
      sx={{
        py: { xs: 5, sm: 7, md: 11 },
        backgroundColor: '#FFFFFF',
        scrollMarginTop: 80,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <SectionHeader
          overline="Our Commitment to Quality"
          title="Quality Is Our Foundation."
          subtitle="At JIVANIRA, we understand that packaged drinking water requires careful attention to quality at every stage of production."
        />

        {/* Conceptual Plant Facility Showcase */}
        <Card
          sx={{
            mb: { xs: 6, md: 8 },
            overflow: 'hidden',
            backgroundColor: brandColors.lightBlue,
            border: `1px solid rgba(13, 117, 183, 0.25)`,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ p: { xs: 3.5, md: 5 } }}>
                <Chip
                  label="Planned Manufacturing Approach"
                  size="small"
                  color="primary"
                  sx={{ fontWeight: 700, mb: 1.5 }}
                />
                <Typography variant="h4" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 2 }}>
                  Engineered Purity at Every Milestone
                </Typography>
                <Typography variant="body1" sx={{ color: brandColors.deepNavy, lineHeight: 1.8, mb: 2.5 }}>
                  At JIVANIRA, we believe that customer trust begins with product quality. Our planned manufacturing
                  process will incorporate appropriate multi-stage water treatment, automated bottle rinsing, hygienic
                  cleanroom bottling, laboratory quality testing and secure packaging controls.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: '#FFFFFF',
                    border: `1px solid rgba(13, 117, 183, 0.2)`,
                  }}
                >
                  <VerifiedUserOutlinedIcon sx={{ fontSize: 32, color: brandColors.primaryBlue }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: brandColors.deepNavy }}>
                      Statutory Compliance Focus
                    </Typography>
                    <Typography variant="caption" sx={{ color: brandColors.slateMuted }}>
                      Adhering to applicable FSSAI testing requirements and hygiene standards
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', backgroundColor: '#FFFFFF', p: { xs: 1, md: 2 } }}>
                <Box
                  component="img"
                  src="/images/factory-quality.jpg"
                  alt="JIVANIRA Planned 500 LPH Multi-Stage RO Plant"
                  sx={{
                    width: '100%',
                    height: { xs: 240, sm: 280, md: 390 },
                    objectFit: 'contain',
                    display: 'block',
                    borderRadius: 2,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: 10, sm: 20 },
                    left: { xs: 10, sm: 20 },
                    right: { xs: 10, sm: 'auto' },
                    backgroundColor: 'rgba(21, 59, 80, 0.9)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    px: 1.8,
                    py: 0.6,
                    borderRadius: 1.5,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.02em' }}>
                    Planned 500 LPH Industrial RO & Multi-Stage Filtration Plant
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* 6 Focus Areas Grid */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 1, textAlign: 'center' }}>
            Quality Focus Areas
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: brandColors.slateMuted, textAlign: 'center', maxWidth: 640, mx: 'auto', mb: 5 }}
          >
            A multi-stage quality framework planned from raw water source evaluation to finished batch packaging.
          </Typography>

          <Grid container spacing={3.5}>
            {FOCUS_AREAS.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.step}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: `4px solid ${brandColors.primaryBlue}`,
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        backgroundColor: brandColors.lightBlue,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'rgba(13, 117, 183, 0.25)' }}>
                      {item.step}
                    </Typography>
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
        </Box>

        {/* Bottom Commitment Banner */}
        <Card
          sx={{
            p: { xs: 3.5, md: 4.5 },
            backgroundColor: brandColors.deepNavy,
            color: '#FFFFFF',
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 1.5 }}>
            Our Quality Commitment
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.8,
              maxWidth: 780,
              mx: 'auto',
              mb: 3,
            }}
          >
            Our objective is to develop a quality-focused manufacturing operation that places consumer confidence and
            regulatory compliance at the centre of its activities.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => scrollTo('partnership')}
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 3, py: 1 }}
            >
              Discuss Partnership
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}
