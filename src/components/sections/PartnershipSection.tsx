'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SectionHeader from '@/components/common/SectionHeader';
import { PARTNERSHIP_CATEGORIES } from '@/lib/constants';
import { brandColors } from '@/theme/colors';

interface PartnershipSectionProps {
  onSelectCategory?: (category: string) => void;
}

export default function PartnershipSection({ onSelectCategory }: PartnershipSectionProps) {
  const categoryIcons = [
    <LocalShippingOutlinedIcon key="1" sx={{ fontSize: 34, color: brandColors.primaryBlue }} />,
    <StorefrontOutlinedIcon key="2" sx={{ fontSize: 34, color: brandColors.primaryBlue }} />,
    <WarehouseOutlinedIcon key="3" sx={{ fontSize: 34, color: brandColors.primaryBlue }} />,
    <CorporateFareOutlinedIcon key="4" sx={{ fontSize: 34, color: brandColors.primaryBlue }} />,
  ];

  const targetItems = [
    { label: 'Retailers & Grocery Stores', icon: <StoreOutlinedIcon sx={{ color: '#64B5F6', fontSize: 22 }} /> },
    { label: 'Wholesale Suppliers', icon: <WarehouseOutlinedIcon sx={{ color: '#64B5F6', fontSize: 22 }} /> },
    { label: 'Regional Distributors', icon: <LocalShippingOutlinedIcon sx={{ color: '#64B5F6', fontSize: 22 }} /> },
    { label: 'Restaurants and Hotels', icon: <HotelOutlinedIcon sx={{ color: '#64B5F6', fontSize: 22 }} /> },
    { label: 'Caterers & Event Organisers', icon: <CelebrationOutlinedIcon sx={{ color: '#64B5F6', fontSize: 22 }} /> },
    { label: 'Institutional Buyers', icon: <ApartmentOutlinedIcon sx={{ color: '#64B5F6', fontSize: 22 }} /> },
  ];

  const handleSelectTier = (categoryValue: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryValue);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="partnership"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        scrollMarginTop: 80,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <SectionHeader
          overline="Business Partnership"
          title="Become a JIVANIRA Business Partner"
          subtitle="We aim to establish a dependable distribution network to bring JIVANIRA products closer to consumers."
        />

        {/* Commercial Logistics Showcase Banner */}
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
                  label="Commercial Expansion"
                  size="small"
                  color="primary"
                  sx={{ fontWeight: 700, mb: 1.5 }}
                />
                <Typography variant="h4" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 2 }}>
                  Grow With JIVANIRA
                </Typography>
                <Typography variant="body1" sx={{ color: brandColors.deepNavy, lineHeight: 1.8, mb: 2.5 }}>
                  We aim to build a strong distribution network through long-term relationships with local retailers,
                  distributors and institutional customers. We welcome future enquiries from businesses interested in
                  securing reliable, high-volume bottled water supplies.
                </Typography>
                <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block' }}>
                  Partnership availability will be subject to commercial launch in 2027 and operational readiness.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src="/images/logistics-distribution.jpg"
                  alt="JIVANIRA Commercial Distribution & Logistics"
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
                    Commercial Logistics & Regional Distribution Vision
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* 4 Partnership Tiers */}
        <Grid container spacing={3.5} sx={{ mb: { xs: 6, md: 8 } }}>
          {PARTNERSHIP_CATEGORIES.map((cat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={cat.id}>
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
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    backgroundColor: brandColors.lightBlue,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {categoryIcons[idx]}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 1 }}>
                  {cat.title}
                </Typography>
                <Typography variant="body2" sx={{ color: brandColors.slateMuted, lineHeight: 1.6, mb: 2.5 }}>
                  {cat.description}
                </Typography>

                <Box sx={{ mt: 'auto' }}>
                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    onClick={() => handleSelectTier(cat.categoryValue)}
                    endIcon={<ArrowDownwardIcon sx={{ fontSize: 16 }} />}
                    sx={{ fontSize: '0.8rem', py: 0.8 }}
                  >
                    Submit Enquiry
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Welcome Enquiries Grid */}
        <Box
          sx={{
            p: { xs: 3.5, md: 4.5 },
            backgroundColor: brandColors.deepNavy,
            color: '#FFFFFF',
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 800, color: '#FFFFFF', mb: 1, textAlign: { xs: 'left', md: 'center' } }}
          >
            We Welcome Future Enquiries From
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.75)',
              mb: 3.5,
              textAlign: { xs: 'left', md: 'center' },
            }}
          >
            Building strong regional distribution and wholesale channels across West Bengal.
          </Typography>

          <Grid container spacing={2}>
            {targetItems.map((target) => (
              <Grid item xs={12} sm={6} md={4} key={target.label}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  {target.icon}
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#FFFFFF' }}>
                    {target.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
