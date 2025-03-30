import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Oops! Something went wrong
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </Typography>
            {this.state.error && (
              <Typography
                variant="body2"
                color="error"
                sx={{
                  mt: 2,
                  p: 2,
                  bgcolor: 'error.light',
                  borderRadius: 1,
                  maxWidth: '100%',
                  overflow: 'auto',
                }}
              >
                {this.state.error.message}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.location.reload()}
              sx={{ mt: 4 }}
            >
              Refresh Page
            </Button>
          </MotionBox>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 