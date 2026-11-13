'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
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
        py: { xs: 8, md: 12 },
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
                      Location
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
                      Planned Launch
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: brandColors.deepNavy }}>
                      {BRAND.plannedLaunchYear} (Proposed Pre-establishment)
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Card>

            <Box
              sx={{
                p: 2.5,
                borderRadius: 2,
                backgroundColor: '#FFFFFF',
                border: `1px solid ${brandColors.borderLight}`,
              }}
            >
              <Box sx={{ display: 'flex', gap: 1.2 }}>
                <InfoOutlinedIcon sx={{ color: brandColors.primaryBlue, fontSize: 20, mt: 0.2 }} />
                <Typography variant="caption" sx={{ color: brandColors.slateMuted, lineHeight: 1.6 }}>
                  <strong>Channel Activation Notice:</strong> Official email, phone number and WhatsApp details will be
                  added before website publication and commercial launch in 2027.
                </Typography>
              </Box>
            </Box>
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
