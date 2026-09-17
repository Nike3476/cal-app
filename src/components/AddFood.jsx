import { useState } from "react"

function AddFood({ selectedCategory, onAddFood }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");
  const [weight, setWeight] = useState(0);
  const [activeTab, setActiveTab] = useState("scan");

  function handleSave() {
    const newFood = { name, calories, protein, carbs, fat, weight, category: selectedCategory };
    onAddFood(newFood);
  }

  return (
    <div>
      <button onClick={() => setActiveTab("manual")}>Manual</button>
      <button onClick={() => setActiveTab("scan")}>Scan</button>

      {activeTab === "manual" ? (
        <div>
          <input value={name} type="text" onChange={e => setName(e.target.value)} />
          <input value={calories} type="number" onChange={e => setCalories(e.target.value)} />
          <input value={protein} type="number" onChange={e => setProtein(e.target.value)} />
          <input value={carbs} type="number" onChange={e => setCarbs(e.target.value)} />
          <input value={fat} type="number" onChange={e => setFat(e.target.value)} />
          <input value={weight} type="number" onChange={e => setWeight(e.target.value)} />
        </div>
      ) : (
        <div>
          <button onClick={() => {
            setName("Jollof Rice");
            setCalories(400);
            setProtein(8);
            setCarbs(70);
            setFat(10);
            setWeight(300);
          }}>Scan Food</button>
        </div>
      )}

      <button onClick={handleSave}>Add Food</button>
    </div>
  );
}

export default AddFood