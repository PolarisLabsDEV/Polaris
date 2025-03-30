import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Avatar } from '@mui/material'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Principal Investigator',
    image: '/team/sarah-chen.jpg',
    bio: 'Leading expert in space medicine and physiological adaptation.'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Research Director',
    image: '/team/james-wilson.jpg',
    bio: 'Specialist in radiation protection and life support systems.'
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Senior Researcher',
    image: '/team/maria-rodriguez.jpg',
    bio: 'Expert in psychological adaptation and team dynamics.'
  },
  {
    name: 'Dr. Alex Kumar',
    role: 'Technical Lead',
    image: '/team/alex-kumar.jpg',
    bio: 'Systems engineer specializing in medical technology.'
  }
]

const Team = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Our Team
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          Meet the experts behind POLARIS
        </Typography>
      </MotionBox>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={member.name}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={member.image}
                  alt={member.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Team 