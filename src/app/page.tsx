'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import QualitySection from '@/components/sections/QualitySection';
import SustainabilitySection from '@/components/sections/SustainabilitySection';
import PartnershipSection from '@/components/sections/PartnershipSection';
import ContactSection from '@/components/sections/ContactSection';

export default function SinglePageHome() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Distribution Partnership');

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* 1. Hero Section (#hero) */}
      <HeroSection />

      {/* 2. About Us Section (#about) */}
      <AboutSection />

      {/* 3. Products Section (#products) */}
      <ProductsSection />

      {/* 4. Our Quality Section (#quality) */}
      <QualitySection />

      {/* 5. Sustainability Section (#sustainability) */}
      <SustainabilitySection />

      {/* 6. Business Partnership Section (#partnership) */}
      <PartnershipSection onSelectCategory={(cat) => setSelectedCategory(cat)} />

      {/* 7. Contact Us & B2B Enquiry Section (#contact) */}
      <ContactSection selectedCategory={selectedCategory} />
    </Box>
  );
}
