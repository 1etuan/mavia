/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import { Card, Container, Grid, Grow, styled, Typography } from '@mui/material';
import * as React from 'react';
import {
  RiArrowRightLine,
  RiDoubleQuotesL,
  RiDoubleQuotesR,
} from 'react-icons/ri';

import FlexBox from '@/components/atoms/FlexBox';
import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';
import { MultiActionAreaCard } from '@/components/Studio/CardAvatar';
import { FeaturedCard } from '@/components/Studio/FeatureCard';
import { MediaCard } from '@/components/Studio/MediaCard';

const FeatureCard = [
  {
    description:
      'Our games are built to be played on both desktop web and mobile devices, giving a truly universal gaming experience.',
    title: 'Quality Over Everything',
    id: 1,
  },
  {
    description:
      'Our games are built to be played on both desktop web and mobile devices, giving a truly universal gaming experience.',
    title: 'Quality Over Everything',
    id: 2,
  },
  {
    description:
      'Our games are built to be played on both desktop web and mobile devices, giving a truly universal gaming experience.',
    title: 'Quality Over Everything',
    id: 3,
  },
  {
    description:
      'Our games are built to be played on both desktop web and mobile devices, giving a truly universal gaming experience.',
    title: 'Quality Over Everything',
    id: 4,
  },
  {
    description:
      'Our games are built to be played on both desktop web and mobile devices, giving a truly universal gaming experience.',
    title: 'Quality Over Everything',
    id: 5,
  },
  {
    description:
      'Our games are built to be played on both desktop web and mobile devices, giving a truly universal gaming experience.',
    title: 'Quality Over Everything',
    id: 6,
  },
];

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

