import React, { useId } from "react";
import "./inputbox.css"


function InputBox({
    className  = "",
    innerdiv1 = "",
    innerdiv2 = "",
    label, 
    amount,
    onAmountChange,
    currencyOptions = [],
    selectCurrency = "usd",
    onCurrencyChange,
    amountdisable
}){
  const amountInputId = useId();
    return (
       <div className = {className}>
          <div className={innerdiv1}>
           <label htmlFor={amountInputId}> {label}</label>
            <input type="number"
            value={amount}
            onChange={(e) => onAmountChange  && onAmountChange(Number(e.target.value))}
            disabled = {amountdisable}
            id={amountInputId}
            />
            </div>
            <div className={innerdiv2}> 
            <label >Currency</label>
            <select 
              value={selectCurrency}
              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            >
              {currencyOptions.map((currency) =>(
                                  <option key={currency} value={currency}>{currency}</option>

              ))}


            </select>
          </div>

       </div>

    )
}
export default InputBox;