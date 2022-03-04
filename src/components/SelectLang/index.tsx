import { styled } from '@mui/material';
import * as React from 'react';

import BasicSelect from '../inputs/Select';

export default function SelectLang() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ShowWhenMD>
      <BasicSelect />
    </ShowWhenMD>
  );
}

const ShowWhenMD = styled('div')(({ theme }) => ({
  [theme.breakpoints.down(769)]: {
    display: 'none',
  },
}));
