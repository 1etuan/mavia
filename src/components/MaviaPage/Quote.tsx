import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export const QuoteMaviaPage = () => {
  return (
    <Grid item xs={12} sx={{ pb: 1, mt: 10 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { md: '1fr 3fr' },
          backgroundColor: 'black',
          borderRadius: '15px',
        }}
      >
        <Paper
          elevation={0}
          sx={{ backgroundColor: 'black', padding: '60px', marginLeft: '15px' }}
        >
          <CardMedia
            component='img'
            sx={{ width: '100%' }}
            image='https://skrice.com/mavia/quote.png'
            alt='img'
          />
        </Paper>
        <Paper
          elevation={0}
          sx={{ margin: '60px 30px', backgroundColor: 'black' }}
        >
          <Typography gutterBottom component='p' color='#fff'>
            “Mavia has the potential to lead the Blockchain Gaming space as the
            first mass-multiplayer strategy game with sustainable play-to-earn
            economics.”
          </Typography>
          <Typography
            gutterBottom
            component='p'
            fontSize={25}
            fontWeight='bold'
            color='#fff'
            sx={{ marginTop: '30px' }}
          >
            Eric Rivera, FazeClan
          </Typography>
        </Paper>
      </Box>
    </Grid>
  );
};
