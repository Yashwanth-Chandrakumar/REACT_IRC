import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function FourColoredCards() {
  const cardColors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33']; // You can customize the colors

  return (
    <Grid container spacing={2}>
      {cardColors.map((color, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card style={{ backgroundColor: color }}>
            <CardContent>
              <Typography variant="h5" component="div" style={{ color: 'white' }}>
                Card {index + 1}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                This is some content for the card.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default FourColoredCards;
