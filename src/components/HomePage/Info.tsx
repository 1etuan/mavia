/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { CardMedia, Grid, Paper, Typography, styled } from '@mui/material';

interface InfoHomePageProps {
  post: {
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    id: number;
    mobileDescription: string;
  };
}

const Image = ({ post }: InfoHomePageProps) => {
  return (
    <>
      <Paper elevation={0}>
        <CardMedia
          component='img'
          sx={{ width: '100%', borderRadius: 2 }}
          image={post.image}
          alt={post.imageLabel}
        />
      </Paper>
    </>
  );
};

const TextMD = ({ post }: InfoHomePageProps) => {
  return (
    <>
      <Paper elevation={0}>
        <Typography
          gutterBottom
          component='p'
          variant='h4'
          fontSize={40}
          fontWeight='bold'
        >
          {post.title}
        </Typography>
        <Typography variant='subtitle1' fontSize={18} paragraph>
          {post.description}
        </Typography>
      </Paper>
    </>
  );
};

const TextMobile = ({ post }: InfoHomePageProps) => {
  return (
    <>
      <Paper elevation={0}>
        <Typography
          gutterBottom
          component='p'
          variant='h4'
          fontSize={40}
          fontWeight='bold'
        >
          {post.title}
        </Typography>
        <Typography variant='subtitle1' fontSize={18} paragraph>
          {post.mobileDescription}
        </Typography>
      </Paper>
    </>
  );
};

export const InfoHomePage = (props: InfoHomePageProps) => {
  const { post } = props;

  return (
    <>
      <GridMD
        item
        md={12}
        key={post.id}
        sx={{
          p: 2,
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1fr' },
          gap: 5,
        }}
      >
        {post.id % 2 != 0 ? (
          <>
            <Image post={post} />
            <TextMD post={post} />
          </>
        ) : (
          <>
            <TextMD post={post} />
            <Image post={post} />
          </>
        )}
      </GridMD>
      <GridMobile
        xs={12}
        sm={12}
        key={post.id}
        sx={{
          p: 2,
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1fr' },
          gap: 5,
        }}
      >
        <Image post={post} />
        <TextMobile post={post} />
      </GridMobile>
    </>
  );
};

const GridMD = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down(900)]: {
    display: 'None',
  },
}));

const GridMobile = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up(900)]: {
    display: 'None',
  },
}));
