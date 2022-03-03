import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import {
  InfoHomePage,
  Introduce,
  BannerHomePage,
  CardHomePage,
} from '@/components/HomePage';

const cards = [
  {
    id: 1,
    title: 'Quality Over Everything',
    description:
      'We believe that focusing on details are what separates iconic games from the basic.',
  },
  {
    id: 2,
    title: 'Balanced Economics',
    description:
      'Our games are built to be able to scale to a mass number of users, both technically and economically.',
  },
  {
    id: 3,
    title: 'Cross Platform',
    description:
      'Our games are built to be played on both desktop web and mobile devices, giving a truly universal gaming experience.',
  },
  {
    id: 4,
    title: 'Community Owned',
    description:
      'The structure of our game mechanics are centered around the players, giving control to the community.',
  },
];

const posts = [
  {
    id: 1,
    description:
      'All of our game content is designed and developed from scratch, from conceptual designs to 3D character modeling and animations.',
    image: 'https://skrice.com/home/info-1.jpg',
    imageLabel: 'First-class Game Design and Development',
    title: 'First-class Game Design and Development',
  },
  {
    id: 2,
    description:
      'Engineering Infrastructure for Limitless PossibilitiesOur development team is not only investing resources into our games, but is also building long-term infrastructure for other Blockchain-based games.',
    image: 'https://skrice.com/home/info-2.jpg',
    imageLabel: 'Engineering Infrastructure for Limitless Possibilities',
    title: 'Engineering Infrastructure for Limitless Possibilities',
  },
  {
    id: 3,
    description:
      'Our games use economic models which we process and test using hundreds of simulations, ensuring the resilience and balance of all sectors of the ecosystem.',
    image: 'https://skrice.com/home/info-3.jpg',
    imageLabel: 'First-class Game Design and Development',
    title: 'First-class Game Design and Development',
  },
];

export default function HomePage() {
  return (
    <>
      <BannerHomePage />
      <Container
        disableGutters
        maxWidth='lg'
        component='main'
        sx={{ pt: 6, pb: 10 }}
      >
        <Typography variant='h4' align='center' fontWeight='bold' gutterBottom>
          Experience the future of gaming
        </Typography>
        <Typography variant='h5' fontSize={20} align='center' component='p'>
          We build games based upon fundamental values which we believe define
          the next generation of gaming.
        </Typography>
      </Container>

      <Container
        disableGutters
        maxWidth='lg'
        component='main'
        sx={{ pt: 6, pb: 10 }}
      >
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <CardHomePage key={index} card={card} />
          ))}
        </Grid>

        <Grid sx={{ flexGrow: 1, pt: 20 }}>
          {posts.map((post, index) => (
            <InfoHomePage key={index} post={post} />
          ))}
        </Grid>

        <Grid container sx={{ pt: 20, borderRadius: '10px' }}>
          <Introduce />
        </Grid>
      </Container>
    </>
  );
}
