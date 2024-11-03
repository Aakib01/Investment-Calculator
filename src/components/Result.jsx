
import { formatter } from "../util/investment";
export default function Result({ value,initialInvestment }) {
    
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
        
        {value.map(({year,interest,valueEndOfYear,annualInvestment}) => {
            const totalInterest =
            valueEndOfYear -
            annualInvestment * year -
            initialInvestment;
          const totalAmountInvested = valueEndOfYear - totalInterest;
          return(
          <tr key={year}>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
          )
})}
      </tbody>
    </table>
  );
}
