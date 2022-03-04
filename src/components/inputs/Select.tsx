/* eslint-disable @next/next/no-img-element */
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

const countries = [
  'US',
  'DE',
  'FR',
  'TR',
  'VN',
  'CN',
  'ES',
  'KP',
  'JP',
  'PL',
  'AR',
  'PT',
];

export default function BasicSelect() {
  const [value, setValue] = React.useState('US');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select value={value} onChange={handleChange} sx={{ height: '42px' }}>
          {countries.map((code) => (
            <MenuItem key={code} value={code}>
              <div className='inline-flex items-center justify-center'>
                <img
                  loading='lazy'
                  width='20'
                  src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
                  alt={`Flag of ${code}`}
                  className=''
                />
                <p className='ml-3'>{code}</p>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
