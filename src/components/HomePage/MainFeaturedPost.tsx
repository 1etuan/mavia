import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const MainFeaturedPost = () => {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(https://skrice.com/vn/home/teaser.jpg)`,
        height: "60vh"
      }}
    >
      {<img style={{ display: 'none' }} src="https://skrice.com/vn/home/teaser.jpg" alt="img" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 15 },
              pr: { md: 40 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" fontWeight="bold" gutterBottom>
              Chúng tôi tạo ra các trò chơi Blockchain gây rối
            </Typography>
            <Typography variant="h5" fontSize={21} color="inherit">
              Skrice là một studio thiết kế và phát triển trò chơi với sứ mệnh mang lại việc áp dụng hàng loạt công nghệ blockchain thông qua các thế giới kỹ thuật số do người chơi sở hữu.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}