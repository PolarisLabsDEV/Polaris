import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                component="img"
                src="/images/logo.png"
                alt="POLARIS Logo"
                sx={{
                  height: 30,
                  width: 'auto',
                  mr: 1,
                  filter: (theme) =>
                    theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                }}
              >
                POLARIS
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Advancing climate science through innovation and collaboration.
              Together, we can make a difference.
            </Typography>
          </Grid>

          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About POLARIS
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Advancing human capabilities in extreme environments through innovative medical solutions and comprehensive support systems.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer; 