import Img from '../assets/investment-calculator-logo.png'
export default function Header()
{
    return(
        <div id="header">
            <img src={Img} alt="investment-logo" />
            <h1>Investment Calculator</h1>
        </div>
    );
}