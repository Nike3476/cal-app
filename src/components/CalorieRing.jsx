import { useState } from "react"
function CalorieRing({consumed, goal, protein, fat, carbs}) {
    return (
        <div>
            <p>{consumed}/{goal}</p>
            <p>Eaten today: {consumed}</p>

        </div>
    )
}

export default CalorieRing