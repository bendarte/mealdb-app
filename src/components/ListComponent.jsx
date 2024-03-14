import React from "react";
import { Grid, Typography } from "@mui/material";

function ListComponent({ meals, onSelectMeal }) {
  if (!meals || meals.length === 0) {
    return <p></p>;
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      {meals.map((meal) => (
        <Grid item key={meal.idMeal}>
          <div
            onClick={() => onSelectMeal(meal)}
            style={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
              width: "120px", // justera bredden
              marginBottom: "20px",
            }}
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "100%" }} />
            <Typography variant="h6" style={{ textAlign: "center" }}>
              {meal.strMeal}
            </Typography>
            {/* Gör hela elementet klickbart och anropa onSelectMeal när det klickas */}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default ListComponent;


