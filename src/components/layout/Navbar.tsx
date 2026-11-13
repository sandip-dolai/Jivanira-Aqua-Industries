'use client';

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import { brandColors } from '@/theme/colors';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const item = NAV_LINKS[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 } }}>
            {/* Brand Official Logo */}
            <Box
              onClick={() => handleScrollTo('hero')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                py: 0.5,
              }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="JIVANIRA - Pure Refreshment. A Better Tomorrow."
                sx={{
                  height: { xs: 40, sm: 46, md: 50 },
                  width: 'auto',
                  objectFit: 'contain',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', lg: 'flex' },
                justifyContent: 'center',
                gap: 0.5,
                mx: 2,
              }}
            >
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    sx={{
                      color: isActive ? brandColors.primaryBlue : brandColors.deepNavy,
                      fontWeight: isActive ? 800 : 500,
                      fontSize: '0.9rem',
                      px: 1.5,
                      py: 0.8,
                      position: 'relative',
                      '&:hover': {
                        backgroundColor: 'rgba(13, 117, 183, 0.06)',
                        color: brandColors.primaryBlue,
                      },
                      '&::after': isActive
                        ? {
                            content: '""',
                            position: 'absolute',
                            bottom: 6,
                            left: '20%',
                            right: '20%',
                            height: '2px',
                            backgroundColor: brandColors.primaryBlue,
                            borderRadius: '2px',
                          }
                        : undefined,
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Right Action CTA (Desktop) */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', ml: 1 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleScrollTo('partnership')}
                endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                sx={{
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  py: 1,
                  px: 2.2,
                  whiteSpace: 'nowrap',
                }}
              >
                Partner With Us
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: 'none' }, ml: 'auto' }}
            >
              <MenuIcon sx={{ color: brandColors.deepNavy, fontSize: 28 }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: 280, sm: 320 },
            p: 2.5,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
          <Box
            component="img"
            src="/images/logo.png"
            alt="JIVANIRA"
            sx={{ height: 40, width: 'auto', objectFit: 'contain', cursor: 'pointer' }} onClick={() => handleScrollTo('hero')}
          />
          <IconButton onClick={handleDrawerToggle} edge="end">
            <CloseIcon sx={{ color: brandColors.deepNavy }} />
          </IconButton>
        </Box>

        <List sx={{ p: 0, mb: 3 }}>
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => handleScrollTo(item.id)}
                  sx={{
                    borderRadius: 1.5,
                    backgroundColor: isActive ? brandColors.lightBlue : 'transparent',
                    color: isActive ? brandColors.primaryBlue : brandColors.deepNavy,
                    '&:hover': {
                      backgroundColor: brandColors.lightBlue,
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 800 : 500,
                      fontSize: '0.95rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mt: 'auto', pt: 2, borderTop: `1px solid ${brandColors.borderLight}` }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleScrollTo('partnership')}
            sx={{ py: 1.2, mb: 1.5 }}
          >
            Become a Partner
          </Button>
          <Typography variant="caption" sx={{ color: brandColors.slateMuted, display: 'block', textAlign: 'center' }}>
            Planned Launch: 2027 • West Bengal
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
