/* eslint-disable unused-imports/no-unused-vars */
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
import { MultiActionAreaCard } from '@/components/Studio/CardAvatar';
const cards = [
  {
    url: '/images/avatar.jpeg',
    title: 'Quality Over Everything',
    description: 'Game Dev Lead',
  },
  {
    url: '/images/avatar.jpeg',
    title: 'Balanced Economics',
    description: 'Game Dev Lead',
  },
  {
    url: '/images/avatar.jpeg',
    title: 'Cross Platform',
    description: 'Game Dev Lead',
  },
  {
    url: '/images/avatar.jpeg',
    title: 'Community Owned',
    description: 'Game Dev Lead',
  },
  {
    title: 'Community Owned',
    url: '/images/avatar.jpeg',
    description: 'Game Dev Lead',
  },
  {
    title: 'Community Owned',
    url: '/images/avatar.jpeg',
    description: 'Game Dev Lead',
  },
  {
    url: '/images/avatar.jpeg',
    title: 'Community Owned',
    description: 'Game Dev Lead',
  },
  {
    url: '/images/avatar.jpeg',
    title: 'Community Owned',
    description: 'Game Dev Lead',
  },
  {
    url: '/images/avatar.jpeg',
    title: 'Community Owned',
    description: 'Game Dev Lead',
  },
  {
    url: '/images/avatar.jpeg',
    title: 'Community Owned',
    description: 'Game Dev Lead',
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

        <FlexBox className=' grid grid-cols-2 gap-2 md:grid-cols-3 '>
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
      </Container>

      <FlexBox
        className=' justify-center bg-zinc-100 pt-40 pb-20 text-center'
        mt={16}
      >
        <FlexBox flexDirection='column'>
          <Typography component='h2' className='mb-4 text-3xl font-bold'>
            Core Team
          </Typography>

          <Description className='m-auto'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            debitis ratione quasi vitae quidem rem repudiandae corrupti
          </Description>

          <FlexBox maxWidth='lg' component='main' sx={{ pt: 6, pb: 6 }}>
            <Grid
              className='grid grid-cols-2 gap-4 md:grid-cols-5'
              // sm={0}
              // md={
              //   {
              //     gridTemplateColumns: 'repeat(2, 1fr)',
              //   } as unknown as GridSize
              // }
              // display='grid'
              // gap={2}
              // grid-template-columns: ;
            >
              {cards.map((card, index) => (
                <MultiActionAreaCard key={index} card={card} />
              ))}
            </Grid>
          </FlexBox>
        </FlexBox>
      </FlexBox>
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
