/* eslint-disable jsx-a11y/alt-text */
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

interface InfoMaviaPageProps {
  info: {
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    id: number;
  };
}

const Image = ({ info }: InfoMaviaPageProps) => {
  return (
    <>
      <Paper elevation={0}>
        <CardMedia
          component='img'
          sx={{ width: '100%', borderRadius: 2 }}
          image={info.image}
          alt={info.imageLabel}
        />
      </Paper>
    </>
  );
};

const Text = ({ info }: InfoMaviaPageProps) => {
  return (
    <>
      <Paper elevation={0} sx={{ pb: 20, margin: '40px' }}>
        <Typography
          gutterBottom
          component='p'
          variant='h4'
          fontSize={40}
          fontWeight='bold'
        >
          {info.title}
        </Typography>
        <Typography variant='subtitle1' fontSize={18} paragraph>
          {info.description}
        </Typography>
        <ArrowLink
          as={ButtonLink}
          variant='light'
          className='inline-flex items-center'
          href='/'
        >
          Learn more
        </ArrowLink>
      </Paper>
    </>
  );
};

export const InfoMaviaPage = (props: InfoMaviaPageProps) => {
  const { info } = props;

  return (
    <>
      <Grid item xs={12} key={info.id} sx={{ pb: 1 }}>
        <Box
          sx={{
            p: 2,
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gap: 2,
          }}
        >
          {info.id % 2 != 0 ? (
            <>
              <Image info={info} />
              <Text info={info} />
            </>
          ) : (
            <>
              <Text info={info} />
              <Image info={info} />
            </>
          )}
        </Box>
      </Grid>
    </>
  );
};
