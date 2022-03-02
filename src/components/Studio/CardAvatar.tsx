import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
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
      <Card sx={{ height: '100%' }}>
        <CardHeader>{/* <NextImage src={card.url}></NextImage> */}</CardHeader>
        <CardContent>
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
