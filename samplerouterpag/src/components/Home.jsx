import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, CircularProgress, Box } from '@mui/material';

function Home() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Simulating data fetching with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="h6">Count: {count}</Typography>
      )}
      <Button variant="contained" onClick={increment} sx={{ marginBottom: 2 }}>
        Increment
      </Button>
      
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Follow us on Social Media:
        </Typography>
        <Button 
          variant="outlined" 
          color="primary" 
          href="https://www.youtube.com" 
          target="_blank" 
          sx={{ marginRight: 2 }}
        >
          YouTube
        </Button>
        <Button 
          variant="outlined" 
          color="secondary" 
          href="https://www.instagram.com" 
          target="_blank"
        >
          Instagram
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
