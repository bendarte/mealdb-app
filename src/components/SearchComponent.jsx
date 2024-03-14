import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SearchComponent = ({ onSearch, onRandom }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleRandom = () => {
    onRandom();
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
          placeholder="Search for a dish..."
        />
      </Grid>
      <Grid item>
        <Button onClick={handleSearch} variant="contained" color="primary">
          Search
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={handleRandom} variant="contained" color="primary">
          Random
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchComponent;



