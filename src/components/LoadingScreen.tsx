import { Box, CircularProgress, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const LoadingScreen = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
      }}
    >
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: 'primary.main',
          mb: 2,
        }}
      />
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          mt: 2,
        }}
      >
        Loading...
      </Typography>
    </MotionBox>
  )
}

export default LoadingScreen 