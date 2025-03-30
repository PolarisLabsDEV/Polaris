import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';

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

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/" color="inherit" underline="none">
                  Home
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/research" color="inherit" underline="none">
                  Research
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/medical-systems" color="inherit" underline="none">
                  Medical Systems
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/psychological" color="inherit" underline="none">
                  Psychological Support
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              123 Research Drive
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Science City, SC 12345
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +1 (555) 123-4567
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: contact@polaris-project.org
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} POLARIS Project. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 