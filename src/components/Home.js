// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Typography, Paper, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';

const HomePage = () => {
  const [catData, setCatData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1');
        const data = await response.json();
        setCatData(data[0]);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Paper elevation={3} style={{ padding: 20, width: '80%', maxWidth: 400 }}>
          <Typography variant="h4" gutterBottom>
            Random Cat Page
          </Typography>
          {catData && (
            <Card>
              <CardMedia component="img" height="300" image={catData.url} alt="Random Cat" />
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  Cat ID: {catData.id}
                </Typography>
                
              </CardContent>
            </Card>
          )}
        </Paper>
      )}
    </div>
  );
};

export default HomePage;
