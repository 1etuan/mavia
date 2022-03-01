import { CssBaseline, styled } from '@mui/material';
import * as React from 'react';

import Header from './Header';
import FlexBox from '../atoms/FlexBox';

const AppWrapper = styled(FlexBox)(() => ({
  flexDirection: 'column',
  flex: 1,
  minWidth: '100vw',
  minHeight: '200vh',
  background: 'green',
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppWrapper>
      <CssBaseline />
      <Header />
      <FlexBox mt='89.5px' flexDirection='column'>
        {children}
      </FlexBox>
    </AppWrapper>
  );
}
