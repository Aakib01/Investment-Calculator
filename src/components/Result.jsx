import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ inputData }) {
  const derivedResult = calculateInvestmentResults(inputData);
  console.log(derivedResult);
  
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Capital</th>
          <th>Total Interest</th>        
          <th>Investment Value</th>
          <th>Interest for that Year</th>         
        </tr>
      </thead>
      <tbody>
        {derivedResult.map(
          ({ year, interest, valueEndOfYear,totalInterest }) => {            
            const totalAmountInvested = valueEndOfYear - totalInterest;
            return (
              <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
                <td>{formatter.format(totalInterest)}</td>                
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>         
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}
