import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MotionBox = motion(Box)

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            textAlign: 'center',
            background: (theme) =>
              `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
            color: 'white',
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Stay Updated
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Subscribe to our newsletter to receive the latest updates about our research and events.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              gap: 2,
              maxWidth: 500,
              mx: 'auto',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              sx={{
                bgcolor: 'white',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={status === 'loading'}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
              }}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </Box>
        </Paper>
      </Container>
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
    </MotionBox>
  )
}

export default Newsletter 