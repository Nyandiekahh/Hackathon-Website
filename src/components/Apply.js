import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Snackbar } from '@mui/material';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectTitle: '',
    projectDescription: '',
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbarOpen(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      projectTitle: '',
      projectDescription: '',
    });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Apply for Hackathon 2024
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          Submit Your Project Proposal
        </Typography>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Project Title"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Project Description"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              multiline
              rows={4}
              margin="normal"
            />
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <Button type="submit" variant="contained" color="primary" size="large">
                Submit Application
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Application submitted successfully!"
      />
    </Container>
  );
};

export default Apply;