import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  IconButton,
  useTheme,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const MotionCard = motion(Card)

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Research Fellow',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content:
      'The research conducted by POLARIS has been groundbreaking. Their innovative approach to climate studies has opened new doors in our field.',
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    role: 'Environmental Scientist',
    avatar: 'https://i.pravatar.cc/150?img=2',
    content: `I have been following POLARIS's work for years. Their commitment to scientific excellence and environmental stewardship is truly inspiring.`,
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    role: 'Climate Researcher',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content: `The collaborative environment at POLARIS is exceptional. Their team's dedication to advancing climate science is remarkable.`,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const theme = useTheme()

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        bgcolor: 'grey.50',
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
          What Our Colleagues Say
        </Typography>
        <Box
          sx={{
            position: 'relative',
            height: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 0,
              zIndex: 2,
              bgcolor: 'white',
              boxShadow: 2,
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 0,
              zIndex: 2,
              bgcolor: 'white',
              boxShadow: 2,
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
          <AnimatePresence mode="wait">
            <MotionCard
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              sx={{
                maxWidth: 600,
                mx: 'auto',
                boxShadow: 3,
                borderRadius: 4,
                overflow: 'visible',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Avatar
                    src={testimonials[currentIndex].avatar}
                    sx={{
                      width: 100,
                      height: 100,
                      mb: 2,
                      border: `4px solid ${theme.palette.primary.main}`,
                    }}
                  />
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                  >
                    {testimonials[currentIndex].name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {testimonials[currentIndex].role}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 2,
                      fontStyle: 'italic',
                      color: 'text.secondary',
                    }}
                  >
                    "{testimonials[currentIndex].content}"
                  </Typography>
                </Box>
              </CardContent>
            </MotionCard>
          </AnimatePresence>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 4,
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: index === currentIndex ? 'primary.main' : 'grey.300',
                cursor: 'pointer',
                transition: 'all 0.3s',
                '&:hover': {
                  bgcolor: index === currentIndex ? 'primary.dark' : 'grey.400',
                },
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Testimonials 