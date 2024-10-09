// app/home/page.js
import React from 'react';
import { Box, Grid, Typography, IconButton, Avatar, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const cuisines = [
  { label: 'Italian', imgSrc: '/path/to/italian.png' },
  { label: 'Japanese', imgSrc: '/path/to/japanese.png' },
  { label: 'Chinese', imgSrc: '/path/to/chinese.png' },
  { label: 'Thai', imgSrc: '/path/to/thai.png' },
  { label: 'French', imgSrc: '/path/to/french.png' },
  { label: 'Indian', imgSrc: '/path/to/indian.png' },
  { label: 'Mexican', imgSrc: '/path/to/mexican.png' },
];

const videos = [
  { imgSrc: '/path/to/video1.png' },
  { imgSrc: '/path/to/video2.png' },
  { imgSrc: '/path/to/video3.png' },
];

const HomePage = () => {
  return (
    <Box sx={{ padding: '16px' }}>
      {/* Header Section */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
          Dish Dash
        </Typography>
        <Box>
          <IconButton>
            <AddIcon sx={{ backgroundColor: '#f0c9ff', borderRadius: '50%', padding: '4px' }} />
          </IconButton>
          <IconButton>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Grid>

      {/* Cuisine Section */}
      <Box sx={{ marginBottom: '20px' }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Cuisine
          </Typography>
          <Button endIcon={<ArrowForwardIosIcon />}>Explore</Button>
        </Grid>
        <Grid container spacing={2} sx={{ overflowX: 'auto', flexWrap: 'nowrap', paddingTop: '16px' }}>
          {cuisines.map((cuisine, index) => (
            <Grid item key={index} sx={{ textAlign: 'center', minWidth: '100px' }}>
              <img src={cuisine.imgSrc} alt={cuisine.label} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
              <Typography variant="body2">{cuisine.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Videos Section */}
      <Box>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Videos
          </Typography>
          <Button endIcon={<ArrowForwardIosIcon />}>See More</Button>
        </Grid>
        <Grid container spacing={2} sx={{ paddingTop: '16px' }}>
          {videos.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <img src={video.imgSrc} alt={`video-${index}`} style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
