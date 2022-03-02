/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  Container,
  Grid,
  Grow,
  styled,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

import FlexBox from '@/components/atoms/FlexBox';
import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';
import { FeaturedPost, Introduce } from '@/components/Studio';
import { MultiActionAreaCard } from '@/components/Studio/CardAvatar';
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
  {
    id: 5,
    title: 'Community Owned',
    description:
      'The structure of our game mechanics are centered around the players, giving control to the community.',
  },
  {
    id: 6,
    title: 'Community Owned',
    description:
      'The structure of our game mechanics are centered around the players, giving control to the community.',
  },
  {
    id: 7,
    title: 'Community Owned',
    description:
      'The structure of our game mechanics are centered around the players, giving control to the community.',
  },
  {
    id: 8,
    title: 'Community Owned',
    description:
      'The structure of our game mechanics are centered around the players, giving control to the community.',
  },
  {
    id: 9,
    title: 'Community Owned',
    description:
      'The structure of our game mechanics are centered around the players, giving control to the community.',
  },
  {
    id: 10,
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
function HomePage() {
  return (
    <>
      <Seo title='Studio' />
      <Container>
        <FlexBox className='justify-center text-center' mt={16}>
          <FlexBox flexDirection='column'>
            <Typography component='h1' className='mb-4 text-6xl'>
              Studio của chúng tôi
            </Typography>
            <Description>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              debitis ratione quasi vitae quidem rem repudiandae corrupti,
              exercitationem eaque officia nam iusto minima, dolorem odio
              dolores iure corporis, reprehenderit dolor!
            </Description>
            <Grow in timeout={1000}>
              <FlexBox mx='auto' mt={4} justifyContent='center'>
                <TransitionButton variant='primary' color='primary'>
                  Contact US
                </TransitionButton>
                <TransitionButton variant='outline' className='ml-2'>
                  <span>Open Position</span>
                  <RiArrowRightLine className='ml-2' />
                </TransitionButton>
              </FlexBox>
            </Grow>
          </FlexBox>
        </FlexBox>

        <Grow in timeout={1000}>
          <FlexBox flexDirection='column' className='my-16 auto-rows-fr'>
            <Grid container spacing={2}>
              <Grid item md={12} sm={12}>
                <img
                  src='/images/clone-1.jpeg'
                  alt='image'
                  className='h-[18rem] w-full rounded-xl object-cover'
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <img
                  src='/images/clone-1.jpeg'
                  alt='image'
                  className='h-[18rem] w-full rounded-xl object-cover'
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <img
                  src='/images/clone-1.jpeg'
                  alt='image'
                  className='h-[18rem] w-full rounded-xl object-cover'
                />
              </Grid>
              <Grid item md={4} sm={12}>
                <img
                  src='/images/clone-1.jpeg'
                  alt='image'
                  className='h-[18rem] w-full rounded-xl object-cover'
                />
              </Grid>
              <Grid item md={4} sm={12}>
                <img
                  src='/images/clone-1.jpeg'
                  alt='image'
                  className='h-[18rem] w-full rounded-xl object-cover'
                />
              </Grid>
              <Grid item md={4} sm={12}>
                <img
                  src='/images/clone-1.jpeg'
                  alt='image'
                  className='h-[18rem] w-full rounded-xl object-cover'
                />
              </Grid>
            </Grid>
          </FlexBox>
        </Grow>

        <FlexBox className=' grid grid-cols-3 gap-3 '>
          <Card variant='outlined'>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </Card>
          <Card variant='outlined'>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </Card>
          <Card variant='outlined'>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </Card>
          <Card variant='outlined'>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </Card>
          <Card variant='outlined'>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </Card>

          <Card variant='outlined'>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </CardContent>
          </Card>
        </FlexBox>
        <FlexBox
          className='w-100% justify-center bg-zinc-50 text-center'
          mt={16}
        >
          <FlexBox flexDirection='column'>
            <Typography component='h2' className='mb-4 text-6xl'>
              Core Team
            </Typography>
            <Description>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              debitis ratione quasi vitae quidem rem repudiandae corrupti
            </Description>
          </FlexBox>
        </FlexBox>

        <Container
          disableGutters
          maxWidth='lg'
          component='main'
          sx={{ pt: 6, pb: 10 }}
        >
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <MultiActionAreaCard key={index} card={card} />
            ))}
          </Grid>

          <Grid sx={{ flexGrow: 1, pt: 20 }}>
            {posts.map((post, index) => (
              <FeaturedPost key={index} post={post} />
            ))}
          </Grid>

          <Grid container sx={{ pt: 20, borderRadius: '10px' }}>
            <Introduce />
          </Grid>
        </Container>
      </Container>
    </>
  );
}

const Description = styled(Typography)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
}));

const TransitionButton = styled(Button)(() => ({
  transition: 'all .3s',
}));

export default HomePage;
