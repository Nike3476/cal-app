function DailyRing ( {consumed, goal} ) {
    const left = goal - consumed;
    return (
        <div className="cal">
            <h1 className="ring">{consumed}</h1>
            <p className="kcal">kcal consumed</p>
            
            <p className="pill">{left} left</p>
            <p className="text">Daily goal: {goal}kcal</p>
        </div>
    )
}

export default DailyRing;