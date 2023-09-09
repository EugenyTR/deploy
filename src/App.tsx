import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);


  return (
    <div>
      <h1>value = {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <div style={{ display: 'flex', gap: 15 }}>
        <Link to={'about'}>about</Link>
        <Link to={'welcome'}>Welcome</Link>
      </div>
    </div>
  )
}

export default App
