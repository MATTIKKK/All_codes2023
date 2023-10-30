import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerItems'>
            <h1 className='headerTitle'>Twitter</h1>
            <div className='headerButtons'>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Header