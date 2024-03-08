function ListComponent({ meals, onSelectMeal }) {
  if (!meals || meals.length === 0) {
    return <p></p>;
  }

  return (
    <div>
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          onClick={() => onSelectMeal(meal)}
          style={{
            cursor: "pointer",
            ":hover": {
              backgroundColor: "#f5f5f5",
            },
            // Eventuella andra stilar eller anpassningar
          }}
        >
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h3>{meal.strMeal}</h3>
          {/* Gör hela elementet klickbart och anropa onSelectMeal när det klickas */}
        </div>
      ))}
    </div>
  );
}

export default ListComponent;

