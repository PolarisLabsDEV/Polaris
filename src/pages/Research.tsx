import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);

const researchAreas = [
  {
    title: 'Physiological Adaptation',
    description: 'Studying how the human body adapts to extreme environments and developing countermeasures.',
    image: '/images/physiological.jpg',
    link: '/research/physiological'
  },
  {
    title: 'Life Support Systems',
    description: 'Designing and testing advanced life support systems for long-duration missions.',
    image: '/images/life-support.jpg',
    link: '/research/life-support'
  },
  {
    title: 'Radiation Protection',
    description: 'Developing innovative solutions for radiation shielding and protection.',
    image: '/images/radiation.jpg',
    link: '/research/radiation'
  },
  {
    title: 'Psychological Adaptation',
    description: 'Investigating psychological resilience and team dynamics in isolated environments.',
    image: '/images/psychological.jpg',
    link: '/research/psychological'
  }
];

const Research = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Research Areas
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          Advancing human capabilities in extreme environments
        </Typography>
      </MotionBox>

      <Grid container spacing={4}>
        {researchAreas.map((area, index) => (
          <Grid item xs={12} sm={6} key={area.title}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={area.image}
                  alt={area.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {area.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {area.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(area.link)}
                    sx={{ mt: 2 }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Current Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Explore our ongoing research initiatives and collaborations
        </Typography>
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate('/publications')}
        >
          View Publications
        </Button>
      </Box>
    </Container>
  );
};

export default Research; 