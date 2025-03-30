import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  Link,
  useTheme,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import ArticleIcon from '@mui/icons-material/Article'

const MotionPaper = motion(Paper)

interface Publication {
  id: number
  title: string
  authors: string[]
  year: number
  journal: string
  doi: string
  tags: string[]
  abstract: string
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'Climate Change Impacts on Arctic Ecosystems',
    authors: ['Dr. Sarah Johnson', 'Prof. Michael Chen', 'Dr. Emily Rodriguez'],
    year: 2023,
    journal: 'Nature Climate Change',
    doi: '10.1038/s41558-023-01644-1',
    tags: ['Climate Change', 'Arctic', 'Ecosystems'],
    abstract:
      'This study examines the long-term effects of climate change on Arctic ecosystems, focusing on species adaptation and ecosystem resilience.',
  },
  {
    id: 2,
    title: 'Ocean Current Dynamics in a Warming World',
    authors: ['Prof. Michael Chen', 'Dr. David Smith', 'Dr. Lisa Wang'],
    year: 2023,
    journal: 'Science Advances',
    doi: '10.1126/sciadv.abc1234',
    tags: ['Oceanography', 'Climate Change', 'Currents'],
    abstract:
      'We present new findings on how global warming is affecting major ocean currents and their implications for global climate patterns.',
  },
  {
    id: 3,
    title: 'Polar Species Adaptation Strategies',
    authors: ['Dr. Emily Rodriguez', 'Prof. James Wilson', 'Dr. Sarah Johnson'],
    year: 2022,
    journal: 'Proceedings of the National Academy of Sciences',
    doi: '10.1073/pnas.2212345678',
    tags: ['Biodiversity', 'Adaptation', 'Polar Regions'],
    abstract:
      'This research investigates how polar species are adapting to rapidly changing environmental conditions in their habitats.',
  },
]

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const theme = useTheme()

  const allTags = Array.from(
    new Set(publications.flatMap((pub) => pub.tags))
  ).sort()

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      searchTerm === '' ||
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some((author) =>
        author.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      pub.abstract.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => pub.tags.includes(tag))

    return matchesSearch && matchesTags
  })

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedTags([])
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
          Publications
        </Typography>

        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search publications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={() => setSearchTerm('')}
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom>
            Filter by topic:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {allTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onClick={() => handleTagClick(tag)}
                color={selectedTags.includes(tag) ? 'primary' : 'default'}
                variant={selectedTags.includes(tag) ? 'filled' : 'outlined'}
              />
            ))}
            {selectedTags.length > 0 && (
              <Chip
                label="Clear filters"
                onClick={clearFilters}
                color="error"
                variant="outlined"
              />
            )}
          </Box>
        </Box>

        <Grid container spacing={3}>
          <AnimatePresence>
            {filteredPublications.map((pub, index) => (
              <Grid item xs={12} key={pub.id}>
                <MotionPaper
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    '&:hover': {
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <ArticleIcon
                      sx={{
                        color: 'primary.main',
                        fontSize: 40,
                        mt: 0.5,
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: 'bold' }}
                      >
                        {pub.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        gutterBottom
                      >
                        {pub.authors.join(', ')}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {pub.journal} ({pub.year})
                      </Typography>
                      <Link
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ display: 'inline-block', mb: 2 }}
                      >
                        DOI: {pub.doi}
                      </Link>
                    </Box>
                  </Box>

                  <Typography variant="body1" paragraph>
                    {pub.abstract}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {pub.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </MotionPaper>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  )
}

export default Publications 