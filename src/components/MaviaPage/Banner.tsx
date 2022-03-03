import Paper from '@mui/material/Paper';
import * as React from 'react';

export const BannerMaviaPage = () => {
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
        backgroundImage: `url(https://skrice.com/mavia/teaser.jpg)`,
        height: '50vh',
      }}
    ></Paper>
  );
};
