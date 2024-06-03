import React from 'react';
import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography variant="h6" fontWeight="bold" fontSize="2.2rem">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span id="popcorn" style={{ color:theme.palette.primary.main }}>POPCORN</span>
      </Link>
    </Typography>
  );
};

export default Logo;
