import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import BasicSelect from '@/components/inputs/Select';
import ButtonLink from '@/components/links/ButtonLink';

export const DownloadMaviaPage = () => {
  return (
    <>
      <Grid item xs={12} sx={{ pb: 1, mt: 10 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
          }}
        >
          <Card sx={{ paddingRight: '20px', boxShadow: 'none' }}>
            <CardMedia
              component='img'
              alt='green iguana'
              image='https://skrice.com/mavia/download-1.png'
              sx={{ maxHeight: '44vh', paddingLeft: '20px', border: 'none' }}
            />
            <CardActions
              sx={{
                display: 'grid',
                gridTemplateColumns: { md: '5fr 2fr 2fr' },
                mt: 2,
              }}
            >
              <Typography
                gutterBottom
                component='div'
                fontSize={18}
                sx={{ alignItems: 'center', paddingLeft: '9px' }}
              >
                Game Deck
              </Typography>
              <Box sx={{ paddingRight: '10px' }}>
                <BasicSelect />
              </Box>
              <ButtonLink
                href='#'
                className='mx-[7px] bg-primary-600 text-white'
              >
                <Typography fontSize={15}>Download</Typography>
                <FileDownloadIcon />
              </ButtonLink>
            </CardActions>
          </Card>
          <Card sx={{ paddingLeft: '20px', boxShadow: 'none' }}>
            <CardMedia
              component='img'
              alt='green iguana'
              image='https://skrice.com/mavia/download-2.jpg'
              sx={{ maxHeight: '44vh', paddingRight: '19px' }}
            />
            <CardActions
              sx={{
                display: 'grid',
                gridTemplateColumns: { md: '1fr 3fr 1fr' },
                mt: 2,
                mr: '10px',
              }}
            >
              <Typography
                gutterBottom
                component='div'
                fontSize={18}
                sx={{ alignItems: 'center', paddingRight: '9px' }}
              >
                Brand Assets
              </Typography>
              <ButtonLink href='#' className='mr-3 bg-primary-600 text-white'>
                <Typography fontSize={15}>Download</Typography>
                <FileDownloadIcon />
              </ButtonLink>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </>
  );
};
