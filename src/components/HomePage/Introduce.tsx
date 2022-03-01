import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export const Introduce = () => {

  return (
    <Grid item xs={12} sx={{ pb: 1 }}>
      <Box
        sx={{
          p: 2,
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1fr' },
          gap: 2,
        }}
      >
        <Paper elevation={0} sx={{ margin: "40px" }}>
          <Typography gutterBottom component="p" variant="h4" fontSize={40} fontWeight="bold">
            string
          </Typography>
          <Typography variant="subtitle1" fontSize={18} paragraph>
            string
          </Typography>
        </Paper>
        <Paper elevation={0}>
          <CardMedia component="img" sx={{ width: "100%", borderRadius: 2 }} image="https://skrice.com/home/hire.png" alt="img" />
        </Paper>
      </Box>
    </Grid>
  );
}