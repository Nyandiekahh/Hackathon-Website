import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Button, Grid, Paper, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom align="center">
          Welcome to Hackathon 2024
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          Innovate, Create, and Code Your Way to Success!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            component={RouterLink} 
            to="/apply"
            sx={{ mr: 2 }}
          >
            Apply Now
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large" 
            component={RouterLink} 
            to="/about"
          >
            Learn More
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <CodeIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Cutting-edge Technology
            </Typography>
            <Typography variant="body1">
              Work with the latest tools and frameworks in web and software development. Push the boundaries of innovation!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <GroupIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Team Collaboration
            </Typography>
            <Typography variant="body1">
              Form teams of 2-4 members and combine your skills to create something amazing. Learn, grow, and succeed together!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <EmojiEventsIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="h6" component="h3" gutterBottom>
              Amazing Prizes
            </Typography>
            <Typography variant="body1">
              Compete for a total prize pool of Ksh 90,000! First place takes Ksh 50,000, second Ksh 30,000, and third Ksh 10,000.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Hackathon 2024 Highlights
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Event Rules
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Teams of 2-4 members allowed" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="48-hour coding marathon" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="All code must be written during the event" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Use of open-source libraries allowed" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                What You'll Get
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Access to industry mentors" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Workshops on cutting-edge technologies" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Networking opportunities" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Free meals and refreshments" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Why Participate?
        </Typography>
        <Typography variant="body1" paragraph>
          Hackathon 2024 is more than just a coding competition. It's an opportunity to challenge yourself, learn new skills, and make connections that could shape your future in tech. Whether you're a seasoned developer or just starting out, this event offers something for everyone.
        </Typography>
        <Typography variant="body1" paragraph>
          You'll have the chance to work on real-world problems, get feedback from industry experts, and potentially catch the eye of top tech companies looking for fresh talent. Plus, with our generous prize pool, you could walk away with some serious cash to fund your next big idea!
        </Typography>
      </Box>

      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Take the Challenge?
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large" 
          component={RouterLink} 
          to="/apply"
          sx={{ mt: 2 }}
        >
          Apply Now
        </Button>
      </Box>
    </Container>
  );
};

export default Home;