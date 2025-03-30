import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  TextField,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';

const MotionBox = motion(Box);

const contactInfo = [
  {
    icon: <LocationIcon sx={{ fontSize: 40 }} />,
    title: 'Address',
    content: '123 Research Avenue\nScience District\nCity, State 12345'
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40 }} />,
    title: 'Phone',
    content: '+1 (555) 123-4567\n+1 (555) 987-6543'
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    title: 'Email',
    content: 'info@polaris-project.org\nresearch@polaris-project.org'
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
    title: 'Office Hours',
    content: 'Monday - Friday: 9:00 AM - 5:00 PM\nSaturday - Sunday: Closed'
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          Get in touch with our research team
        </Typography>
      </MotionBox>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            {contactInfo.map((info, index) => (
              <MotionBox
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Box sx={{ color: 'primary.main' }}>{info.icon}</Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                      {info.content}
                    </Typography>
                  </Box>
                </Paper>
              </MotionBox>
            ))}
          </Stack>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Send us a Message
              </Typography>
              <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 