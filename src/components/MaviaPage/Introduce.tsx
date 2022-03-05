import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

export const IntroduceMaviaPage = () => {
  return (
    <Container
      disableGutters
      maxWidth='lg'
      component='main'
      sx={{ pb: 10, px: 2 }}
    >
      <Typography variant='h4' align='center' fontWeight='bold' gutterBottom>
        Introducing Heroes of Mavia
      </Typography>
      <Typography
        variant='h5'
        fontSize={20}
        align='center'
        component='p'
        gutterBottom
      >
        Mavia is a multiplayer strategy game based on the blockchain, allowing
        players to build bases and armies while battling other players for
        resources and RUBY.
      </Typography>
      <div className='mt-3 flex justify-center'>
        <ArrowLink
          as={ButtonLink}
          className='mt-3 mb-3 inline-flex items-center bg-primary-600 text-white'
          href='/'
        >
          Visit Website
        </ArrowLink>
      </div>
    </Container>
  );
};
