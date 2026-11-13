'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import { BRAND } from '@/lib/constants';
import { brandColors } from '@/theme/colors';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        position: 'relative',
        background: `radial-gradient(circle at 85% 15%, #E3F4FC 0%, #FFFFFF 65%, #F0F9FF 100%)`,
        pt: { xs: 8, md: 11 },
        pb: { xs: 8, md: 12 },
        borderBottom: `1px solid ${brandColors.borderLight}`,
        scrollMarginTop: 80,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 7 }} alignItems="center">
          {/* Left Hero Content */}
          <Grid item xs={12} md={6.5}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2.5 }}>
              <Chip
                label="Coming in 2027"
                color="primary"
                size="small"
                sx={{
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  px: 0.5,
                }}
              />
              <Chip
                label="West Bengal, India"
                variant="outlined"
                size="small"
                sx={{
                  borderColor: brandColors.primaryBlue,
                  color: brandColors.primaryBlue,
                  fontWeight: 600,
                }}
              />
            </Stack>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
                lineHeight: 1.15,
                mb: 2,
                color: brandColors.deepNavy,
              }}
            >
              Refreshment Begins with{' '}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${brandColors.primaryBlue} 0%, #03A9F4 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                JIVANIRA.
              </Box>
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.6rem' },
                fontWeight: 600,
                color: brandColors.primaryBlue,
                mb: 2.5,
                letterSpacing: '-0.01em',
              }}
            >
              {BRAND.tagline}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.05rem', md: '1.15rem' },
                lineHeight: 1.75,
                color: brandColors.slateMuted,
                maxWidth: 620,
                mb: 4.5,
              }}
            >
              A new name in everyday hydration is taking shape in West Bengal. JIVANIRA is an upcoming packaged drinking
              water brand by Jivanira Aqua Industries, established with a vision to build a dependable brand through
              quality-focused manufacturing, responsible practices and customer trust.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => scrollTo('about')}
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 3.5, py: 1.4, fontSize: '1rem', width: { xs: '100%', sm: 'auto' } }}
              >
                Discover Our Brand
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={() => scrollTo('partnership')}
                startIcon={<HandshakeOutlinedIcon />}
                sx={{ px: 3.5, py: 1.4, fontSize: '1rem', borderWidth: 1.5, width: { xs: '100%', sm: 'auto' } }}
              >
                Business Enquiry
              </Button>
            </Stack>
          </Grid>

          {/* Right Hero Visuals — Duo Packshot Showcase */}
          <Grid item xs={12} md={5.5}>
            <Box
              sx={{
                position: 'relative',
                backgroundColor: '#FFFFFF',
                borderRadius: 4,
                p: { xs: 2.5, sm: 3.5 },
                boxShadow: '0 20px 45px rgba(13, 117, 183, 0.15)',
                border: `1px solid rgba(13, 117, 183, 0.18)`,
                textAlign: 'center',
              }}
            >
              {/* Official Brand Logo */}
              <Box
                component="img"
                src="/images/logo.png"
                alt="JIVANIRA Pure Refreshment. A Better Tomorrow."
                sx={{
                  height: { xs: 62, sm: 74 },
                  width: 'auto',
                  objectFit: 'contain',
                  mx: 'auto',
                  mb: 2,
                  display: 'block',
                }}
              />

              {/* Realistic Duo Bottle Packshot */}
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#F8FBFE',
                  border: `1px solid ${brandColors.borderLight}`,
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src="/images/hero-bottles.jpg"
                  alt="JIVANIRA 500ml and 1 Litre Packaged Drinking Water Bottles"
                  sx={{
                    width: '100%',
                    height: { xs: 250, sm: 310 },
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                    },
                  }}
                />
              </Box>

              {/* Bottle Labels */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 1.5 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: brandColors.deepNavy }}>
                    500 ml
                  </Typography>
                  <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block' }}>
                    On-the-go Pack
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: brandColors.deepNavy }}>
                    1 Litre
                  </Typography>
                  <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block' }}>
                    Everyday Standard Pack
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  p: 1.4,
                  borderRadius: 2,
                  backgroundColor: brandColors.lightBlue,
                  border: `1px dashed rgba(13, 117, 183, 0.3)`,
                }}
              >
                <Typography variant="caption" sx={{ color: brandColors.deepNavy, fontWeight: 700, display: 'block' }}>
                  Proposed Consumer Packaging Lineup
                </Typography>
                <Typography variant="caption" sx={{ color: brandColors.slateMuted, fontSize: '0.72rem' }}>
                  Final specifications will be announced prior to commercial launch in 2027.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
