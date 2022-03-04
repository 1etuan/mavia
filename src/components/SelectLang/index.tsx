import { styled } from '@mui/material';
import * as React from 'react';

import BasicSelect from '../inputs/Select';

export default function SelectLang({ hiddenMobile = true }) {
  if (hiddenMobile)
    return (
      <ShowWhenMD>
        <BasicSelect />
      </ShowWhenMD>
    );
  return <BasicSelect />;
}

const ShowWhenMD = styled('div')(({ theme }) => ({
  [theme.breakpoints.down(769)]: {
    display: 'none',
  },
}));
