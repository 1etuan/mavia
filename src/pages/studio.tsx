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
