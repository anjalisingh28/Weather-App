import { useState } from 'react'
import './App.css'
import Weather from './Weather/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='App'>
        <Weather/>
       </div>
    </>
  )
}

export default App
