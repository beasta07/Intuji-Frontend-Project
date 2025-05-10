import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/LogIn'
import Sidebar from './components/ForDashboard/Sidebar'
import Layout from './components/Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout/>
    </>
  )
}

export default App
