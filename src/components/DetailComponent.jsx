import React from "react";
import { Paper, Typography, Button } from "@mui/material";

const popupStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: 999,
};

const contentStyle = {
  width: "80%",
  padding: "16px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  position: "relative",
};

const closeButtonStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
  fontSize: "50px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

function DetailComponent({ meal, onClose }) {
  return (
    <div style={popupStyle}>
      <Paper style={contentStyle}>
        {/* Stängningsknappen */}
        <Button
          onClick={onClose}
          style={closeButtonStyle}
          aria-label="Close"
          size="50px"
        >
          &times;
        </Button>

        {/* Popup-innehåll, t.ex. bild och information om maträtten */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: "1" }}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={imageStyle}
            />
          </div>
          <div style={{ flex: "1", marginLeft: "16px" }}>
            <Typography variant="h2" color="primary">
              {meal.strMeal}
            </Typography>
            <Typography variant="body1" color="primary">
              {meal.strInstructions}
            </Typography>
            {/* Du kan lägga till mer information här om du vill */}
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default DetailComponent;
