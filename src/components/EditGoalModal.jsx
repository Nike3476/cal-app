import { useState } from "react";

function EditGoalModal({ currentGoal, onUpdateGoal, onClose }) {
  const [newGoal, setNewGoal] = useState(currentGoal);

  // return (
  //   <div>
  //     <input type="number" value={newGoal} onChange={e => setNewGoal(e.target.value)} />
  //     <button onClick={() => onUpdateGoal(Number(newGoal))}>Save</button>
  //   </div>
  // );

  return (
  <div className="max-w-sm mx-auto mt-4 p-5 rounded-2xl border border-zinc-100 bg-white shadow-sm flex items-center gap-3">
    <button onClick={onClose}>×</button>
    <input type="number" value={newGoal} onChange={e => setNewGoal(e.target.value)}
      className="flex-1 h-11 rounded-xl border border-zinc-200 px-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-zinc-900" />
    <button onClick={() => { onUpdateGoal(Number(newGoal)); onClose(); }}
      className="h-11 px-5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-black transition">
      Save
    </button>
  </div>
);
}

export default EditGoalModal;