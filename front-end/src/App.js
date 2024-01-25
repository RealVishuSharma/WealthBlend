import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';


// import './App.css';
// import useStyles from './App_styles';

function App() {

  // const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position='relative' className='shadow-lg fixed rounded'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>
            WealthBlend
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className= "mt-2 bg-zinc-300">
          <Container maxWidth="sm" >
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
              WealthBlend
            </Typography>
            <Typography variant='h6' align='center' color="textSecondary" paragraph>
              WealthBlend is One-Stop Solution for Managing Your Wealth, Budgeting Your Income, and Educating yourself on Investing your savings to get the best returns.
            </Typography>

            <div>
              <Grid container spacing={2} justifyContent='center' >

                <Grid item >
                  <Button variant="contained" color="primary">
                    Tips on Savings
                  </Button>
                </Grid>

                <Grid item >
                  <Button variant="outlined" color="primary">
                    Sign Up
                  </Button>
                </Grid>

              </Grid>
            </div>

          </Container>
        </div>
      </main>

    </>
  );
}

export default App;
