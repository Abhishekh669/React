import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const[data, setData] = useState({});
    useEffect( ()=>{ // this useeffect is loaded automatically when the page is opened and if the change occurs in the any of its dependcies then it will again be called
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((response)=>setData(response[currency]))
        
        
    }, [currency])
    
    return data;

}
 export default useCurrencyInfo;