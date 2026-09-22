// function MealSection({ MealType, foods, onOpenModal }) {
//   return (
//     <div>
//       {foods.filter(food => food.category === MealType).map((food, index) =>
//         <li key={index}>{food.name} - {food.calories}</li>
//       )}
//       <button onClick={() => onOpenModal(MealType)}>Add</button>
//     </div>
//   );
// }

// export default MealSection

function MealSection({ MealType, foods, onOpenModal }) {
  return (
    <div className="max-w-sm mx-auto mt-4 rounded-2xl border border-zinc-100 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <h3 className="text-[15px] font-semibold capitalize">{MealType}</h3>
        <button onClick={() => onOpenModal(MealType)}
          className="h-8 px-3 rounded-full bg-zinc-900 text-white text-xs font-medium hover:bg-black transition">
          Add
        </button>
      </div>
      {foods.filter(food => food.category === MealType).map((food, index) =>
        <div key={index} className="flex items-center justify-between px-4 py-2 border-t border-zinc-50">
          <p className="text-sm">{food.name}</p>
          <span className="text-sm font-semibold">{food.calories} cal</span>
        </div>
      )}
    </div>
  );
}

export default MealSection