import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface FeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    id: number
  };
}

export const FeaturedPost = (props: FeaturedPostProps) => {
  const { post } = props

  return (
    <Grid item xs={12} md={12} sx={{ pb: 10 }}>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: "50%", borderRadius: 2, order: post.id % 2 == 0 ? 1 : 0 }}
          image={post.image}
          alt={post.imageLabel}
        />
        <CardContent sx={{ margin: "40px" }}>
          <Typography gutterBottom component="p" variant="h4" fontSize={40} fontWeight="bold">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" fontSize={18} paragraph>
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}