import { useState } from "react";

function EditGoalModal({ currentGoal, onUpdateGoal }) {
  const [newGoal, setNewGoal] = useState(currentGoal);

  return (
    <div>
      <input type="number" value={newGoal} onChange={e => setNewGoal(e.target.value)} />
      <button onClick={() => onUpdateGoal(Number(newGoal))}>Save</button>
    </div>
  );
}

export default EditGoalModal;