'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LegalModal from '@/components/common/LegalModal';
import { BRAND, NAV_LINKS } from '@/lib/constants';
import { brandColors } from '@/theme/colors';

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: brandColors.deepNavy,
          color: '#FFFFFF',
          pt: { xs: 7, md: 9 },
          pb: 4,
          borderTop: `4px solid ${brandColors.primaryBlue}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 5 }}>
            {/* Column 1: Brand & Logo */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: 'inline-block',
                  p: 1.2,
                  px: 2,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 2.5,
                  mb: 2.5,
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Box
                  component="img"
                  src="/images/logo.png"
                  alt="JIVANIRA Aqua Industries"
                  sx={{
                    height: 54,
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Box>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: '#64B5F6',
                  fontStyle: 'italic',
                  mb: 1.5,
                }}
              >
                {BRAND.tagline}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.7,
                  mb: 2,
                  pr: { md: 2 },
                }}
              >
                An upcoming packaged drinking water brand from West Bengal, India. Envisioned to deliver purity, dependable
                quality, and responsible manufacturing for everyday hydration.
              </Typography>
            </Grid>

            {/* Column 2: Quick Links */}
            <Grid item xs={12} sm={4} md={2.5}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  mb: 2.5,
                }}
              >
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {NAV_LINKS.map((link) => (
                  <Box component="li" key={link.id} sx={{ mb: 1.2 }}>
                    <Button
                      onClick={() => handleScrollTo(link.id)}
                      sx={{
                        p: 0,
                        minWidth: 0,
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        textAlign: 'left',
                        '&:hover': {
                          color: '#64B5F6',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Column 3: Legal & Information */}
            <Grid item xs={12} sm={4} md={2}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  mb: 2.5,
                }}
              >
                Information
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                <Box component="li" sx={{ mb: 1.2 }}>
                  <Button
                    onClick={() => setLegalModal('privacy')}
                    sx={{
                      p: 0,
                      minWidth: 0,
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      '&:hover': { color: '#64B5F6', backgroundColor: 'transparent' },
                    }}
                  >
                    Privacy Policy
                  </Button>
                </Box>
                <Box component="li" sx={{ mb: 1.2 }}>
                  <Button
                    onClick={() => setLegalModal('terms')}
                    sx={{
                      p: 0,
                      minWidth: 0,
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      '&:hover': { color: '#64B5F6', backgroundColor: 'transparent' },
                    }}
                  >
                    Terms & Conditions
                  </Button>
                </Box>
                <Box component="li" sx={{ mb: 1.2 }}>
                  <Button
                    onClick={() => handleScrollTo('contact')}
                    sx={{
                      p: 0,
                      minWidth: 0,
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      '&:hover': { color: '#64B5F6', backgroundColor: 'transparent' },
                    }}
                  >
                    Partner Enquiries
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Column 4: Enterprise Coordinates */}
            <Grid item xs={12} sm={4} md={3.5}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  mb: 2.5,
                }}
              >
                Enterprise Coordinates
              </Typography>

              <Box sx={{ display: 'flex', gap: 1.2, mb: 1.8 }}>
                <LocationOnOutlinedIcon sx={{ color: '#64B5F6', fontSize: 20, mt: 0.2 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#FFFFFF' }}>
                    {BRAND.companyName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.85rem' }}>
                    Dabadari, Paschim Medinipur,
                    <br />
                    West Bengal, India.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.2, mb: 1.5 }}>
                <PersonOutlineIcon sx={{ color: '#64B5F6', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.85rem' }}>
                  Founder & Proprietor: <strong>{BRAND.proprietor}</strong>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.2, mb: 1.5 }}>
                <PhoneInTalkOutlinedIcon sx={{ color: '#64B5F6', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.85rem' }}>
                  Phone:{' '}
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600 }}
                  >
                    {BRAND.phone}
                  </a>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.2, mb: 1.5 }}>
                <EmailOutlinedIcon sx={{ color: '#64B5F6', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.85rem' }}>
                  Email:{' '}
                  <a
                    href={`mailto:${BRAND.email}`}
                    style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 600 }}
                  >
                    {BRAND.email}
                  </a>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.2 }}>
                <EventAvailableOutlinedIcon sx={{ color: '#64B5F6', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.85rem' }}>
                  Planned Launch: <strong>{BRAND.plannedLaunchYear}</strong>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Statutory Disclaimer & Copyright Divider */}
          <Box
            sx={{
              mt: 6,
              pt: 3.5,
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontSize: '0.8125rem',
                lineHeight: 1.6,
                maxWidth: 820,
                mx: 'auto',
                mb: 1.5,
              }}
            >
              {BRAND.disclaimer}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.45)',
                fontSize: '0.75rem',
              }}
            >
              All factual claims, certifications, and product specifications are subject to regulatory clearance before commercial launch.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Accessible In-Page Legal Dialog */}
      <LegalModal
        open={Boolean(legalModal)}
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </>
  );
}
