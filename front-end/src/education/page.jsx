import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import {
  School,
  Timeline,
  Calculate,
  MonetizationOn,
} from "@mui/icons-material";
import Header from "../header/page";
import Footer from "../footer/page";

const FinancialEducation = () => {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: "#f4f7fb", minHeight: "100vh", py: 6 }}>
        {/* Hero Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #6c63ff, #ff6584)",
            color: "#fff",
            py: 8,
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Financial Education Hub
              </Typography>
              <Typography variant="h6" gutterBottom>
                Learn the art of budgeting, investing, and building wealth with
                our expert resources.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: "inline-block" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 3,
                    backgroundColor: "#fff",
                    color: "#6c63ff",
                    "&:hover": { backgroundColor: "#ff6584", color: "#fff" },
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </Box>

        {/* Key Topics Section */}
        <Container sx={{ py: 6 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="text.primary"
            gutterBottom
          >
            Explore Financial Topics
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
          >
            Dive into various topics to master the skills needed for financial
            success.
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Budgeting Basics",
                description:
                  "Learn how to manage your income and expenses effectively.",
                icon: <Timeline fontSize="large" color="primary" />,
              },
              {
                title: "Investment Strategies",
                description:
                  "Explore safe and effective ways to grow your wealth.",
                icon: <MonetizationOn fontSize="large" color="primary" />,
              },
              {
                title: "Financial Calculators",
                description:
                  "Use tools to plan your savings, loans, and investments.",
                icon: <Calculate fontSize="large" color="primary" />,
              },
              {
                title: "Wealth Management",
                description:
                  "Understand techniques to optimize and protect your assets.",
                icon: <School fontSize="large" color="primary" />,
              },
            ].map((topic, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: "inline-block" }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 3,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Box sx={{ mr: 3 }}>{topic.icon}</Box>
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {topic.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {topic.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Interactive Tools Section */}
        <Box
          sx={{
            py: 8,
            background: "linear-gradient(135deg, #ff6584, #6c63ff)",
            color: "#fff",
          }}
        >
          <Container>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              gutterBottom
            >
              Interactive Tools
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              Use our financial calculators and simulations to take charge of
              your future.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {["Savings Calculator", "Loan Estimator"].map((tool, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        backgroundColor: "#fff",
                        color: "#6c63ff",
                        "&:hover": {
                          backgroundColor: "#ff6584",
                          color: "#fff",
                        },
                        py: 3,
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {tool}
                    </Button>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Call-to-Action Section */}
        <Box sx={{ py: 6, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color="text.primary"
              gutterBottom
            >
              Ready to Take the Next Step?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              Join thousands of users who are mastering their finances with
              WealthBlend.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: "inline-block" }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#6c63ff",
                  color: "#fff",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#ff6584", // Only change the color
                  },
                }}
              >
                Sign Up Today
              </Button>
            </motion.div>
          </motion.div>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default FinancialEducation;
