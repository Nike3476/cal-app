import { useState } from "react"

function TdeeForm({ onCalculate }) {
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("");
    const [activity, setActivity] = useState("");
    const [tdeeResult, setTdeeResult] = useState(0);



    // formula to calcualte BMR for male and female
    function BMR() {
        if (gender === "male") { // if gender is male use this formula
            return(
            10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5
        )
        } else { // if gender isnt male use this formula - female
            return(
                10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) -161
            )
        }

    }

    // this formula is for different levels of activity- here we say if the activity is equal to "" return this
     function ActivityMultiplier() {
        if (activity === "sedentary") {
            return  1.2; 
        } else if (activity === "light") {
            return 1.375;
        } else if (activity === "moderate") {
            return 1.55;
        } else if (activity === "active") {
            return 1.725;
        } else if (activity === "very active") {
            return 1.9;
        }
    }



    return (
        <div>
            <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Enter age"/>
            <p value={age}>age: {age}</p>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="Enter height"/>
            <p value={height}>height: {height}cm</p>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Enter weight"/>
            <p value={weight}>weight: {weight}kg</p>
            <select value={gender} onChange={e => setGender(e.target.value)}>
                <option>male</option>
                <option>female</option>
            </select>
            <select value={activity} onChange={e => setActivity(e.target.value)}>
                <option>
                    sedentary
                </option>
                <option>
                    light
                </option>
                <option>
                    moderate
                </option>
                <option>
                    active
                </option>
                <option>
                    very active
                </option>
            </select>

            <p>{tdeeResult}</p>
<button onClick={() => {
  const result = Math.round(BMR() * ActivityMultiplier());
  setTdeeResult(result);
  onCalculate(result);
}}>BMR</button>
            {/* this button performs the function of settdeeresult which says multiply bmr and acitvity multiplier */}
        </div>
    )
}

export default TdeeForm