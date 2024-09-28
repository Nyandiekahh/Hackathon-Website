import React, { useState, useCallback } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Snackbar } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';

const Apply = () => {
  const [state, handleSubmit] = useForm("mvgpeayl");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleSuccessfulSubmission = useCallback(() => {
    if (state.succeeded) {
      setSnackbarOpen(true);
    }
  }, [state.succeeded]);

  React.useEffect(() => {
    if (state.succeeded) {
      handleSuccessfulSubmission();
    }
  }, [state.succeeded, handleSuccessfulSubmission]);

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
              required
              margin="normal"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              required
              margin="normal"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <TextField
              fullWidth
              label="Project Title"
              name="projectTitle"
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Project Description"
              name="projectDescription"
              required
              multiline
              rows={4}
              margin="normal"
            />
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <Button type="submit" variant="contained" color="primary" size="large" disabled={state.submitting}>
                Submit Application
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Application submitted successfully! See you on the other side...Good luck!"
      />
    </Container>
  );
};

export default Apply;
