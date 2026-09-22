import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import MealSection from './components/MealSection'
import TdeeForm from './components/TdeeForm'
import EditGoalModal from './components/EditGoalModal'
import AddFood from './components/AddFood'
import CalorieRing from './components/CalorieRing'


function App() {
  const [calorieGoal, setCalorieGoal] = useState(0);
  const [foods, setFoods] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const caloriesEaten = foods.reduce((sum, food) => sum + Number(food.calories), 0);
  const totalProtein = foods.reduce((sum, food) => sum + Number(food.protein), 0);
const totalCarbs = foods.reduce((sum, food) => sum + Number(food.carbs), 0);
const totalFat = foods.reduce((sum, food) => sum + Number(food.fat), 0);
const [isEditOpen, setIsEditOpen] = useState(false);

  function handleAddFood(newFood) {
    setFoods([...foods, newFood]);
  }

  function handleOpenModal(category) {
    setSelectedCategory(category);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
  setIsModalOpen(false);
}

function handleCloseEdit() {
  setIsEditOpen(false);
}

return (
  <div className="min-h-screen bg-zinc-50 pb-10">
    <Header />
    <TdeeForm onCalculate={setCalorieGoal} />
    {isEditOpen && <EditGoalModal currentGoal={calorieGoal} onUpdateGoal={setCalorieGoal} onClose={handleCloseEdit} />}
    <CalorieRing caloriesEaten={caloriesEaten} calorieGoal={calorieGoal} />
    <button onClick={() => setIsEditOpen(true)}>Edit Goal</button>
    <div className="max-w-sm mx-auto mt-4 p-4 rounded-2xl bg-zinc-900 text-white flex justify-between text-sm">
      <p>Protein: {totalProtein}g</p>
      <p>Carbs: {totalCarbs}g</p>
      <p>Fat: {totalFat}g</p>
    </div>
    <MealSection MealType="breakfast" foods={foods} onOpenModal={handleOpenModal} />
    <MealSection MealType="lunch" foods={foods} onOpenModal={handleOpenModal} />
    <MealSection MealType="dinner" foods={foods} onOpenModal={handleOpenModal} />
    <MealSection MealType="snack" foods={foods} onOpenModal={handleOpenModal} />
    {isModalOpen && <AddFood selectedCategory={selectedCategory} onAddFood={handleAddFood} onClose={handleCloseModal} />}
  </div>
);
}

export default App