import React from 'react';
import {
  Typography,
  Button,
  Card,
  CssBaseline,
  Grid,
  Container,
  Avatar,
  Box,
  TextField,
} from '@mui/material';
import {
  AccountBalanceWallet,
  Timeline,
  School,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Footer from '../footer/page';
import Header from '../header/page';

function Home() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
                <Typography
                  component={motion.div}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  variant="h2"
                  sx={{ fontWeight: 'bold', marginBottom: '16px' }}
                >
                  Master Your Finances
                </Typography>
                <Typography
                  component={motion.div}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  variant="h6"
                  sx={{ marginBottom: '24px' }}
                >
                  Take control of your financial future with WealthBlend's comprehensive budgeting,
                  investing, and wealth management tools.
                </Typography>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'flex', gap: '16px' }}
                >
                  <motion.div variants={buttonVariants} whileHover="hover">
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
                  </motion.div>
                  <motion.div variants={buttonVariants} whileHover="hover">
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
                  </motion.div>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </motion.div>

        {/* Features Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'Budget Tracking',
                description: 'Track your income and expenses with intuitive tools and visualizations.',
                icon: <Timeline fontSize="large" sx={{ color: '#6c63ff', marginBottom: '16px' }} />,
                link: '/budget',
              },
              {
                title: 'Financial Education',
                description: 'Learn investment strategies and financial management principles.',
                icon: <School fontSize="large" sx={{ color: '#6c63ff', marginBottom: '16px' }} />,
                link: '/education',
              },
              {
                title: 'Wealth Management',
                description: 'Optimize your portfolio and plan for long-term financial growth.',
                icon: (
                  <AccountBalanceWallet
                    fontSize="large"
                    sx={{ color: '#6c63ff', marginBottom: '16px' }}
                  />
                ),
                link: '/wealth',
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href={feature.link}>
                    <Card
                      sx={{
                        padding: 3,
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                        '&:hover': {
                          boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
                        },
                      }}
                    >
                      {feature.icon}
                      <Typography variant="h5" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography color="text.secondary">{feature.description}</Typography>
                    </Card>
                  </a>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Additional sections remain unchanged */}
 {/* Video Tutorial Section */}
 <Box sx={{ py: 8, background: '#eef2f3' }}>
          <Container textAlign="center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Learn How It Works
              </Typography>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </Container>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ background: '#f9f9f9', py: 8 }}>
          <Container>
            <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
              What Our Users Say
            </Typography>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
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
                    <motion.div variants={fadeIn}>
                      <Card sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                          <Avatar src={testimonial.avatar} alt={testimonial.name} />
                          <Typography variant="h6">{testimonial.name}</Typography>
                        </Box>
                        <Typography color="text.secondary" sx={{ mt: 2 }}>
                          {testimonial.feedback}
                        </Typography>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
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
                  <motion.div variants={fadeIn}>
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
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>

        {/* Newsletter Subscription Section */}
        <Box sx={{ py: 8, background: '#fff' }}>
          <Container>
            <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
              Stay Updated
            </Typography>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </Container>
        </Box>

      </main>
      <Footer />
    </>
  );
}

export default Home;
 