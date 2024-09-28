import React from 'react';
import { Container, Typography, Box, Paper, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';

const Schedule = () => {
  const preDayEvents = [
    { date: 'July 1, 2024', event: 'Project Submission Deadline', description: 'All teams must submit their projects by 11:59 PM EAT' },
    { date: 'July 3, 2024', event: 'Preliminary Judging', description: 'Judges review submitted projects' },
    { date: 'July 5, 2024', event: 'Finalist Announcement', description: 'Top 10 teams announced via email' },
  ];

  const googleMeets = [
    { date: 'October 31, 2024', event: 'Hackathon Kickoff', description: 'Introduction to the hackathon, rules, and Q&A session' },
    { date: 'November 01, 2024', event: 'Tech Talk: AI in Web Development', description: 'Guest speaker discusses integrating AI into web applications' },
    { date: 'November 02, 2024', event: 'Project Progress Check-in', description: 'Teams share their progress and get feedback from mentors' },
  ];

  const dDayEvents = [
    { time: '9:00 AM', event: 'Welcome Address', description: 'Opening remarks from the organizers' },
    { time: '10:00 AM', event: 'Finalist Presentations', description: 'Top 10 teams present their projects to the judges' },
    { time: '1:00 PM', event: 'Lunch Break', description: 'Networking opportunity for participants and judges' },
    { time: '2:00 PM', event: 'Keynote Speaker', description: 'Industry leader shares insights on technology trends' },
    { time: '3:00 PM', event: 'Awards Ceremony', description: 'Winners announced and prizes awarded' },
    { time: '4:00 PM', event: 'Closing Remarks', description: 'Thank you address and future event announcements' },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Event Schedule
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          From Preparation to Celebration
        </Typography>
        
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Pre-Event Timeline
          </Typography>
          <List>
            {preDayEvents.map((event, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={event.event}
                    secondary={
                      <React.Fragment>
                        <Typography component="span" variant="body2" color="text.primary">
                          {event.date}
                        </Typography>
                        {" — " + event.description}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {index < preDayEvents.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Google Meet Sessions
          </Typography>
          <Grid container spacing={2}>
            {googleMeets.map((meet, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={2} sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <VideocamIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h4">
                      {meet.event}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {meet.date}
                  </Typography>
                  <Typography variant="body1">
                    {meet.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            D-Day Schedule (November 02, 2024)
          </Typography>
          <List>
            {dDayEvents.map((event, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={event.event}
                    secondary={
                      <React.Fragment>
                        <Typography component="span" variant="body2" color="text.primary">
                          {event.time}
                        </Typography>
                        {" — " + event.description}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {index < dDayEvents.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Paper>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Important Notes
          </Typography>
          <Typography variant="body1" paragraph>
            • All times are in East Africa Time (EAT)
          </Typography>
          <Typography variant="body1" paragraph>
            • Google Meet links will be sent to registered participants via email
          </Typography>
          <Typography variant="body1" paragraph>
            • Finalists will receive detailed instructions for the D-Day presentations
          </Typography>
          <Typography variant="body1" paragraph>
            • Don't forget to prepare your project demonstrations for the final event!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Schedule;
