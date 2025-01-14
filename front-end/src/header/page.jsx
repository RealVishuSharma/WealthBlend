import React from 'react'
import {
    Typography,
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
  } from '@mui/material';
  import {
    PhotoCamera,
    AccountBalanceWallet,
    Timeline,
    School,
  } from '@mui/icons-material';

const Header = () => {
  return (
    <>
              <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AccountBalanceWallet fontSize="large" />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              WealthBlend
            </Typography>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button color="inherit">
              <a href="/login" style={{ textDecoration: 'none', color: '#fff' }}>
                Login
              </a>
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#fff',
                color: '#6c63ff',
                '&:hover': { backgroundColor: '#f0f0f0' },
              }}
            >
              <a href="/signup">Sign Up</a>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
)
}

export default Header
