import React from "react";

function DetailComponent({ meal, onClose }) {
  return (
    <div className="detail-popup">
      <div className="popup-content">
        {/* Stängningsknappen */}
        <button onClick={onClose} className="close-button" aria-label="Close">
          &times;
        </button>

        {/* Popup-innehåll, t.ex. bild och information om maträtten */}
        <img src={meal.strMealThumb} alt={meal.strMeal} className="popup-image" />
        <h2>{meal.strMeal}</h2>
        <p>{meal.strInstructions}</p>
        {/* Du kan lägga till mer information här om du vill */}
      </div>
    </div>
  );
}

export default DetailComponent;

