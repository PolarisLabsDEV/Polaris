import { Box, Typography, Paper, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TimelineItem {
  date: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
  const theme = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: 'primary.main',
          transform: 'translateX(-50%)',
        },
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.date}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
              mb: 4,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                transform: 'translateY(-50%)',
                ...(index % 2 === 0
                  ? { right: -60 }
                  : { left: -60 }),
              },
            }}
          >
            <Paper
              elevation={2}
              sx={{
                p: 3,
                maxWidth: '45%',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  width: 0,
                  height: 0,
                  borderStyle: 'solid',
                  borderWidth: '10px 10px 10px 0',
                  borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
                  transform: 'translateY(-50%)',
                  ...(index % 2 === 0
                    ? { right: -10 }
                    : { left: -10, borderWidth: '10px 0 10px 10px', borderColor: `transparent transparent transparent ${theme.palette.background.paper}` }),
                },
              }}
            >
              <Typography variant="subtitle2" color="primary" gutterBottom>
                {item.date}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Paper>
          </Box>
        </motion.div>
      ))}
    </Box>
  )
}

export default Timeline 