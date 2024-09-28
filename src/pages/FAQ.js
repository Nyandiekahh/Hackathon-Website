import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqs = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is an event where programmers, designers, and other tech enthusiasts come together to collaborate on software projects within a limited time frame, usually 24-48 hours."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with an interest in technology and innovation can participate. We welcome students, professionals, and hobbyists alike. Teams should have between 2 to 4 members."
    },
    {
      question: "Do I need to be an experienced programmer?",
      answer: "Not at all! We welcome participants of all skill levels. Hackathons are great opportunities to learn and collaborate with others."
    },
    {
      question: "What are the prizes?",
      answer: "The total prize pool is Ksh 90,000. First place receives Ksh 50,000, second place Ksh 30,000, and third place Ksh 10,000."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and any other devices or equipment you might need. We'll provide food, drinks, and a workspace."
    },
    {
      question: "Is there a code of conduct?",
      answer: "Yes, we have a code of conduct that all participants must adhere to. It ensures a respectful and inclusive environment for everyone. You can find it on our website."
    },
    {
      question: "Can I start working on my project before the event?",
      answer: "No, all coding and design work should be done during the hackathon. You can, however, come with ideas and plans."
    },
    {
      question: "How are projects judged?",
      answer: "Projects are judged based on creativity, technical difficulty, polish, and usefulness. Our panel of judges includes industry experts and sponsors."
    },
    {
      question: "Is there a theme or specific problem to solve?",
      answer: "We'll announce specific challenges at the start of the event, but you're also free to work on any project that interests you."
    },
    {
      question: "What happens to the intellectual property of the projects?",
      answer: "You retain all rights to your project. We encourage open-source development, but it's not mandatory."
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Frequently Asked Questions
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          Everything You Need to Know About Hackathon 2024
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Still Have Questions?
          </Typography>
          <Typography variant="body1" paragraph>
            If you couldn't find the answer to your question here, please don't hesitate to reach out to us at support@hackathon2024.com. We're here to help!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default FAQ;