import { useState } from "react"

function MealSection({meals, setMeals, mealType}) {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");

    function AddMeal() {
        setMeals(m => [...m, {id: Date.now(), name, calories: Number(calories), mealType: "breakfast"}]);
        setName("");
        setCalories("");
    }

    function deleteMeal(id) {
        setMeals(m => m.filter(meal => meal.id !== id));
    }

    return (
        <div>
            <p>{mealType}</p>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Food name"/>
            <input value={calories} onChange={e => setCalories(e.target.value)} placeholder="calories"/>
            <button onClick={AddMeal}>Add</button>

            {meals.filter(meal => meal.mealType === mealType).map(meal => (
        <div key={meal.id}>
        <p>{meal.name} — {meal.calories} cal</p>
        <button onClick={() => DeleteMeal(meal.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default MealSection