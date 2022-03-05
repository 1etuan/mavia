import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

export const Introduce = () => {
  return (
    <Grid item xs={12} sm={12} md={12} sx={{ pb: 1, padding: '15px' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { md: '2fr 1fr' },
          backgroundColor: 'black',
          borderRadius: '15px',
        }}
      >
        <Paper elevation={0} sx={{ margin: '35px', backgroundColor: 'black' }}>
          <Typography
            gutterBottom
            component='p'
            variant='h5'
            fontSize={25}
            fontWeight='bold'
            color='#fff'
          >
            Join us on our mission to redefine gaming.
          </Typography>
          <ArrowLink
            as={ButtonLink}
            className='mt-3 mb-3 inline-flex items-center bg-primary-600 text-white'
            href='/'
          >
            View open positions
          </ArrowLink>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              p: 2,
              display: 'grid',
              gridTemplateColumns: { md: '1fr 1fr 1fr', sm: '3fr 2fr 2fr' },
              gap: 3,
            }}
          >
            <Paper elevation={0} sx={{ backgroundColor: 'black' }}>
              <Typography component='p' color='#fff'>
                <CheckIcon color='primary' /> 100% Remote Available
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{ backgroundColor: 'black', color: '#fff' }}
            >
              <Typography component='p' color='#fff'>
                <CheckIcon color='primary' /> Hiring Globally
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{ backgroundColor: 'black', color: '#fff' }}
            >
              <Typography component='p' color='#fff'>
                <CheckIcon color='primary' /> Competitive Salary
              </Typography>
            </Paper>
          </Grid>
        </Paper>
        <Paper
          elevation={0}
          sx={{ backgroundColor: 'black', borderRadius: '15px' }}
        >
          <CardMedia
            component='img'
            sx={{ width: '100%' }}
            image='https://skrice.com/home/hire.png'
            alt='img'
          />
        </Paper>
      </Box>
    </Grid>
  );
};
