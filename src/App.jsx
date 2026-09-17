import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import MealSection from './components/MealSection'
import TdeeForm from './components/TdeeForm'
import EditGoalModal from './components/EditGoalModal'
import AddFood from './components/AddFood'

function App() {
  const [calorieGoal, setCalorieGoal] = useState(0);
  const [foods, setFoods] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const caloriesEaten = foods.reduce((sum, food) => sum + Number(food.calories), 0);

  function handleAddFood(newFood) {
    setFoods([...foods, newFood]);
  }

  function handleOpenModal(category) {
    setSelectedCategory(category);
    setIsModalOpen(true);
  }

  return (
    <>
      <Header />
      <TdeeForm onCalculate={setCalorieGoal} />
      <EditGoalModal currentGoal={calorieGoal} onUpdateGoal={setCalorieGoal} />
      <MealSection MealType="breakfast" foods={foods} onOpenModal={handleOpenModal} />
      <MealSection MealType="lunch" foods={foods} onOpenModal={handleOpenModal} />
      <MealSection MealType="dinner" foods={foods} onOpenModal={handleOpenModal} />
      <MealSection MealType="snack" foods={foods} onOpenModal={handleOpenModal} />
      <AddFood selectedCategory={selectedCategory} onAddFood={handleAddFood} />
    </>
  );
}

export default App