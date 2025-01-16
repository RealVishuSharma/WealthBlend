import React from 'react'
import {
    Typography,
    AppBar,
    Button,
    Toolbar,
  } from '@mui/material';
  import {
    AccountBalanceWallet,
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
              <a href="/signup" style={{ textDecoration: 'none', color: '#fff' }}>
                Sign up
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
              <a href="/Login">Login</a>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
)
}

export default Header
