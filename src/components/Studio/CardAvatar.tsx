import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface CardProps {
  card: {
    title: string;
    url: string;
    description: string;
    id: number;
  };
}

export const MultiActionAreaCard = ({ card }: CardProps) => {
  return (
    <Grid item columns={40}>
      <Card
        sx={{ height: '100%' }}
        className='border border-gray-200 shadow-none'
      >
        <CardMedia
          component='img'
          className='gap-3 object-scale-down'
          height='90'
          image={card.url}
        />
        <CardContent className=''>
          <Typography
            gutterBottom
            variant='subtitle1'
            className='font-semibold'
          >
            {card.title}
          </Typography>
          <Typography>{card.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
