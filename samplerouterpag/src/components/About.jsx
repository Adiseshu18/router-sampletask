import React from 'react';
import { Container, Typography } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        This is a simple app built with React, MUI, and React Router DOM. It demonstrates basic usage of state, effect hooks, and routing.
      </Typography>
    </Container>
  );
}

export default About;
