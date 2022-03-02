import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import GroupIcon from '@mui/icons-material/Group';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import CardHeader from '@mui/material/CardHeader';

interface CardProps {
  card: {
    title: string
    description: string
    id: number
  }
}

const Icon = (id: number) => {
  switch (id) {
    case 1:
      return (<AssistantPhotoIcon sx={{ fontSize: 40 }} />)
    case 2:
      return (<ShowChartIcon sx={{ fontSize: 40 }} />)
    case 3:
      return (<ShuffleIcon sx={{ fontSize: 40 }} />)
    case 4:
      return (<GroupIcon sx={{ fontSize: 40 }} />)
    default:
      return
  }
}

export const MultiActionAreaCard = ({ card }: CardProps) => {
  return (
    <Grid item md={3}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardHeader avatar={Icon(card.id)} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h1">
            {card.title}
          </Typography>
          <Typography>
            {card.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}