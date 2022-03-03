/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import React from 'react';

import FlexBox from '../atoms/FlexBox';
import NextImage from '../NextImage';

export default function Footer() {
  return (
    <FlexBox className='h-32 bg-slate-600'>
      <FlexBox className=' '>
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

        <FlexBox>
          <p>hlllllll</p>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
