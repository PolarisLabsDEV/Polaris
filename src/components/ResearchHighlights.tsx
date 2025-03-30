import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  IconButton,
  Collapse,
  useTheme,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

const MotionCard = motion(Card)

interface ResearchHighlight {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  fullContent: string
}

const researchHighlights: ResearchHighlight[] = [
  {
    id: 1,
    title: 'Arctic Ice Melting Patterns',
    description: 'New insights into the accelerating rate of Arctic ice melting and its global implications.',
    image: 'https://source.unsplash.com/random/800x600?arctic',
    tags: ['Climate Change', 'Arctic', 'Ice Melting'],
    fullContent:
      'Our latest research reveals unprecedented patterns in Arctic ice melting rates. Through advanced satellite imagery and on-ground measurements, we\'ve identified key factors contributing to accelerated ice loss. The findings suggest that current climate models may need to be updated to account for these new patterns.',
  },
  {
    id: 2,
    title: 'Ocean Current Changes',
    description: 'Study shows significant shifts in major ocean currents affecting global weather patterns.',
    image: 'https://source.unsplash.com/random/800x600?ocean',
    tags: ['Oceanography', 'Climate', 'Currents'],
    fullContent:
      'A comprehensive study of major ocean currents has revealed significant shifts in their patterns and strength. These changes are having far-reaching effects on global weather systems and marine ecosystems. Our research team has developed new models to predict future changes and their potential impacts.',
  },
  {
    id: 3,
    title: 'Polar Ecosystem Adaptation',
    description: 'How polar species are adapting to changing environmental conditions.',
    image: 'https://source.unsplash.com/random/800x600?polar',
    tags: ['Ecology', 'Adaptation', 'Biodiversity'],
    fullContent:
      'Our long-term study of polar ecosystems has documented remarkable adaptations among various species. From changes in migration patterns to shifts in breeding seasons, we\'re seeing unprecedented levels of ecological flexibility. These findings provide crucial insights into the resilience of polar ecosystems.',
  },
]

const ResearchHighlights = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const theme = useTheme()

  const handleExpandClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        bgcolor: 'background.default',
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
          Research Highlights
        </Typography>
        <Grid container spacing={4}>
          {researchHighlights.map((highlight, index) => (
            <Grid item xs={12} md={4} key={highlight.id}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={highlight.image}
                  alt={highlight.title}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: `4px solid ${theme.palette.primary.main}`,
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                  >
                    {highlight.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {highlight.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                  <Collapse in={expandedId === highlight.id}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {highlight.fullContent}
                    </Typography>
                  </Collapse>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      mt: 2,
                    }}
                  >
                    <IconButton
                      onClick={() => handleExpandClick(highlight.id)}
                      sx={{
                        transform: expandedId === highlight.id ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s',
                      }}
                    >
                      {expandedId === highlight.id ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </IconButton>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ResearchHighlights 