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
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from '@/components/common/SectionHeader';
import BottleVisual from '@/components/common/BottleVisual';
import { PLANNED_PRODUCTS, FUTURE_PRODUCTS } from '@/lib/constants';
import { brandColors } from '@/theme/colors';

const USE_CASE_ICONS: Record<string, React.ReactElement> = {
  'Travel & Commute': <DirectionsCarOutlinedIcon sx={{ fontSize: 15 }} />,
  'Outdoor Activities': <TerrainOutlinedIcon sx={{ fontSize: 15 }} />,
  'Daily Personal Use': <PersonOutlineIcon sx={{ fontSize: 15 }} />,
  'Meetings & Events': <GroupsOutlinedIcon sx={{ fontSize: 15 }} />,
  'Home Hydration': <HomeOutlinedIcon sx={{ fontSize: 15 }} />,
  'Workplace Desks': <BusinessCenterOutlinedIcon sx={{ fontSize: 15 }} />,
  'Restaurants & Dining': <RestaurantOutlinedIcon sx={{ fontSize: 15 }} />,
  'Fitness & Gym': <FitnessCenterOutlinedIcon sx={{ fontSize: 15 }} />,
};

export default function ProductsSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="products"
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
          overline="Product Portfolio"
          title="Discover the JIVANIRA Product Range"
          subtitle="JIVANIRA plans to introduce convenient packaged drinking water products designed for everyday hydration."
        />

        {/* Lifestyle Hydration Feature Banner */}
        <Card
          sx={{
            mb: { xs: 6, md: 8 },
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            border: `1px solid ${brandColors.borderLight}`,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/lifestyle-hydration.jpg"
                alt="JIVANIRA Everyday Hydration"
                sx={{
                  width: '100%',
                  height: { xs: 260, md: 360 },
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: { xs: 3, md: 5 } }}>
                <Chip
                  label="Pure Everyday Hydration"
                  size="small"
                  color="primary"
                  sx={{ fontWeight: 700, mb: 1.5 }}
                />
                <Typography variant="h4" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 1.5 }}>
                  Pure Refreshment for Modern Lifestyles
                </Typography>
                <Typography variant="body1" sx={{ color: brandColors.slateMuted, lineHeight: 1.8, mb: 3 }}>
                  Whether you are traveling on the highway, sitting at your workplace desk, or enjoying family meals at home,
                  JIVANIRA bottled water is engineered for consistent purity, clean mineral balance, and ergonomic portability.
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => scrollTo('quality')}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ fontWeight: 600 }}
                >
                  See How We Protect Quality
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* Primary Planned Lineup */}
        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }} justifyContent="center">
          {PLANNED_PRODUCTS.map((prod) => (
            <Grid item xs={12} md={6} key={prod.id}>
              <Card
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  backgroundColor: '#FFFFFF',
                  border: `1px solid ${brandColors.borderLight}`,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={prod.status}
                    color="primary"
                    size="small"
                    sx={{ fontWeight: 700, fontSize: '0.75rem' }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: brandColors.primaryBlue }}>
                    {prod.volume}
                  </Typography>
                </Box>

                <Box sx={{ my: 2 }}>
                  <BottleVisual volume={prod.volume} height={320} />
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 1 }}>
                  {prod.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: brandColors.primaryBlue, fontWeight: 600, mb: 2 }}>
                  {prod.tagline}
                </Typography>
                <Typography variant="body1" sx={{ color: brandColors.slateMuted, lineHeight: 1.75, mb: 3 }}>
                  {prod.description}
                </Typography>

                <Box sx={{ mt: 'auto', pt: 2, borderTop: `1px solid ${brandColors.borderLight}` }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 1.5 }}>
                    Intended Usage & Form Factors:
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {prod.useCases.map((uc) => (
                      <Chip
                        key={uc}
                        label={uc}
                        size="small"
                        icon={USE_CASE_ICONS[uc] || <DirectionsCarOutlinedIcon sx={{ fontSize: 15 }} />}
                        sx={{
                          fontSize: '0.8rem',
                          backgroundColor: brandColors.lightBlue,
                          color: brandColors.deepNavy,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Future Product Possibilities */}
        <Box
          sx={{
            p: { xs: 3.5, md: 4.5 },
            backgroundColor: '#FFFFFF',
            borderRadius: 3,
            border: `1px solid ${brandColors.borderLight}`,
            mb: 4,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, color: brandColors.deepNavy, mb: 1 }}>
            Future Product Development
          </Typography>
          <Typography variant="body2" sx={{ color: brandColors.slateMuted, mb: 3 }}>
            Depending on customer demand and business development, additional packaging formats may be introduced:
          </Typography>

          <Grid container spacing={2.5}>
            {FUTURE_PRODUCTS.map((item) => (
              <Grid item xs={12} sm={4} key={item.volume}>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    backgroundColor: brandColors.lightBlue,
                    border: `1px solid rgba(13, 117, 183, 0.15)`,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: brandColors.primaryBlue }}>
                    {item.volume}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: brandColors.deepNavy, mb: 0.5 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Regulatory Notice Banner */}
        <Box
          sx={{
            p: 3,
            borderRadius: 2.5,
            backgroundColor: brandColors.lightBlue,
            border: `1px solid rgba(13, 117, 183, 0.25)`,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
            <InfoOutlinedIcon sx={{ color: brandColors.primaryBlue, fontSize: 24, mt: 0.2 }} />
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: brandColors.deepNavy }}>
                Product Information Notice
              </Typography>
              <Typography variant="caption" sx={{ color: brandColors.deepNavy, display: 'block', lineHeight: 1.5 }}>
                Final product specifications, packaging materials, labelling, pricing and availability will be
                communicated after product development and regulatory compliance.
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => scrollTo('partnership')}
            endIcon={<ArrowForwardIcon />}
            sx={{ whiteSpace: 'nowrap', alignSelf: { xs: 'stretch', sm: 'center' } }}
          >
            Inquire for Supply
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

