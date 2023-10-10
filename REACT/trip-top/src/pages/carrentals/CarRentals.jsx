import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

const carRentals = () => {
    return (
        <div>
          <Navbar />
          <Header type="list"/>
          <h1>Car rentals</h1>
        </div>
      )
}

export default carRentals