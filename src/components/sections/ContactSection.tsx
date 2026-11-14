'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SectionHeader from '@/components/common/SectionHeader';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { BRAND } from '@/lib/constants';
import { brandColors } from '@/theme/colors';

interface ContactSectionProps {
  selectedCategory?: string;
}

export default function ContactSection({ selectedCategory = 'General Enquiry' }: ContactSectionProps) {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 5, sm: 6, md: 8 }, minHeight: { md: "100vh" }, display: "flex", flexDirection: "column", justifyContent: "center",
        backgroundColor: brandColors.lightGrey,
        scrollMarginTop: 80,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <SectionHeader
          overline="Get In Touch"
          title="Let's Connect With JIVANIRA"
          subtitle="We welcome enquiries from customers, prospective distributors, retailers and business partners."
        />

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          {/* Business Info Column */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: brandColors.lightBlue,
                border: `1px solid rgba(13, 117, 183, 0.2)`,
                mb: 3,
              }}
            >
              <Chip
                label="BUSINESS INFORMATION"
                size="small"
                sx={{
                  backgroundColor: brandColors.primaryBlue,
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.7rem',
                  mb: 2,
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 0.5 }}>
                {BRAND.companyName}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: brandColors.primaryBlue, fontWeight: 700, mb: 2.5 }}>
                Brand: {BRAND.name}
              </Typography>

              <Divider sx={{ mb: 2.5, borderColor: 'rgba(13, 117, 183, 0.2)' }} />

              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <LocationOnOutlinedIcon sx={{ color: brandColors.primaryBlue, mt: 0.2 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block' }}>
                      Registered Location
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: brandColors.deepNavy }}>
                      Dabadari, Paschim Medinipur,
                      <br />
                      West Bengal, India.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <PersonOutlineIcon sx={{ color: brandColors.primaryBlue, mt: 0.2 }} />
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
                  <BusinessOutlinedIcon sx={{ color: brandColors.primaryBlue, mt: 0.2 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block' }}>
                      Industry
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: brandColors.deepNavy }}>
                      {BRAND.industry} ({BRAND.structure})
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <EventAvailableOutlinedIcon sx={{ color: brandColors.primaryBlue, mt: 0.2 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block' }}>
                      Planned Commercial Launch
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: brandColors.deepNavy }}>
                      {BRAND.plannedLaunchYear} (Pre-establishment Stage)
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Card>

            {/* Direct Official Contact Cards */}
            <Card
              sx={{
                p: { xs: 2.5, md: 3 },
                backgroundColor: '#FFFFFF',
                border: `1px solid ${brandColors.borderLight}`,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 2 }}>
                Official Direct Contact Channels
              </Typography>

              <Stack spacing={2}>
                {/* Phone Call */}
                <Box
                  component="a"
                  href={`tel:${BRAND.phoneRaw}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.8,
                    p: 1.6,
                    borderRadius: 2,
                    backgroundColor: brandColors.lightBlue,
                    textDecoration: 'none',
                    color: brandColors.deepNavy,
                    transition: 'all 0.2s ease',
                    border: '1px solid rgba(13, 117, 183, 0.15)',
                    '&:hover': {
                      backgroundColor: '#D0ECFB',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: brandColors.primaryBlue,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PhoneInTalkOutlinedIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block', fontWeight: 600 }}>
                      Call Us Directly
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 800, color: brandColors.deepNavy }}>
                      {BRAND.phone}
                    </Typography>
                  </Box>
                </Box>

                {/* WhatsApp Chat */}
                <Box
                  component="a"
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.8,
                    p: { xs: 1.4, sm: 1.6 },
                    minHeight: 56,
                    borderRadius: 2,
                    backgroundColor: '#E8F5E9',
                    textDecoration: 'none',
                    color: '#1B5E20',
                    transition: 'all 0.2s ease',
                    border: '1px solid rgba(46, 125, 50, 0.2)',
                    '&:hover': {
                      backgroundColor: '#C8E6C9',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: '#2E7D32',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#2E7D32', display: 'block', fontWeight: 600 }}>
                      WhatsApp Business Chat
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 800, color: '#1B5E20' }}>
                      {BRAND.phone}
                    </Typography>
                  </Box>
                </Box>

                {/* Email Direct */}
                <Box
                  component="a"
                  href={`mailto:${BRAND.email}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.8,
                    p: 1.6,
                    borderRadius: 2,
                    backgroundColor: '#F5F7FA',
                    textDecoration: 'none',
                    color: brandColors.deepNavy,
                    transition: 'all 0.2s ease',
                    border: `1px solid ${brandColors.borderLight}`,
                    '&:hover': {
                      backgroundColor: '#E2E8F0',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: brandColors.deepNavy,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailOutlinedIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box sx={{ overflow: 'hidden' }}>
                    <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block', fontWeight: 600 }}>
                      Official Email Address
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 800,
                        color: brandColors.deepNavy,
                        wordBreak: 'break-all',
                      }}
                    >
                      {BRAND.email}
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Card>
          </Grid>

          {/* Form Column */}
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 1 }}>
                Send a Message
              </Typography>
              <Typography variant="body2" sx={{ color: brandColors.slateMuted }}>
                Whether you are interested in our upcoming products or future business opportunities, we would be happy to
                hear from you.
              </Typography>
            </Box>
            <EnquiryForm initialCategory={selectedCategory} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

