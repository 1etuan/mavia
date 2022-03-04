/* eslint-disable @next/next/link-passhref */
import { CloseOutlined, MenuOutlined } from '@mui/icons-material';
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Grow,
  IconButton,
  styled,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

import FlexBox from '../atoms/FlexBox';
import UnderlineLink from '../links/UnderlineLink';
import NextImage from '../NextImage';
import SelectLang from '../SelectLang';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(3),
  transition: 'all .3s',
  className:' border-0 border-b-2 border-gray-200 shadow-none',
}));

const routes = [
  {
    label: 'Home',
    uri: '/',
  },
  {
    label: 'Mavia',
    uri: '/mavia',
  },
  {
    label: 'Studio',
    uri: '/studio',
  },
];

export default function Header() {
  const [state, setState] = React.useState<boolean>(true);
  const [open, setOpen] = React.useState(false);
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
          : { backgroundColor: 'rgba(255,255,255, .95)' }
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
          <FlexBoxMD
            flex={1}
            justifyContent='center'
            className=' gap-4 border-0 shadow-none'
          >
            {routes.map((i) => (
              <Button key={i.label}>
                <UnderlineLink
                  href={i.uri}
                  className='border-[unset] border-b-0'
                >
                  <span className='text-black'>{i.label}</span>
                </UnderlineLink>
              </Button>
            ))}
          </FlexBoxMD>
          <SelectLang />
          <FlexBoxMobile>
            <IconButton onClick={() => setOpen(true)}>
              <MenuOutlined htmlColor='#000' />
            </IconButton>
          </FlexBoxMobile>
        </FlexBox>
      </Grow>
      <Drawer onClose={() => setOpen(false)} open={open}>
        <FlexBox
          width='100vw'
          height='100vh'
          flexDirection='column'
          className='shadow-none'
        >
          <FlexBox justifyContent='space-between' p={2} className='shadow-none'>
            <Link href='/'>
              <NextImage
                className='cursor-pointer'
                width={90}
                height={35}
                src='https://www.bitcastlewar.io/images/banners/logoBCW.png'
              />
            </Link>
            <IconButton onClick={() => setOpen(false)}>
              <CloseOutlined />
            </IconButton>
          </FlexBox>
          <Divider />
          <FlexBox
            flex={1}
            justifyContent='center'
            flexDirection='column'
            mt={4}
          >
            {routes.map((i) => (
              <UnderlineLink
                key={i.label}
                href={i.uri}
                className='border-[unset] border-b-0 p-4'
                onClick={() => {
                  setOpen(false);
                }}
              >
                <span className='mx-auto'>{i.label}</span>
              </UnderlineLink>
            ))}
          </FlexBox>
        </FlexBox>
      </Drawer>
    </AppBarStyled>
  );
}

const FlexBoxMD = styled(FlexBox)(({ theme }) => ({
  [theme.breakpoints.down(769)]: {
    display: 'none',
  },
}));

const FlexBoxMobile = styled(FlexBox)(({ theme }) => ({
  [theme.breakpoints.up(769)]: {
    display: 'none',
  },
}));
