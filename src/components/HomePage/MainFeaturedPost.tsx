import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const MainFeaturedPost = () => {
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
        height: "60vh"
      }}
    >
      {<img style={{ display: 'none' }} src="https://skrice.com/vn/home/teaser.jpg" alt="img" />}
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
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 15 },
              pr: { md: '10vh' },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" fontWeight="bold" gutterBottom>
              We Create Disruptive Blockchain Games
            </Typography>
            <Typography variant="h5" fontSize={21} color="inherit">
              Skrice is a game design and development studio with a mission to bring mass-adoption of blockchain technology through player-owned digital worlds.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}