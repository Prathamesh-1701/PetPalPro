import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import route from 'react-router-dom'
import "./App.css"
import Navigation from './Components/Navigation/Navigation.jsx'
import Home from './Components/Homepage/Home'
import Adopt from './Components/Adoptpage/Adopt'
import Donate from './Components/Donatepage/Donate'
import DonateForm from './Components/Donatepage/DonateForm/DonateForm'
import AdoptForm2 from './Components/Adoptpage/Adoptform/adoptform2'
import AdoptForm1 from './Components/Adoptpage/Adoptform/adoptform1'
import Availability from './Components/Adoptpage/Availability/availability'
import Navnar from './Components/Navigation/Navnar'
import NavBar from './Components/Navigation/NavBar'

function App() {
  return (
    <div>
      {/* <NavBar/> */}
      <Navnar/>
      {/* <Navigation /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Adopt" element={<Adopt />} />
        <Route exact path="/Donate" element={<Donate />} />
        <Route exact path="/DonateForm" element={<DonateForm />} />
        <Route exact path="/AdoptForm2" element={<AdoptForm2 />} />
        <Route exact path="/AdoptForm1" element={<AdoptForm1 />} />
        <Route exact path="/Availability" element={<Availability/>} />
      </Routes>


    </div>
  )
}


export default App