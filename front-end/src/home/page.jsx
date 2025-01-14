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
  Avatar,
  Box,
  TextField,
} from '@mui/material';
import {
  PhotoCamera,
  AccountBalanceWallet,
  Timeline,
  School,
} from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../footer/page';
import Header from '../header/page';

function Home() {
  return (
    <>
      <CssBaseline />
      <Header/>
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
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Key Features
        </Typography>
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

        {/* CTA Section */}
       
       {/* Video Tutorial Section */}
      <Box sx={{ py: 8, background: '#eef2f3' }}>
        <Container textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Learn How It Works
          </Typography>
          <Box sx={{ mt: 4 }}>
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/sample-video"
              title="WealthBlend Introduction"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ background: '#f9f9f9', py: 8 }}>
        <Container>
          <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
            What Our Users Say
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: 'Jane Doe',
                feedback: 'WealthBlend transformed the way I manage my finances!',
                avatar: '/path-to-avatar1.jpg',
              },
              {
                name: 'John Smith',
                feedback: 'A must-have tool for anyone serious about budgeting and investing.',
                avatar: '/path-to-avatar2.jpg',
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Avatar src={testimonial.avatar} alt={testimonial.name} />
                    <Typography variant="h6">{testimonial.name}</Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ mt: 2 }}>
                    {testimonial.feedback}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

       {/* FAQ Section */}
       <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              question: 'How does WealthBlend help me manage my finances?',
              answer: 'We provide tools for budgeting, investing, and tracking your financial goals.',
            },
            {
              question: 'Is my data secure?',
              answer: 'Yes, we use industry-standard encryption to keep your data safe.',
            },
            {
              question: 'Can I try WealthBlend for free?',
              answer: 'Yes, we offer a free trial for all new users.',
            },
          ].map((faq, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  p: 3,
                  transition: '0.3s',
                  '&:hover': { boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' },
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {faq.question}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {faq.answer}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section
      <Box
        sx={{
          background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
          color: '#fff',
          py: 6,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Join thousands of users managing their finances effectively with WealthBlend.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: '#fff',
              color: '#6c63ff',
              '&:hover': { background: '#ff6584', color: '#fff' },
              px: 4,
              py: 1.5,
              borderRadius: '50px',
            }}
          >
            Sign Up Now
          </Button>
        </Container>
      </Box> */}

                  {/* Newsletter Subscription Section */}
                  <Box sx={{ py: 8, background: '#fff' }}>
        <Container>
          <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
            Stay Updated
          </Typography>
          <Typography textAlign="center" sx={{ mb: 4 }}>
            Subscribe to our newsletter for the latest tips and updates.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              sx={{ width: '300px', mr: 2 }}
            />
            <Button
              variant="contained"
              sx={{
                background: '#6c63ff',
                color: '#fff',
                '&:hover': { background: '#ff6584' },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Container>
      </Box>

      </main>

      <Footer/>
    </>
  );
}

export default Home;
