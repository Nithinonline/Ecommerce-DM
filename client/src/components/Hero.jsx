import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center',
        backgroundImage: 'url("https://res-console.cloudinary.com/dwky0xwmm/thumbnails/v1/image/upload/v1709098250/R3JleV9NaW5pbWFsaXN0X1NwZWNpYWxfT2ZmZXJfQmFubmVyX0xhbmRzY2FwZV9oeXlzbGs=/grid_landscape")',
        backgroundSize: 'cover',
        color: 'white',
        marginTop:"5vh",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: 2 }}>
        Discover the Latest Trends
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Shop our curated collection of premium products.
      </Typography>
      <Button variant="contained" color="primary">
        Explore Now
      </Button>
    </Container>
  );
};

export default Hero;
