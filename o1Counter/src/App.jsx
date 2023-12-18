import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   var [counter, setCounter] = useState(0); //here the variable named counter is  created with its value 10 and setcounter is the function
   var [userValue, setUserValue] = useState(0); //here the variable named counter is  created with its value 10 and setcounter is the function

  const IncreaseValue = () =>{
    if(counter < 20){
      setCounter((x) =>{ return x + 1});
    

    }else{
      alert("20 is the max number")
    }

    
  }

  const DecreaseValue = ()=>{
    if(counter > 0){
      setCounter(counter - 1);

    }
    
  }
  const Submit = () =>{
    let user_value = Number(document.getElementById("input-num").value);
   
    setUserValue(user_value);
    if(user_value < 20){

      setCounter(user_value)
    }
    else{
      alert("plz enter below 20");
      document.getElementById("input-num").value = ""
    }
  }

  return (
    <>
     <h1>React started</h1>
     <h2>Counter value : {counter}</h2>
     <input type="text" id='input-num' /> 
     <button onClick={Submit}>Make it</button> <br />
     <button onClick={IncreaseValue}>Increment</button>
     <button onClick={DecreaseValue}>Decrement</button>

    </>
  )
}

export default App;
 