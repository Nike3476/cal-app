import { useState } from "react"

function AddFood({ selectedCategory, onAddFood, onClose }) {
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
    onClose();
  }


  return (
  <div className="max-w-sm mx-auto mt-4 p-5 rounded-2xl border border-zinc-100 bg-white shadow-sm">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold">Add to {selectedCategory}</h3>
      <button onClick={onClose}>×</button>
    </div>
    <div className="flex p-1 rounded-full bg-zinc-100 w-fit mb-4">
      <button onClick={() => setActiveTab("manual")}
        className={`px-4 h-8 rounded-full text-xs font-medium transition ${activeTab === "manual" ? "bg-white shadow-sm" : "text-zinc-500"}`}>
        Manual
      </button>
      <button onClick={() => setActiveTab("scan")}
        className={`px-4 h-8 rounded-full text-xs font-medium transition ${activeTab === "scan" ? "bg-white shadow-sm" : "text-zinc-500"}`}>
        Scan
      </button>
    </div>

    {activeTab === "manual" ? (
      <div className="space-y-3">
        <input value={name} type="text" onChange={e => setName(e.target.value)} placeholder="Food name"
          className="w-full h-11 rounded-xl border border-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" />
        <input value={calories} type="number" onChange={e => setCalories(e.target.value)} placeholder="Calories"
          className="w-full h-11 rounded-xl border border-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" />
        <input value={protein} type="number" onChange={e => setProtein(e.target.value)} placeholder="Protein"
          className="w-full h-11 rounded-xl border border-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" />
        <input value={carbs} type="number" onChange={e => setCarbs(e.target.value)} placeholder="Carbs"
          className="w-full h-11 rounded-xl border border-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" />
        <input value={fat} type="number" onChange={e => setFat(e.target.value)} placeholder="Fat"
          className="w-full h-11 rounded-xl border border-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" />
        <input value={weight} type="number" onChange={e => setWeight(e.target.value)} placeholder="Weight (g)"
          className="w-full h-11 rounded-xl border border-zinc-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" />
      </div>
    ) : (
      <button onClick={() => {
        setName("Jollof Rice");
        setCalories(400);
        setProtein(8);
        setCarbs(70);
        setFat(10);
        setWeight(300);
      }} className="w-full rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center text-sm hover:bg-zinc-100 transition">
        Scan Food
      </button>
    )}

    <button onClick={handleSave}
      className="w-full h-11 rounded-full bg-zinc-900 text-white text-sm font-medium mt-4 hover:bg-black transition">
      Add Food
    </button>
  </div>
);
}

export default AddFood