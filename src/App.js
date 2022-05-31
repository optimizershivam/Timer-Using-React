// import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';
import React,{useState} from 'react'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <button onClick={()=> setShow(false)}>Timer</button>
      <button onClick={() => setShow(true)}>Stopwatch</button>
      <div>
        {show ? <Stopwatch/>:<Timer/>}
      </div>
    </div>
  );
}

export default App;
