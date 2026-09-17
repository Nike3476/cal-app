import MealCard from "./MealCard";
function MealsList ({meals}) {
    return(
        <div>
            {meals.map((oneMeal, index) => (
                <MealCard 
                key={index}
                name={oneMeal.name}
                calories={oneMeal.calories}
                />
            ))}
        </div> 
        
    );
}

export default MealsList;