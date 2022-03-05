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
  Switch,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

import FlexBox from '../atoms/FlexBox';
import UnderlineLink from '../links/UnderlineLink';
import NextImage from '../NextImage';
import SelectLang from '../SelectLang';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(2),
  transition: 'all .3s',
  className: ' border-0 border-b-2 border-gray-200 shadow-none',
  backdropFilter: 'saturate(180%) blur(20px)',
  boxShadow: 'rgb(230 230 230) 0px -1px 0px inset',
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
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
          : { backgroundColor: 'rgba(255,255,255, .75)' }
      }
    >
      <Grow in timeout={1000}>
        <FlexBox flex={1} justifyContent='space-between'>
          <FlexBox className='ml-2'>
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
          <FlexBoxMD justifyContent='center' alignItems='center'>
            <button>
              <MaterialUISwitch />
            </button>
          </FlexBoxMD>
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
          <FlexBox flex={1} flexDirection='column' mt={8}>
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

            <FlexBox justifyContent='center' mt={2}>
              <MaterialUISwitch />
            </FlexBox>
            <FlexBox justifyContent='center' mt={2}>
              <SelectLang hiddenMobile={false} />
            </FlexBox>
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
