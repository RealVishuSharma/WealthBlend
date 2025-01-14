import React from 'react';
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

function Home() {
  return (
    <>
      <CssBaseline />
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

      <main>
        {/* Hero Section */}
        <div
          style={{
            paddingTop: '96px',
            paddingBottom: '64px',
            background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
            color: '#fff',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
                  Master Your Finances
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: '24px' }}>
                  Take control of your financial future with WealthBlend's comprehensive budgeting,
                  investing, and wealth management tools.
                </Typography>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
                      color: '#fff',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #ff6584, #6c63ff)',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#fff',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Add hero image here */}
              </Grid>
            </Grid>
          </Container>
        </div>

        {/* Features Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  padding: 3,
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Timeline fontSize="large" sx={{ color: '#6c63ff', marginBottom: '16px' }} />
                <Typography variant="h5" gutterBottom>
                  Budget Tracking
                </Typography>
                <Typography color="text.secondary">
                  Track your income and expenses with intuitive tools and visualizations.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  padding: 3,
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <School fontSize="large" sx={{ color: '#6c63ff', marginBottom: '16px' }} />
                <Typography variant="h5" gutterBottom>
                  Financial Education
                </Typography>
                <Typography color="text.secondary">
                  Learn investment strategies and financial management principles.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  padding: 3,
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <AccountBalanceWallet
                  fontSize="large"
                  sx={{ color: '#6c63ff', marginBottom: '16px' }}
                />
                <Typography variant="h5" gutterBottom>
                  Wealth Management
                </Typography>
                <Typography color="text.secondary">
                  Optimize your portfolio and plan for long-term financial growth.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Home;
