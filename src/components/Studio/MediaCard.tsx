import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import FlexBox from '../atoms/FlexBox';

interface CardProps {
  card: {
    img: string;
    title: string;
    description: string;
    link: string;
  };
}

export const MediaCard = ({ card }: CardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <FlexBox>
        <CardMedia component='img' height='140' image={card.img} />
      </FlexBox>

      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {card.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {card.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={card.link} size='small'>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export const AvatarCard = ({ card }: CardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <FlexBox>
        <CardMedia component='img' height='140' image={card.img} />
      </FlexBox>

      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {card.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {card.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={card.link} size='small'>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
