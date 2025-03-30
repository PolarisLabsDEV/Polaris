import { Typography, TypographyProps } from '@mui/material'
import { motion } from 'framer-motion'

interface AnimatedTextProps extends TypographyProps {
  text: string
  delay?: number
  duration?: number
}

const AnimatedText = ({ text, delay = 0, duration = 0.05, ...props }: AnimatedTextProps) => {
  const characters = text.split('')

  return (
    <Typography {...props}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: delay + index * duration,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          {char}
        </motion.span>
      ))}
    </Typography>
  )
}

export default AnimatedText 