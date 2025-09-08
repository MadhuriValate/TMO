import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('')

  return (
    <>
    <div>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder='Enter something' />
      {!input && <button></button>}</div></>)
}

export default App
