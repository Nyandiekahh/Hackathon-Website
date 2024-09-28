import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          About Hackathon 2024
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          Empowering Innovators, Fostering Creativity
        </Typography>
        
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="body1" paragraph>
            Welcome to Hackathon 2024, where brilliant minds converge to tackle real-world challenges through innovative software solutions. Our event is designed to push the boundaries of creativity, foster collaboration, and showcase the incredible talent within our tech community.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you're a seasoned developer or a coding enthusiast, Hackathon 2024 offers a platform to transform your ideas into reality. Over the course of 48 exhilarating hours, you'll have the opportunity to conceptualize, design, and build groundbreaking projects that have the potential to make a lasting impact.
          </Typography>
        </Paper>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <CodeIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Cutting-edge Challenges
              </Typography>
              <Typography variant="body2">
                Tackle real-world problems using the latest technologies in web and software development. Push your skills to the limit and create solutions that matter.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <GroupsIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Team Collaboration
              </Typography>
              <Typography variant="body2">
                Form teams of 2-4 members and combine your diverse skills. Learn from each other, overcome challenges together, and forge lasting professional relationships.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <EmojiEventsIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h6" component="h3" gutterBottom>
                Exciting Prizes
              </Typography>
              <Typography variant="body2">
                Compete for a total prize pool of Ksh 90,000. First place takes home Ksh 50,000, second place Ksh 30,000, and third place Ksh 10,000. Plus, gain recognition from industry leaders!
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Event Highlights
          </Typography>
          <Typography variant="body1" paragraph>
            • 48-hour coding marathon
          </Typography>
          <Typography variant="body1" paragraph>
            • Mentorship from industry experts
          </Typography>
          <Typography variant="body1" paragraph>
            • Workshops on cutting-edge technologies
          </Typography>
          <Typography variant="body1" paragraph>
            • Networking opportunities with tech leaders
          </Typography>
          <Typography variant="body1" paragraph>
            • Exciting challenges from our sponsor companies
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;