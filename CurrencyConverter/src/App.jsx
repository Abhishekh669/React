import "./index.css"
import './App.css'
import useCurrencyInfo from "../hooks/currencyconveterinfo"
import InputBox from "../components/Inputbox"
import { useState } from "react";





function Appp() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");  
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () =>{
    setFrom(to);
    setTo(from);
    setAmount(0);
    setConvertedAmount(0);
  }
  const  convert = () =>{
    setConvertedAmount(amount * currencyInfo[to]);

  }

  return (
    <>
     <form 
     onSubmit={
        (e) =>{
          e.preventDefault();
          convert();
        }
     }>
     <div id="screen">
          <div id="main-box">
            {/* from currency  */}
             <InputBox className= "from-currency"  innerdiv1 = "inputamount"  innerdiv2 = "inputcurrency" label = "From" 
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) =>setAmount(amount)}
                selectCurrency={from}
                onAmountChange={ (amo) => setAmount(amo)}
             />
             <button id="swap" onClick={swap}>Swap</button>
             <InputBox  className="to-currency" innerdiv1 = "outputamount" innerdiv2 = "outputcurrency" label = "To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
             />
             <button id="convert">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>
      </div>
     </form>
    </>
  )
}

export default Appp
