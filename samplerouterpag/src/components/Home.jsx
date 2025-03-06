import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, CircularProgress } from '@mui/material';

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
      <Button variant="contained" onClick={increment}>
        Increment
      </Button>
    </Container>
  );
}

export default Home;
