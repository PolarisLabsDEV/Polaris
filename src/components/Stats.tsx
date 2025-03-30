import { Box, Grid, Typography, useTheme } from '@mui/material'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface StatItem {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

interface StatsProps {
  items: StatItem[]
  columns?: number
}

const Stats = ({ items, columns = 4 }: StatsProps) => {
  const theme = useTheme()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={12 / columns} key={index}>
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  height: '100%',
                }}
              >
                <Typography
                  variant="h3"
                  component="div"
                  color="primary"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {item.prefix}
                  {item.value}
                  {item.suffix}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  )
}

export default Stats 