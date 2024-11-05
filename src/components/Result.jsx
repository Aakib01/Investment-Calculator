import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ inputData }) {
  const derivedResult = calculateInvestmentResults(inputData);
  console.log(derivedResult);
  const initialInvestment =
      derivedResult[0].valueEndOfYear -
      derivedResult[0].interest -
      derivedResult[0].annualInvestment;
  
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {derivedResult.map(
          ({ year, interest, valueEndOfYear, annualInvestment }) => {
            const totalInterest =
              valueEndOfYear - annualInvestment * year - initialInvestment;
            const totalAmountInvested = valueEndOfYear - totalInterest;
            return (
              <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}
