
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
    {/* WE USE OUTLET TO RENDER THE CHILDREN */}
    <Outlet/>
 
    </>
  )
}

export default App
