import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import {useState} from 'react';


function App() {

  const [counter, setCount] = useState([<Counter></Counter>])

  return (
    <div className="App">
      <button onClick={()=>{
        setCounter(counter.concat(<Counter></Counter>))
        console.log(counter);
      }}></button>
    </div>
  );
}

export default App;
