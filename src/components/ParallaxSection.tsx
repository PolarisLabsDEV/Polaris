import { Box, BoxProps } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxSectionProps extends BoxProps {
  children: React.ReactNode
  imageUrl: string
  height?: string | number
  overlayColor?: string
}

const ParallaxSection = ({
  children,
  imageUrl,
  height = '100vh',
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  ...props
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1])

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        height,
        overflow: 'hidden',
        ...props.sx,
      }}
      {...props}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y,
          opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: overlayColor,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default ParallaxSection 