'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import SectionHeader from '@/components/common/SectionHeader';
import { BRAND } from '@/lib/constants';
import { brandColors } from '@/theme/colors';

const VALUES = [
  {
    title: 'Quality',
    description: 'Prioritising consistent product quality and appropriate laboratory testing at every operational milestone.',
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 32, color: brandColors.primaryBlue }} />,
  },
  {
    title: 'Trust',
    description: 'Building transparent, ethical, and dependable relationships with consumers, partners, and local communities.',
    icon: <HandshakeOutlinedIcon sx={{ fontSize: 32, color: brandColors.primaryBlue }} />,
  },
  {
    title: 'Responsibility',
    description: 'Following applicable manufacturing, safety, and environmental stewardship guidelines conscientiously.',
    icon: <SpaOutlinedIcon sx={{ fontSize: 32, color: brandColors.primaryBlue }} />,
  },
  {
    title: 'Consistency',
    description: 'Maintaining reliable business and operational standards across every batch, route, and interaction.',
    icon: <LoopOutlinedIcon sx={{ fontSize: 32, color: brandColors.primaryBlue }} />,
  },
  {
    title: 'Growth',
    description: 'Developing sustainable long-term business partnerships that empower local supply chain ecosystems.',
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 32, color: brandColors.primaryBlue }} />,
  },
];

export default function AboutSection() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        scrollMarginTop: 80,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <SectionHeader
          overline="About Us"
          title="About Jivanira Aqua Industries"
          subtitle="Envisioning a dependable, quality-oriented packaged drinking water brand rooted in West Bengal."
        />

        {/* Intro Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ mb: { xs: 6, md: 8 } }}>
          <Grid item xs={12} md={7}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 2 }}>
              A New Vision for Everyday Hydration
            </Typography>
            <Typography variant="body1" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 2 }}>
              <strong>Jivanira Aqua Industries</strong> is an upcoming packaged drinking water enterprise founded by{' '}
              <strong>Sandip Dolai</strong> in <strong>Dabadari, Paschim Medinipur, West Bengal, India</strong>.
            </Typography>
            <Typography variant="body1" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 2 }}>
              The business has been envisioned to develop an independent packaged drinking water manufacturing operation
              under its own consumer brand, <strong>JIVANIRA</strong>.
            </Typography>
            <Typography variant="body1" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 2 }}>
              Our objective is to establish a professionally managed enterprise that focuses on product quality,
              responsible manufacturing and dependable distribution.
            </Typography>
            <Typography variant="body1" sx={{ color: brandColors.slateMuted, lineHeight: 1.8 }}>
              We believe that a successful brand is built through consistency, transparency and customer trust.
            </Typography>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: brandColors.lightBlue,
                border: `1px solid rgba(13, 117, 183, 0.25)`,
              }}
            >
              <Typography variant="overline" sx={{ fontWeight: 800, color: brandColors.primaryBlue, letterSpacing: '0.1em' }}>
                Corporate Overview
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 2 }}>
                {BRAND.companyName}
              </Typography>

              <Divider sx={{ my: 2, borderColor: 'rgba(13, 117, 183, 0.2)' }} />

              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <PersonOutlineIcon sx={{ color: brandColors.primaryBlue }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block' }}>
                      Founder & Proprietor
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: brandColors.deepNavy }}>
                      {BRAND.proprietor}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <BusinessOutlinedIcon sx={{ color: brandColors.primaryBlue }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block' }}>
                      Business Structure & Industry
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: brandColors.deepNavy }}>
                      {BRAND.structure} • {BRAND.industry}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <LocationOnOutlinedIcon sx={{ color: brandColors.primaryBlue }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block' }}>
                      Registered Location
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: brandColors.deepNavy }}>
                      {BRAND.location}
                    </Typography>
                  </Box>
                </Box>
              </Stack>

              <Box sx={{ mt: 3, pt: 2, borderTop: `1px solid rgba(13, 117, 183, 0.2)` }}>
                <Chip
                  label="Planned Business Launch: 2027"
                  size="small"
                  sx={{
                    backgroundColor: brandColors.deepNavy,
                    color: '#FFFFFF',
                    fontWeight: 700,
                  }}
                />
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Mission & Vision Cards */}
        <Grid container spacing={3.5} sx={{ mb: { xs: 6, md: 8 } }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: { xs: 3.5, md: 4.5 },
                height: '100%',
                backgroundColor: brandColors.deepNavy,
                color: '#FFFFFF',
                borderRadius: 3,
              }}
            >
              <Chip
                label="OUR MISSION"
                size="small"
                sx={{
                  backgroundColor: brandColors.primaryBlue,
                  color: '#FFFFFF',
                  fontWeight: 800,
                  mb: 2,
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 2 }}>
                Responsible & Dependable Hydration
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8 }}>
                To develop and supply packaged drinking water through responsible manufacturing practices,
                quality-focused operations and a reliable distribution network.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: { xs: 3.5, md: 4.5 },
                height: '100%',
                backgroundColor: brandColors.lightBlue,
                border: `2px solid rgba(13, 117, 183, 0.2)`,
                borderRadius: 3,
              }}
            >
              <Chip
                label="OUR VISION"
                size="small"
                sx={{
                  backgroundColor: brandColors.primaryBlue,
                  color: '#FFFFFF',
                  fontWeight: 800,
                  mb: 2,
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 2 }}>
                A Trusted Regional Brand
              </Typography>
              <Typography variant="body1" sx={{ color: brandColors.deepNavy, lineHeight: 1.8 }}>
                To establish JIVANIRA as a trusted regional packaged drinking water brand and progressively expand its
                presence across West Bengal.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* 5 Core Values */}
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 1, textAlign: 'center' }}
          >
            Our Core Values
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: brandColors.slateMuted, textAlign: 'center', maxWidth: 640, mx: 'auto', mb: 5 }}
          >
            The foundational standards shaping every aspect of our upcoming operations and business relationships.
          </Typography>

          <Grid container spacing={2.5}>
            {VALUES.map((val) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={val.title}>
                <Card sx={{ height: '100%', p: 2 }}>
                  <CardContent sx={{ p: 1 }}>
                    <Box sx={{ mb: 1.5 }}>{val.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 1 }}>
                      {val.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.6 }}>
                      {val.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
