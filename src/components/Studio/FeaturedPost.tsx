/* eslint-disable jsx-a11y/alt-text */
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface FeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    id: number;
  };
}

const Image = ({ post }: FeaturedPostProps) => {
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

const Text = ({ post }: FeaturedPostProps) => {
  return (
    <>
      <Paper elevation={0} sx={{ margin: '40px' }}>
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

export const FeaturedPost = (props: FeaturedPostProps) => {
  const { post } = props;

  return (
    <>
      <Grid item xs={12} key={post.id} sx={{ pb: 1 }}>
        <Box
          sx={{
            p: 2,
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gap: 2,
          }}
        >
          {post.id % 2 != 0 ? (
            <>
              <Image post={post} />
              <Text post={post} />
            </>
          ) : (
            <>
              <Text post={post} />
              <Image post={post} />
            </>
          )}
        </Box>
      </Grid>
    </>
  );
};
