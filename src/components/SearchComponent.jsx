import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Sök efter en maträtt..."
        />
      </Grid>
      <Grid item>
        <Button onClick={handleSearch} variant="contained" color="primary" size="large">
          Sök
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchComponent;

