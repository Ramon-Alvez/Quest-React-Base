import { useState } from 'react'
import './App.css'
import Paragraph from './components/paragraph/paragraph.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Paragraph />
    </>
  )
}

export default App
