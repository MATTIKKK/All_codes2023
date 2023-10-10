import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

const Flights = () => {
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <h1>Flights</h1>
    </div>
  )
}

export default Flights