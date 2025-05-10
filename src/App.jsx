
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout/Layout'
import Login from './components/LogIn';

function App() {
  return (
 <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  )
}

export default App
