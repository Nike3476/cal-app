


import './App.css'
import DailyRing from './components/DailyRing.jsx'
import MealCard from './components/MealCard.jsx';
import MealsList from './components/MealsList.jsx';

function App () {
  const meals = [
    {name: "jollof rice", calories: 650},
    {name: "Eba and egusi", calories: 800},
    {name: "fried rice", calories: 700}
  ];
  return (
    <>
<DailyRing 
goal={2200}
consumed={1000}/>

<MealsList 
meals={meals} />
</>
  )
}
export default App;
