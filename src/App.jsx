import React, { useState } from "react";
import {
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Grid,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import SearchComponent from './components/SearchComponent';
import ListComponent from "./components/ListComponent";
import DetailComponent from './components/DetailComponent';

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: orange[500],
      },
    },
  });

  const [searchResults, setSearchResults] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = async (searchTerm) => {
    setShowPopup(false);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.meals === null) {
        setShowPopup(true);
      } else {
        setSearchResults(data.meals);
        setSelectedMeal(null);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const onSelectMeal = (meal) => {
    setSelectedMeal(meal);
    setShowPopup(false);
  };

  const onCloseDetail = () => {
    setSelectedMeal(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h2" color="primary">
            Moe's Matapp
          </Typography>
        </Grid>
        <Grid item>
          <SearchComponent onSearch={handleSearch} />
        </Grid>
        <Grid item>
          {!selectedMeal && !showPopup && (
            <ListComponent meals={searchResults} onSelectMeal={onSelectMeal} />
          )}
          {selectedMeal && (
            <DetailComponent meal={selectedMeal} onClose={onCloseDetail} />
          )}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup">
                <p>Inga maträtter hittades.</p>
                <button onClick={() => setShowPopup(false)}>OK</button>
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
