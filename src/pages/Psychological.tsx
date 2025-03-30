import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
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
  Psychology as PsychologyIcon,
  Group as GroupIcon,
  ViewInAr as VRIcon,
  SupportAgent as SupportIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

const MotionBox = motion(Box);

const supportSystems = [
  {
    title: 'Cognitive Function Monitoring',
    description: 'Advanced systems for tracking and analyzing cognitive performance in extreme environments.',
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    features: [
      'Real-time cognitive assessment',
      'Performance trend analysis',
      'Early warning indicators',
      'Adaptive testing protocols',
    ],
  },
  {
    title: 'Team Collaboration Enhancement',
    description: 'Programs designed to optimize team dynamics and communication in isolated environments.',
    icon: <GroupIcon sx={{ fontSize: 40 }} />,
    features: [
      'Cross-cultural training',
      'Team building exercises',
      'Conflict resolution protocols',
      'Leadership development',
    ],
  },
  {
    title: 'Virtual Reality Support',
    description: 'VR-based psychological preparation and intervention systems for extreme environments.',
    icon: <VRIcon sx={{ fontSize: 40 }} />,
    features: [
      'Environmental familiarization',
      'Stress management training',
      'Therapeutic interventions',
      'Recreational activities',
    ],
  },
  {
    title: 'Remote Support Network',
    description: 'Comprehensive psychological support system for remote and isolated teams.',
    icon: <SupportIcon sx={{ fontSize: 40 }} />,
    features: [
      '24/7 mental health support',
      'Family communication channels',
      'Peer support programs',
      'Professional counseling access',
    ],
  },
];

const Psychological: React.FC = () => {
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
            Psychological Support
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '800px' }}>
            Comprehensive mental health and team effectiveness programs for extreme environments
          </Typography>
        </Container>
      </MotionBox>

      {/* Support Systems Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {supportSystems.map((system, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {system.icon}
                    </Box>
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
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<PsychologyIcon />}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Psychological; 