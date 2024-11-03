import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

const DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  let [result, setResult] = useState(DATA);

  function handleOnChange(name, value) {
    setResult((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    
  }

  const derivedResult = calculateInvestmentResults(result);
    console.log(derivedResult);
    const inputIsValid = result.duration >= 1;
    let initialInvestment = null;
    if(inputIsValid)
    {
     initialInvestment =
    derivedResult[0].valueEndOfYear -
    derivedResult[0].interest -
    derivedResult[0].annualInvestment;
    }
  return (
    <>
      <Header />
      <UserInput onValueChange={handleOnChange} initialData={result} />
      {derivedResult && <Result value={derivedResult} initialInvestment ={initialInvestment} />}
    </>
  );
}

export default App;
