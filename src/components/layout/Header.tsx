/* eslint-disable @next/next/link-passhref */
import { AppBar, Button, Grow, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import FlexBox from '../atoms/FlexBox';
import UnderlineLink from '../links/UnderlineLink';
import NextImage from '../NextImage';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(3),
  transition: 'all .3s',
}));

export default function Header() {
  const [state, setState] = React.useState<boolean>(true);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      let result = false;
      if (window.pageYOffset < 90) result = true;
      setState(result);
    });
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      window.removeEventListener('scroll', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AppBarStyled
      style={
        state
          ? {
              backgroundColor: 'rgba(255,255,255)',
            }
          : { backgroundColor: 'rgba(255,255,255, .75)' }
      }
    >
      <Grow in timeout={1000}>
        <FlexBox flex={1} justifyContent='space-between'>
          <FlexBox>
            <Link href='/'>
              <NextImage
                className='cursor-pointer'
                width={90}
                height={35}
                src='https://www.bitcastlewar.io/images/banners/logoBCW.png'
              />
            </Link>
          </FlexBox>
          <FlexBox flex={1} justifyContent='center'>
            <UnderlineLink
              href='/components'
              className='border-[unset] border-b-0'
            >
              <span className='text-black'>Components</span>
            </UnderlineLink>
            <Button>Logo</Button>
            <Button>Logo</Button>
          </FlexBox>
          <FlexBox>
            <Button>Logo</Button>
          </FlexBox>
        </FlexBox>
      </Grow>
    </AppBarStyled>
  );
}
