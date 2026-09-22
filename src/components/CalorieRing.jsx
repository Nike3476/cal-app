import { useState } from "react"
function CalorieRing({caloriesEaten, calorieGoal}) {
    const percentage = calorieGoal > 0 ? caloriesEaten / calorieGoal : 0;
    const isOverGoal = caloriesEaten > calorieGoal;



    return (
  <div className="max-w-sm mx-auto mt-6 p-5 rounded-2xl border border-zinc-100 bg-white shadow-sm flex items-center gap-5">
    <svg width="150" height="150">
      <circle cx="75" cy="75" r="60" stroke="#e5e5e5" strokeWidth="10" fill="none" />
      <circle
        cx="75" cy="75" r="60"
        stroke={isOverGoal ? "#ef4444" : "#18181b"}
        strokeWidth="10" fill="none"
        strokeDasharray={2 * Math.PI * 60}
        strokeDashoffset={2 * Math.PI * 60 * (1 - percentage)}
      />
    </svg>
    <p className="text-sm font-medium text-zinc-600">{caloriesEaten} / {calorieGoal} cal</p>
  </div>
);
}

export default CalorieRing