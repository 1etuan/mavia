import DiamondIcon from '@mui/icons-material/Diamond';
import FortIcon from '@mui/icons-material/Fort';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface CardProps {
  card: {
    title: string;
    description: string;
    id: number;
  };
}

const Icon = (id: number) => {
  switch (id) {
    case 1:
      return <SportsEsportsIcon sx={{ fontSize: 40 }} />;
    case 2:
      return <FortIcon sx={{ fontSize: 40 }} />;
    case 3:
      return <DiamondIcon sx={{ fontSize: 40 }} />;
    default:
      return;
  }
};

export const CardMaviaPage = ({ card }: CardProps) => {
  return (
    <Grid item md={4}>
      <Card className='border border-gray-200 shadow-none' sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardHeader avatar={Icon(card.id)} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant='h5'
            component='h1'
            fontWeight='bold'
          >
            {card.title}
          </Typography>
          <Typography>{card.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
