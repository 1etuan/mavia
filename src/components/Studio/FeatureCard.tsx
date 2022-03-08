import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import GroupIcon from '@mui/icons-material/Group';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ShuffleIcon from '@mui/icons-material/Shuffle';
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
      return <AssistantPhotoIcon sx={{ fontSize: 40 }} />;
    case 2:
      return <ShowChartIcon sx={{ fontSize: 40 }} />;
    case 3:
      return <ShuffleIcon sx={{ fontSize: 40 }} />;
    case 4:
      return <GroupIcon sx={{ fontSize: 40 }} />;
    case 5:
      return <ShuffleIcon sx={{ fontSize: 40 }} />;
    case 6:
      return <ShowChartIcon sx={{ fontSize: 40 }} />;

    default:
      return;
  }
};

export const FeaturedCard = ({ card }: CardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%' }}
        className='border border-gray-200 shadow-none'
      >
        <CardHeader avatar={Icon(card.id)} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h1'>
            {card.title}
          </Typography>
          <Typography>{card.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
