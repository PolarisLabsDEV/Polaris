import { Card, CardContent, CardMedia, Typography, Box, BoxProps } from '@mui/material'
import { motion } from 'framer-motion'

const MotionCard = motion(Card)

interface HoverCardProps extends BoxProps {
  title: string
  description: string
  imageUrl: string
  link?: string
  onClick?: () => void
}

const HoverCard = ({ title, description, imageUrl, link, onClick, ...props }: HoverCardProps) => {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      sx={{ cursor: onClick ? 'pointer' : 'default' }}
      {...props}
    >
      <MotionCard
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            '& .MuiCardMedia-root': {
              transform: 'scale(1.1)',
            },
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={title}
          sx={{
            transition: 'transform 0.3s ease-in-out',
            objectFit: 'cover',
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </MotionCard>
    </Box>
  )
}

export default HoverCard 