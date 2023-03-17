import React,{useState} from 'react';
import './App.css';

function App() {

  const [name,setName] = useState("Ajay");
  const [flag,setFlag] = useState(false);
  const [steps,setSteps] = useState(0);
  const [names,setNames] = useState([]);
  function changename() {
    console.log("clicked!");
    return setFlag(!flag);
  }
  function increment() {
    setSteps((prevState)=> prevState + 1);
    setSteps((prevState)=> prevState + 1);
    
  }
  function decrement() {
    return setSteps(steps - 1);
  }
  function addNames(e) {
   e.preventDefault();
   setNames([...names,{ id:names.length,name}])
   setName("");
  }



  return (
    <div className="App">
      <h1>hello {flag ? name:""}</h1>
      <button onClick={changename}>click</button>
      <hr></hr>

      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>

      <hr></hr>

      <form onSubmit={addNames}>
        <input type="text" value={name} placeholder="add name" onChange={ (e) => setName(e.target.value)}/>
        <button>submit</button>
      </form>
      <hr></hr>
      <ul>
        {names.map((item)=>(
          <li key ={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
