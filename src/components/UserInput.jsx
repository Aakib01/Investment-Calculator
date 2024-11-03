import { useState } from "react";

export default function UserInput({onValueChange, initialData}) {

 const[data,setData] = useState(initialData);
 function handleOnValueChange(event)
 {
    setData(prevData =>
    {
        return{
            ...prevData,
            [event.target.name]:event.target.value,
        };
    }
    );
    onValueChange(event.target.name,event.target.value);

 }
  return (
    <div id="user-input">
      <div className = "input-group">
        <p>
        <label>Initial Investment</label>
            <input name="initialInvestment"  type="number"  value ={initialData.initialInvestment} onChange={handleOnValueChange}/>
        
        </p>
        <p>
        <label>Annual Investment</label>
            <input name="annualInvestment" value ={initialData.annualInvestment} onChange={handleOnValueChange}/>
        </p>
                
      </div>
      <div className = "input-group">
      <p>
      <label>Expected Return</label>
            <input name="expectedReturn" value ={initialData.expectedReturn} onChange={handleOnValueChange}/>
        </p>
        <p>
        <label>Duration</label>
            <input name="duration" value ={initialData.duration} onChange={handleOnValueChange}/>
        </p>
      </div>
      
    </div>
  );
}
