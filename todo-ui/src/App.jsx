import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodoComponent from '../components/ListTodoComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListTodoComponent />
    </>
  )
}

export default App
