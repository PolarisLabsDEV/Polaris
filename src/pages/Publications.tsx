import { Box, Container, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const publications = [
  {
    title: 'Physiological Adaptation in Extreme Environments: A Comprehensive Review',
    authors: 'Chen, S., Wilson, J., Rodriguez, M.',
    journal: 'Space Medicine Journal',
    year: '2024',
    doi: '10.1234/space.2024.001'
  },
  {
    title: 'Advanced Life Support Systems for Long-Duration Space Missions',
    authors: 'Kumar, A., Chen, S.',
    journal: 'Aerospace Engineering Review',
    year: '2023',
    doi: '10.5678/aero.2023.002'
  },
  {
    title: 'Psychological Resilience in Isolated Environments',
    authors: 'Rodriguez, M., Wilson, J.',
    journal: 'Human Factors in Space',
    year: '2023',
    doi: '10.9012/hfs.2023.003'
  },
  {
    title: 'Radiation Protection Strategies for Deep Space Exploration',
    authors: 'Wilson, J., Kumar, A.',
    journal: 'Radiation Research',
    year: '2022',
    doi: '10.3456/rad.2022.004'
  }
]

const Publications = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Publications
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          Recent Research and Findings
        </Typography>
      </MotionBox>

      <Paper elevation={3} sx={{ p: 3 }}>
        <List>
          {publications.map((pub, index) => (
            <MotionBox
              key={pub.doi}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Typography variant="h6" component="div">
                      {pub.title}
                    </Typography>
                  }
                  secondary={
                    <Box component="span" sx={{ display: 'block' }}>
                      <Typography component="span" variant="body1">
                        {pub.authors}
                      </Typography>
                      <Typography component="span" variant="body2" color="text.secondary">
                        {`${pub.journal} (${pub.year})`}
                      </Typography>
                      <Typography component="span" variant="body2" color="primary">
                        DOI: {pub.doi}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
              {index < publications.length - 1 && <Divider variant="inset" component="li" />}
            </MotionBox>
          ))}
        </List>
      </Paper>
    </Container>
  )
}

export default Publications 