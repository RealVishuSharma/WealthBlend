import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Link,
  InputAdornment,
} from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6c63ff', // Vibrant purple
    },
    secondary: {
      main: '#ff6584', // Pink accent
    },
    background: {
      default: '#eef2f3',
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400,
      color: '#555',
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
          padding: '12px 20px',
          borderRadius: 50,
          transition: 'background 0.3s ease, transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
          borderRadius: 20,
        },
      },
    },
  },
});

const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
          py: 6,
          px: 2,
        }}
      >
        <Container maxWidth="sm">
          <Card>
            <CardContent sx={{ padding: 5 }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Welcome Back
                </Typography>
                <Typography variant="body1">
                  Sign in to continue to your dashboard
                </Typography>
              </Box>

              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Email"
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
                    color: '#fff',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ff6584, #6c63ff)',
                    },
                  }}
                >
                  Sign In
                </Button>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Link
                    href="#"
                    underline="hover"
                    sx={{
                      color: '#6c63ff',
                      fontWeight: 'bold',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Forgot password?
                  </Link>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Don't have an account?{' '}
                    <Link
                      href="/signup"
                      underline="hover"
                      sx={{
                        fontWeight: 'bold',
                        color: '#ff6584',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Sign up
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
