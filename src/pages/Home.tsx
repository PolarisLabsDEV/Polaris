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
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Science as ScienceIcon,
  MedicalServices as MedicalIcon,
  Psychology as PsychologyIcon,
  Security as SecurityIcon,
  ContactMail as ContactMailIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);

const features = [
  {
    title: 'Environmental Protection',
    description: 'Advanced systems for radiation, pressure, and temperature protection in extreme environments.',
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Medical Systems',
    description: 'Portable and adaptable medical equipment for remote and extreme environments.',
    icon: <MedicalIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Research & Development',
    description: 'Cutting-edge research in aerospace medicine and physiological adaptation.',
    icon: <ScienceIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Psychological Support',
    description: 'Comprehensive mental health and team effectiveness programs.',
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
  },
];

const featuredContent = [
  {
    title: 'Research',
    description: 'Exploring physiological adaptation in extreme environments',
    image: '/images/research.jpg',
    link: '/research'
  },
  {
    title: 'Team',
    description: 'Meet our expert researchers and scientists',
    image: '/images/team.jpg',
    link: '/team'
  },
  {
    title: 'Publications',
    description: 'Latest findings and scientific papers',
    image: '/images/publications.jpg',
    link: '/publications'
  }
]

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'background.paper',
          color: 'text.primary',
          pt: { xs: 4, sm: 8 },
          pb: { xs: 8, sm: 12 },
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Typography
                  component="h1"
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    background: (theme) =>
                      `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  POLARIS Project
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 4 }}
                >
                  Advancing Climate Science Through Innovation and Collaboration
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/research"
                    startIcon={<ScienceIcon />}
                  >
                    Explore Research
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    to="/contact"
                    startIcon={<ContactMailIcon />}
                  >
                    Get Involved
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="POLARIS Logo"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  filter: (theme) =>
                    theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '50%': {
                      transform: 'translateY(-20px)',
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(25,118,210,0.1) 0%, rgba(0,0,0,0) 70%)'
                : 'radial-gradient(circle, rgba(25,118,210,0.05) 0%, rgba(255,255,255,0) 70%)',
            zIndex: 0,
          }}
        />
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Featured Areas
        </Typography>
        <Grid container spacing={4}>
          {featuredContent.map((item, index) => (
            <Grid item xs={12} md={4} key={item.title}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                  onClick={() => navigate(item.link)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home; 