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
        minHeight: { md: 'calc(100vh - 100px)' },
        display: 'flex',
        alignItems: 'center',
        background: `radial-gradient(circle at 85% 15%, #E3F4FC 0%, #FFFFFF 65%, #F0F9FF 100%)`,
        py: { xs: 4, sm: 5, md: 4 },
        borderBottom: `1px solid ${brandColors.borderLight}`,
        scrollMarginTop: 80,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} alignItems="center">
          {/* Left Hero Content */}
          <Grid item xs={12} md={6.5}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
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
                fontSize: { xs: '1.9rem', sm: '2.5rem', md: '3.2rem' },
                lineHeight: 1.15,
                mb: 1.5,
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
                fontSize: { xs: '1.15rem', md: '1.45rem' },
                fontWeight: 600,
                color: brandColors.primaryBlue,
                mb: 2,
                letterSpacing: '-0.01em',
              }}
            >
              {BRAND.tagline}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.7,
                color: brandColors.slateMuted,
                maxWidth: 580,
                mb: 3.5,
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
                sx={{ px: 3.5, py: 1.2, fontSize: '0.95rem', width: { xs: '100%', sm: 'auto' } }}
              >
                Discover Our Brand
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={() => scrollTo('partnership')}
                startIcon={<HandshakeOutlinedIcon />}
                sx={{ px: 3.5, py: 1.2, fontSize: '0.95rem', borderWidth: 1.5, width: { xs: '100%', sm: 'auto' } }}
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
                borderRadius: 3.5,
                p: { xs: 2, sm: 2.5, md: 2.8 },
                boxShadow: '0 16px 40px rgba(13, 117, 183, 0.12)',
                border: `1px solid rgba(13, 117, 183, 0.18)`,
                textAlign: 'center',
                maxWidth: { md: 460 },
                mx: 'auto',
              }}
            >
              {/* Official Brand Logo */}
              <Box
                component="img"
                src="/images/logo.png"
                alt="JIVANIRA Pure Refreshment. A Better Tomorrow."
                sx={{
                  height: { xs: 48, sm: 56, md: 58 },
                  width: 'auto',
                  objectFit: 'contain',
                  mx: 'auto',
                  mb: 1.5,
                  display: 'block',
                }}
              />

              {/* Realistic Duo Bottle Packshot */}
              <Box
                sx={{
                  borderRadius: 2.5,
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#F8FBFE',
                  border: `1px solid ${brandColors.borderLight}`,
                  mb: 1.5,
                }}
              >
                <Box
                  component="img"
                  src="/images/hero-bottles.jpg"
                  alt="JIVANIRA 500ml and 1 Litre Packaged Drinking Water Bottles"
                  sx={{
                    width: '100%',
                    height: { xs: 200, sm: 240, md: 250 },
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
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 1 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: brandColors.deepNavy, fontSize: '0.85rem' }}>
                    500 ml
                  </Typography>
                  <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block', fontSize: '0.72rem' }}>
                    On-the-go Pack
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: brandColors.deepNavy, fontSize: '0.85rem' }}>
                    1 Litre
                  </Typography>
                  <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block', fontSize: '0.72rem' }}>
                    Everyday Standard Pack
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  p: 1.2,
                  borderRadius: 1.5,
                  backgroundColor: brandColors.lightBlue,
                  border: `1px dashed rgba(13, 117, 183, 0.3)`,
                }}
              >
                <Typography variant="caption" sx={{ color: brandColors.deepNavy, fontWeight: 700, display: 'block', fontSize: '0.75rem' }}>
                  Proposed Consumer Packaging Lineup
                </Typography>
                <Typography variant="caption" sx={{ color: brandColors.slateMuted, fontSize: '0.7rem' }}>
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

