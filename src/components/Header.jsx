import Img from '../assets/investment-calculator-logo.png'
export default function Header()
{
    return(
        <div id="header">
            <img src={Img} alt="investment-logo" />
            <h1>Investment Calculator</h1>
            <h4>Check the Power of Compounding Effect</h4>
        </div>
    );
}