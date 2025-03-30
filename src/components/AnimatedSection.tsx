import { Box, BoxProps } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedSectionProps extends BoxProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const AnimatedSection = ({ children, delay = 0, direction = 'up', ...props }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <Box ref={ref} {...props}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        {children}
      </motion.div>
    </Box>
  )
}

export default AnimatedSection 