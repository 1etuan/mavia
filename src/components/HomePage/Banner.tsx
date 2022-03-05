import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export const BannerHomePage = () => {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(https://skrice.com/vn/home/teaser.jpg)`,
        height: '60vh',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            position: 'relative',
            padding: '60px',
            maxHeight: '60vh',
            width: '60vw',
          }}
        >
          <Typography
            component='h1'
            variant='h3'
            color='inherit'
            fontWeight='bold'
            gutterBottom
          >
            We Create Disruptive Blockchain Games
          </Typography>
          <Typography variant='h5' fontSize={21} color='inherit'>
            Skrice is a game design and development studio with a mission to
            bring mass-adoption of blockchain technology through player-owned
            digital worlds.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
