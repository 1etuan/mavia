import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import CardHeader from '@mui/material/CardHeader';

export type CardProps = {
  title: string
  description: string
};

export const MultiActionAreaCard = ({ title, description }: CardProps) => {
  return (
    <Grid item md={3}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardHeader
          avatar={
            <AssistantPhotoIcon sx={{ fontSize: 40 }} />
          }
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h1">
            {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}