const mediaCards = [
  {
    title: 'Official Mavia Land NFT Mint Date and Details',
    img: '/images/nft.png',
    description:
      '**UPDATE:** The first-ever Land NFT Mint will now begin on Friday, March 4 2022 at 10:00 AM EST (NYC&nbsp;Time)',
    link: 'https://www.google.com/?hl=vi',
  },
  {
    title: 'Official Mavia Land NFT Mint Date and Details',
    img: '/images/nft.png',
    description:
      '**UPDATE:** The first-ever Land NFT Mint will now begin on Friday, March 4 2022 at 10:00 AM EST (NYC&nbsp;Time)',
    link: 'https://www.google.com/?hl=vi',
  },
  {
    title: 'Official Mavia Land NFT Mint Date and Details',
    img: '/images/nft.png',
    description:
      '**UPDATE:** The first-ever Land NFT Mint will now begin on Friday, March 4 2022 at 10:00 AM EST (NYC&nbsp;Time)',
    link: 'https://www.google.com/?hl=vi',
  },
  {
    title: 'Official Mavia Land NFT Mint Date and Details',
    img: '/images/nft.png',
    description:
      '**UPDATE:** The first-ever Land NFT Mint will now begin on Friday, March 4 2022 at 10:00 AM EST (NYC&nbsp;Time)',
    link: 'https://www.google.com/?hl=vi',
  },
  {
    title: 'Official Mavia Land NFT Mint Date and Details',
    img: '/images/nft.png',
    description:
      '**UPDATE:** The first-ever Land NFT Mint will now begin on Friday, March 4 2022 at 10:00 AM EST (NYC&nbsp;Time)',
    link: 'https://www.google.com/?hl=vi',
  },
  {
    title: 'Official Mavia Land NFT Mint Date and Details',
    img: '/images/nft.png',
    description:
      '**UPDATE:** The first-ever Land NFT Mint will now begin on Friday, March 4 2022 at 10:00 AM EST (NYC&nbsp;Time)',
    link: 'https://www.google.com/?hl=vi',
  },
  {
    title: 'Official Mavia Land NFT Mint Date and Details',
    img: '/images/nft.png',
    description:
      '**UPDATE:** The first-ever Land NFT Mint will now begin on Friday, March 4 2022 at 10:00 AM EST (NYC&nbsp;Time)',
    link: 'https://www.google.com/?hl=vi',
  },
  {
    title: 'Official Mavia Land NFT Mint Date and Details',
    img: '/images/nft.png',
    description:
      '**UPDATE:** The first-ever Land NFT Mint will now begin on Friday, March 4 2022 at 10:00 AM EST (NYC&nbsp;Time)',
    link: 'https://www.google.com/?hl=vi',
  },
  {
    title: 'Official Mavia Land NFT Mint Date and Details',
    img: '/images/nft.png',
    description:
      '**UPDATE:** The first-ever Land NFT Mint will now begin on Friday, March 4 2022 at 10:00 AM EST (NYC&nbsp;Time)',
    link: 'https://www.google.com/?hl=vi',
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
                <TransitionButton
                  variant='primary'
                  className='border-0 outline-none'
                >
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
       
        <FlexBox>
          <Card className='border-0 p-2 shadow-none'>
            <Grid container spacing={4}>
              {FeatureCard.map((card, index) => (
                <FeaturedCard key={index} card={card} />
              ))}
            </Grid>
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

          <FlexBox
            maxWidth='lg'
            component='main'
            className='justify-center'
            sx={{ pt: 6, pb: 6 }}
          >
            <Grid className='grid mx-[20px] grid-cols-2 gap-4 md:grid-cols-5'>
              {cards.map((card, index) => (
                <MultiActionAreaCard 
                  key={index}
                  card={{ ...card, id: index }}
                />
              ))}
            </Grid>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <Container style={{ backgroundColor: 'transparent' }}>
        <FlexBox py={8} className='flex-col md:flex-row'>
          <FlexBox className='flex-1 items-center justify-center'>
            <div className='object-contain'>
              <img
                src='/images/clone.jpeg'
                className='w-full max-w-sm rounded-lg'
              />
            </div>
          </FlexBox>
          <FlexBox className='mt-8 ml-8 flex flex-1 flex-col md:mt-0'>
            <RiDoubleQuotesL />
            <Typography lineHeight={3} textAlign='justify'>
              Blockchain gaming will transform the industry, bringing to players
              possibilities that would never have been imagined in a Web 2.0
              environment. By including NFTs into gaming, we introduce players
              to the concepts of verifiable ownership, item provenance and
              participation in decision-making and governance.
            </Typography>

            <Typography lineHeight={3} textAlign='justify'>
              Here at Skrice Studios, our mission reaches beyond game production
              to bring new light into the true potential and the opportunities
              of blockchain gaming. By bringing high-end NFT gaming experiences
              to the masses, we are speeding up the adoption of
              cryptocurrencies. We are paving the future for metaverse standards
              by which players become active creators of virtual spaces.
            </Typography>
            <RiDoubleQuotesR />

            <FlexBox className='mx-auto mt-8 md:mt-auto'>
              <img className='rounded-full' src='/images/duong.png' />
              <FlexBox className='ml-4 flex flex-col items-start justify-center'>
                <Typography className='h4'>Duy Tran</Typography>
                <Typography>CTO</Typography>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>

      <FlexBox className='justify-center text-center' mt={24}>
        <FlexBox flexDirection='column'>
          <Typography component='h1' className='mb-4 text-6xl'>
            Press
          </Typography>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            debitis ratione quasi vitae quidem rem repudiandae
          </Description>
          <Grow in timeout={1000}>
            <FlexBox mx='auto' mt={4} justifyContent='center'>
              <TransitionButton variant='outline' className='ml-2'>
                <span>View all stories</span>
                <RiArrowRightLine className='ml-2' />
              </TransitionButton>
            </FlexBox>
          </Grow>
        </FlexBox>
      </FlexBox>

      <Container>
        <FlexBox
          className='cursor-pointer items-center justify-center '
          maxWidth='lg'
          component='main'
          sx={{ pt: 12, pb: 6 }}
        >
          <Grid className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {mediaCards.map((card, index) => (
              <MediaCard key={index} card={card} />
            ))}
          </Grid>
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
