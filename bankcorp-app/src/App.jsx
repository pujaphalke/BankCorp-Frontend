import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Templates/Sidebar'
import Footer from './Footer'
import Contact from './Footer-Components/Contact'
import About from './Footer-Components/About'
import EmiCalculator from './Templates/EmiCalculator'
import Home from './Templates/Home'
import Enquiry from './Templates/Enquiry'
import Login from './Templates/Login'
import Dashboard from './Includes/Dashboard'
import { LoanApplication } from './Components/LoanAppliction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Header></Header>
          <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='enquiry' element={<Enquiry/>}></Route>
        <Route path='emicheck' element={<EmiCalculator/>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='dashboard/*' element={<Dashboard/>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='about'element={<About/>}></Route>
        <Route path='loanapplication' element={<LoanApplication/>}></Route>
        </Routes>
        
        <Footer></Footer>
        
      </BrowserRouter>
    </>
  )
}

export default App
