import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Footer from '../footer/page';
import Header from '../header/page';

const BudgetTracking = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({ description: '', amount: '', type: '' });

  const handleAddTransaction = () => {
    if (formData.description && formData.amount && formData.type) {
      setTransactions([...transactions, { ...formData, id: Date.now() }]);
      setFormData({ description: '', amount: '', type: '' });
    }
  };

  const calculateTotal = (type) =>
    transactions
      .filter((transaction) => transaction.type === type)
      .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  const totalIncome = calculateTotal('Income');
  const totalExpenses = calculateTotal('Expense');
  const totalSavings = totalIncome - totalExpenses;

  return (
    <>
    <Header/>
    <Box sx={{ backgroundColor: '#f4f7fb', minHeight: '100vh', py: 6 }}>
      {/* Hero Section */}
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
            Budget Tracker
          </Typography>
          <Typography variant="h6" gutterBottom>
            Take control of your finances by tracking your income and expenses.
          </Typography>
        </Container>
      </Box>

      {/* Budget Overview Section */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="text.primary"
          gutterBottom
        >
          Overview
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { label: 'Total Income', value: `₹${totalIncome.toFixed(2)}`, color: '#4caf50' },
            { label: 'Total Expenses', value: `₹${totalExpenses.toFixed(2)}`, color: '#f44336' },
            { label: 'Savings', value: `₹${totalSavings.toFixed(2)}`, color: '#2196f3' },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <Typography variant="h6" fontWeight="bold" color="text.secondary" gutterBottom>
                  {item.label}
                </Typography>
                <Typography variant="h4" fontWeight="bold" sx={{ color: item.color }}>
                  {item.value}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Add Transaction Section */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="text.primary"
          gutterBottom
        >
          Add Transaction
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={3}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Amount"
              type="number"
              variant="outlined"
              fullWidth
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Type (Income/Expense)"
              variant="outlined"
              fullWidth
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                height: '100%',
                backgroundColor: '#6c63ff',
                color: '#fff',
                '&:hover': { backgroundColor: '#ff6584' },
              }}
              onClick={handleAddTransaction}
            >
              Add Transaction
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Transaction History Section */}
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="text.primary"
          gutterBottom
        >
          Transaction History
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{`₹${parseFloat(transaction.amount).toFixed(2)}`}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>
                    {new Date(transaction.id).toLocaleDateString('en-IN')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>

    <Footer/>
   </>
  );
};

export default BudgetTracking;
