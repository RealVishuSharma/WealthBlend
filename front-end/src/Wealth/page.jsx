import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  TextField,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Footer from '../footer/page';
import Header from '../header/page';

const WealthManagement = () => {
  const portfolioData = [
    { name: 'Stocks', value: 45, color: '#6c63ff' },
    { name: 'Bonds', value: 25, color: '#ff6584' },
    { name: 'Real Estate', value: 15, color: '#4caf50' },
    { name: 'Cash', value: 10, color: '#2196f3' },
    { name: 'Others', value: 5, color: '#f44336' },
  ];

  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: '#f4f7fb', minHeight: '100vh', py: 6 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
              color: '#fff',
              py: 8,
              textAlign: 'center',
            }}
          >
            <Container maxWidth="md">
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Wealth Management
              </Typography>
              <Typography variant="h6">
                Empower your financial future with smart wealth management solutions.
              </Typography>
            </Container>
          </Box>
        </motion.div>

        {/* Investment Options Section */}
        <Container sx={{ py: 6 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="text.primary"
            gutterBottom
          >
            Investment Options
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { title: 'Stocks', description: 'High growth potential.', color: '#6c63ff' },
              { title: 'Bonds', description: 'Stable and secure returns.', color: '#ff6584' },
              { title: 'Real Estate', description: 'Tangible asset investment.', color: '#4caf50' },
              { title: 'Mutual Funds', description: 'Diversified portfolio.', color: '#2196f3' },
            ].map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      backgroundColor: item.color,
                      color: '#fff',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Financial Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Container sx={{ py: 6 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              color="text.primary"
              gutterBottom
            >
              Set Your Financial Goals
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={4}>
                <TextField label="Goal Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField label="Target Amount" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField label="Time Frame (Months)" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    height: '100%',
                    backgroundColor: '#6c63ff',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#ff6584' },
                  }}
                >
                  Set Goal
                </Button>
              </Grid>
            </Grid>
          </Container>
        </motion.div>

        {/* Portfolio Overview Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Container sx={{ py: 6 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              color="text.primary"
              gutterBottom
            >
              Portfolio Overview
            </Typography>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 300,
              }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={portfolioData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label={(entry) => `${entry.name}: ${entry.value}%`}
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Container>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
              color: '#fff',
              py: 6,
              textAlign: 'center',
            }}
          >
            <Container maxWidth="md">
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Ready to Take Control of Your Wealth?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Start managing your wealth smarter and achieving your financial goals today.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#6c63ff',
                  mt: 3,
                  '&:hover': {
                    backgroundColor: '#ff6584',
                    color: '#fff',
                  },
                }}
              >
                Learn More
              </Button>
            </Container>
          </Box>
        </motion.div>
      </Box>
      <Footer />
    </>
  );
};

export default WealthManagement;
