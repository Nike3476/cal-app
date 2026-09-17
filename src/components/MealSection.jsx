function MealSection({ MealType, foods, onOpenModal }) {
  return (
    <div>
      {foods.filter(food => food.category === MealType).map((food, index) =>
        <li key={index}>{food.name} - {food.calories}</li>
      )}
      <button onClick={() => onOpenModal(MealType)}>Add</button>
    </div>
  );
}

export default MealSection