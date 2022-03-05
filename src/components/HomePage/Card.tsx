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
    default:
      return;
  }
};

export const CardHomePage = ({ card }: CardProps) => {
  return (
    <Grid item xs={12} sm={6} md={3} sx={{ padding: '12px' }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'none',
          border: '1px solid rgb(229, 229, 229)',
        }}
      >
        <CardHeader avatar={Icon(card.id)} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant='h5'
            fontWeight='bold'
            component='h1'
          >
            {card.title}
          </Typography>
          <Typography>{card.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
