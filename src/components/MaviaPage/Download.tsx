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
      <Grid
        item
        xs={12}
        sx={{
          pb: 1,
          mt: 10,
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1fr' },
        }}
      >
        <Card sx={{ padding: '20px', boxShadow: 'none' }}>
          <CardMedia
            component='img'
            alt='green iguana'
            image='https://skrice.com/mavia/download-1.png'
            sx={{ maxHeight: '40vh', borderRadius: 4 }}
          />
          <CardActions
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                md: 'repeat(2, 1fr)',
                sm: 'repeat(2, 1fr)',
              },
            }}
          >
            <Typography
              gutterBottom
              component='div'
              fontSize={18}
              sx={{ alignItems: 'center', mb: 0, ml: 1, mt: 2 }}
            >
              Game Deck
            </Typography>
            <Grid
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  md: 'repeat(2, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  xs: 'repeat(2, 1fr)',
                },
                mt: 2,
              }}
            >
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
            </Grid>
          </CardActions>
        </Card>
        <Card sx={{ padding: '20px', boxShadow: 'none' }}>
          <CardMedia
            component='img'
            alt='green iguana'
            image='https://skrice.com/mavia/download-2.jpg'
            sx={{ maxHeight: '40vh', borderRadius: 4 }}
          />
          <CardActions
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                md: '5fr 1fr',
                sm: '4fr 1fr',
                xs: '1fr 1fr',
              },
              mt: 2,
            }}
          >
            <Typography
              gutterBottom
              component='div'
              fontSize={18}
              sx={{ alignItems: 'center', mb: 0, ml: 1 }}
            >
              Brand Assets
            </Typography>
            <ButtonLink href='#' className='mr-3 bg-primary-600 text-white'>
              <Typography fontSize={15}>Download</Typography>
              <FileDownloadIcon />
            </ButtonLink>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
