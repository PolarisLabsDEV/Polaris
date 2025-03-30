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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  MedicalServices as MedicalIcon,
  DevicesOther as DevicesIcon,
  Biotech as BiotechIcon,
  Security as SecurityIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

const MotionBox = motion(Box);

const medicalSystems = [
  {
    title: 'Portable X-ray System',
    description: 'Lightweight and adaptable X-ray imaging system based on Fram2 mission technology.',
    image: 'https://via.placeholder.com/400x300',
    features: [
      'Zero-gravity compatible',
      'Low radiation exposure',
      'High-resolution imaging',
      'Battery-powered operation',
    ],
  },
  {
    title: 'Ultrasound Diagnostic Unit',
    description: 'Compact ultrasound system for remote medical diagnostics in extreme environments.',
    image: 'https://via.placeholder.com/400x300',
    features: [
      'Portable design',
      'AI-assisted interpretation',
      'Multi-probe support',
      'Wireless connectivity',
    ],
  },
  {
    title: 'Emergency Medical Kit',
    description: 'Comprehensive medical kit designed for zero-gravity and extreme environments.',
    image: 'https://via.placeholder.com/400x300',
    features: [
      'Anti-microbial materials',
      'Modular organization',
      'Quick-access compartments',
      'Digital inventory tracking',
    ],
  },
  {
    title: 'Biosample Collection System',
    description: 'Advanced system for collecting and preserving biological samples in extreme conditions.',
    image: 'https://via.placeholder.com/400x300',
    features: [
      'Temperature control',
      'Sample preservation',
      'Automated labeling',
      'Data integration',
    ],
  },
];

const MedicalSystems: React.FC = () => {
  return (
    <Box>
      {/* Header Section */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Medical Systems
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '800px' }}>
            Advanced medical solutions designed for extreme environments
          </Typography>
        </Container>
      </MotionBox>

      {/* Systems Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {medicalSystems.map((system, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={system.image}
                    alt={system.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {system.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {system.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <List>
                      {system.features.map((feature, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<MedicalIcon />}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MedicalSystems; 