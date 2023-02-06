import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from '@mui/material/Button';
import './App.css'
import { Route,Routes } from 'react-router-dom';


const Comp1 = ()=>{
  return(
    <h1>Component1</h1>
  )  
}

const Comp2 = ()=>{
  return(
    <h1>Component2</h1>
  )  
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <h1>Vite + React</h1>

     </div>

     
  )
}

export default App
