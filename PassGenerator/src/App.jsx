import { useState, useCallback, useEffect, useRef} from "react"


function App() {
  const [length , setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // using the useref() hook 
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( ()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed){ str += "1234567890"}
    if(charAllowed){ str += "!@#$%^&*()[]{}_+=`~"}
    for(let i = 0; i < length; i++){
      console.log("length is {length",length)
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);
  const copyPassword = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101   );
    window.navigator.clipboard.writeText(password);
  }, [password])
  
  useEffect( () =>{ passwordGenerator()}, [length, numAllowed, charAllowed, setPassword, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500
      bg-gray-800">
      <h1 className="text-4xl text-center text-white mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hideden mb-4">
          <input type="text" 
          value={password}
          className="outline-none w-full py-1 px-3 mb-4 rounded-l-lg "
          placeholder="Password"
          readOnly
          ref = {passwordRef}
          />
          <button  
          onClick={copyPassword}
          className=" h-9 outline-none rounded-r-lg bg-blue-700  text-white
           px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 mb-5">
            <input type="range"
            min = {8}
            max = {100}
            value={length}
            className="  cursor-pointer mr-3 "
            onChange={(e) =>
              
              setLength(Number(e.target.value))}
              
            />
            <label className="mr-1" >Length : {length}</label>
          </div>
          <div className=" ">
            <input type="checkbox"
            defaultChecked = {numAllowed}
            id="numberInput"
            className="mr-1"
            onChange={ () => {setnumAllowed( (prev) => !prev)}} />
            <label htmlFor="numberInput" >Number</label>
          </div>
          <div className=" ">
            <input type="checkbox"
            defaultChecked = {charAllowed}
            id="characterInput"
            className="mr-1"
            onChange={ () =>setCharAllowed( (prev) => !prev)} />
            <label htmlFor="characterInput" >Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
