import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
  IconButton,
  useTheme,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

const MotionBox = motion(Box)

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const theme = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Thank you for your message! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  We welcome your questions, feedback, and collaboration opportunities.
                  Feel free to reach out to us through any of the following channels.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOnIcon color="primary" />
                    <Typography>
                      123 Research Avenue<br />
                      Science City, SC 12345<br />
                      United States
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon color="primary" />
                    <Typography>contact@polaris-research.org</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PhoneIcon color="primary" />
                    <Typography>+1 (555) 123-4567</Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 'auto', pt: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      color="primary"
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={8}>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Send us a Message
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={status === 'loading'}
                    sx={{
                      alignSelf: 'flex-start',
                      minWidth: 200,
                    }}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>

        <Snackbar
          open={status !== 'idle'}
          autoHideDuration={6000}
          onClose={() => setStatus('idle')}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setStatus('idle')}
            severity={status === 'success' ? 'success' : 'error'}
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  )
}

export default Contact 