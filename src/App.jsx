import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

const DATA = {
  initialInvestment: 1000,
  expectedReturn:10,
  duration: 10,
};

function App() {
  let [inputValues, setResult] = useState(DATA);

  const inputIsValid =  inputValues.duration >=1 ;
  function handleOnChange(name, value) {
    setResult((prevValue) => {
      return {
        ...prevValue,
        [name]: +value,
      };
    });
    
  }

  
  return (
    <>
      <Header />
      <UserInput onValueChange={handleOnChange} inputData={inputValues} />
      {!inputIsValid && <p className="center">Please enter valid input data</p>}
      {inputIsValid && <Result inputData={inputValues} />}
    </>
  );
}

export default App;
