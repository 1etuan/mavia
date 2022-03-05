import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import FlexBox from '@/components/atoms/FlexBox';
import {
  BannerMaviaPage,
  CardMaviaPage,
  DownloadMaviaPage,
  InfoMaviaPage,
  IntroduceMaviaPage,
  QuestionsMaviaPage,
  QuoteMaviaPage,
} from '@/components/MaviaPage';
import Seo from '@/components/Seo';

const cards = [
  {
    id: 1,
    title: 'Online Multiplayer Strategy',
    description:
      'Attack and defeat rival bases by strategically timing and placing troops in battle.',
  },
  {
    id: 2,
    title: 'Unique Bases and Land',
    description:
      'Each plot of land is an NFT with a unique design and location on the Mavia island.',
  },
  {
    id: 3,
    title: 'Win RUBY Through Battle',
    description:
      'Every offensive and defensive battle won by your army yields RUBY cryptocurrency as a reward.',
  },
];

const informations = [
  {
    id: 1,
    description:
      'Choose from dozens of different air, vehicle and infantry troops to lead your army to victory against rival bases. Structure your defensive buildings, troops and traps to defend your base against opponents.',
    image: 'https://skrice.com/mavia/info-1.jpg',
    imageLabel: 'Build your army and conquer opponents.',
    title: 'Build your army and conquer opponents.',
  },
  {
    id: 2,
    description:
      'Earn Mavia’s play-to-earn in-game currency RUBY by winning battles against opponents, successfully defending your base, completing challenges, removing base obstacles and much more.',
    image: 'https://skrice.com/mavia/info-2.png',
    imageLabel: 'Earn RUBY as you battle and grow your base.',
    title: 'Earn RUBY as you battle and grow your base.',
  },
  {
    id: 3,
    description:
      'Use RUBY to upgrade your NFTs in the game, increasing their value. Bases can only be grown by upgrading the HQ level with RUBY. Heroes help your army attack opponents and defend your base. Statues enhance your base performance.',
    image: 'https://skrice.com/mavia/info-3.jpg',
    imageLabel: 'Upgrade your NFTs and increase their value.',
    title: 'Upgrade your NFTs and increase their value.',
  },
];

export default function MaviaPage() {
  return (
    <>
      <Seo title='Mavia' />

      <BannerMaviaPage />
      <Container
        disableGutters
        maxWidth='lg'
        component='main'
        sx={{ pt: 6, pb: 10 }}
      >
        <IntroduceMaviaPage />
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <CardMaviaPage key={index} card={card} />
          ))}
        </Grid>
        <FlexBox className='px-[20px]'>
          <QuoteMaviaPage />
        </FlexBox>

        <Grid sx={{ flexGrow: 1, pt: 20 }}>
          {informations.map((info, index) => (
            <InfoMaviaPage key={index} info={info} />
          ))}
        </Grid>

        <Typography variant='h4' align='center' fontWeight='bold' gutterBottom>
          Additional Mavia Resources
        </Typography>
        <Typography variant='h5' fontSize={20} align='center' component='p'>
          Download the Mavia Game Deck in over 12 languages, as well as the
          Mavia Press Kit for branding assets.
        </Typography>
        <DownloadMaviaPage />

        <Typography
          sx={{ pt: 15, pb: 5 }}
          variant='h4'
          align='center'
          fontWeight='bold'
          gutterBottom
        >
          Frequently Asked Questions
        </Typography>

        <QuestionsMaviaPage />
      </Container>
    </>
  );
}
