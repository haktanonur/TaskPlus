import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodoComponent from '../components/ListTodoComponent'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      <ListTodoComponent />
      <FooterComponent />
    </>
  )
}

export default App
