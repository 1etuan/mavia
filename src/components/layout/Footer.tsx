/* eslint-disable @next/next/link-passhref */
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

import FlexBox from '../atoms/FlexBox';
import UnderlineLink from '../links/UnderlineLink';
import NextImage from '../NextImage';

export default function Footer() {
  return (
    <FlexBox className='flex-col items-center justify-around bg-black p-4 md:flex-row md:justify-around md:p-8'>
      <FlexBox>
        <Link href='/'>
          <NextImage
            height={60}
            width={150}
            className=' cursor-pointer'
            src='https://www.bitcastlewar.io/images/banners/logoBCW.png'
          />
        </Link>
      </FlexBox>

      <FlexBox flexDirection='column' mx={4} className='text-white'>
        <FlexBox justifyContent='space-between' className='mt-8 md:mt-[unset]'>
          <Button className='text-white'>
            <UnderlineLink href='/' className='border-[unset] border-b-0'>
              <span className=''>Home</span>
            </UnderlineLink>
          </Button>
          <Button className='text-white'>
            <UnderlineLink href='/mavia' className='border-[unset] border-b-0'>
              <span className=''>Mavia</span>
            </UnderlineLink>
          </Button>
          <Button className='text-white'>
            <UnderlineLink href='/studio' className='border-[unset] border-b-0'>
              <span className=''>Studio</span>
            </UnderlineLink>
          </Button>
        </FlexBox>
        <FlexBox className='text-white' ml={1.25} mt={3.25}>
          2021 Skrice Studios Inc. All rights reserved.
        </FlexBox>
      </FlexBox>
      <FlexBox className='flex-end' flexDirection='column'>
        <FlexBox>
          <Button className='border border-solid border-black transition-all hover:border-white'>
            <FaLinkedin
              className='transition-all hover:scale-110'
              style={{ fontSize: 30, color: '#fff' }}
            />
          </Button>
          <Button className='border border-solid border-black transition-all hover:border-white'>
            <FaFacebookSquare
              className='transition-all hover:scale-110'
              style={{ fontSize: 30, color: '#fff' }}
            />
          </Button>
          <Button className='border border-solid border-black transition-all hover:border-white'>
            <FaInstagramSquare
              className='transition-all hover:scale-110'
              style={{ fontSize: 30, color: '#fff' }}
            />
          </Button>
          <Button className='border border-solid border-black transition-all hover:border-white'>
            <FaTwitterSquare
              className='hover:scale-110 '
              style={{ fontSize: 30, color: 'white' }}
            />
          </Button>
        </FlexBox>
        <FlexBox className='justify-center text-white' mt={2}>
          <span>Support: info@skrice.com</span>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
