import React from 'react';
import { Box, Typography, Grid, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
        color: '#fff',
        py: 8,
        px: 4,
      }}
    >
      {/* Logo and Tagline Section */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 6,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            textShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
            letterSpacing: '2px',
          }}
        >
          WealthBlend
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontStyle: 'italic',
            mt: 2,
            color: '#f9f9f9',
            textShadow: '0px 3px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          Empowering your financial journey with innovative solutions.
        </Typography>
      </Box>

      {/* Links and Social Media */}
      <Grid container spacing={6} justifyContent="center">
        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              textAlign: 'center',
            }}
          >
            Explore
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Link href="/" underline="hover" color="inherit" sx={{ fontSize: '16px', fontWeight: 500 }}>
              Home
            </Link>
            <Link href="/about" underline="hover" color="inherit" sx={{ fontSize: '16px', fontWeight: 500 }}>
              About Us
            </Link>
            <Link href="/services" underline="hover" color="inherit" sx={{ fontSize: '16px', fontWeight: 500 }}>
              Services
            </Link>
            <Link href="/contact" underline="hover" color="inherit" sx={{ fontSize: '16px', fontWeight: 500 }}>
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              textAlign: 'center',
            }}
          >
            Connect With Us
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{
                color: '#fff',
                '&:hover': {
                  color: '#ff6584',
                  transform: 'scale(1.2)',
                },
              }}
            >
              <Facebook fontSize="large" />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{
                color: '#fff',
                '&:hover': {
                  color: '#6c63ff',
                  transform: 'scale(1.2)',
                },
              }}
            >
              <Twitter fontSize="large" />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{
                color: '#fff',
                '&:hover': {
                  color: '#ff6584',
                  transform: 'scale(1.2)',
                },
              }}
            >
              <Instagram fontSize="large" />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{
                color: '#fff',
                '&:hover': {
                  color: '#6c63ff',
                  transform: 'scale(1.2)',
                },
              }}
            >
              <LinkedIn fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider
        sx={{
          my: 6,
          borderColor: 'rgba(255, 255, 255, 0.4)',
        }}
      />

      {/* Bottom Bar */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          © {new Date().getFullYear()} <b>WealthBlend</b>. All Rights Reserved.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          Designed with passion and precision to empower your financial goals.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
