function MealCard ({name, calories}) {
    return(
        <div className="meal-card">
            <p className="meal-card-name">{name}</p>
            <p className="meal-card-cal">{calories} kcal</p>
        </div>
    )
}                                                                                          

export default MealCard;