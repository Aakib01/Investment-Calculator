import { useState } from "react";

export default function UserInput({onValueChange, inputData}) {

 function handleOnValueChange(event)
 {
     onValueChange(event.target.name,event.target.value);
 }

  return (
    <section id="user-input">
      <div className = "input-group">
        <p>
        <label>Monthly Investment</label>
            <input name="initialInvestment"  type="number" required value ={inputData.initialInvestment} onChange={handleOnValueChange}/>
        
        </p>
        {/* <p>
        <label>Annual Investment</label>
            <input name="annualInvestment" type="number" required value ={inputData.annualInvestment} onChange={handleOnValueChange}/>
        </p> */}
                
      </div>
      <div className = "input-group">
      <p>
      <label>Expected Return</label>
            <input name="expectedReturn" type="number" required value ={inputData.expectedReturn} onChange={handleOnValueChange}/>
        </p>
        <p>
        <label>Duration</label>
            <input name="duration" type="number" required value ={inputData.duration} onChange={handleOnValueChange}/>
        </p>
      </div>
      
    </section>
  );
}
