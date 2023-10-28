import { useNavigate } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {


  return (
    <div className="navbar">
        <div className="navContainer">
            <a href="/" className="logo">TWITTEEER</a>
            <div className="navItems">
                <button className="navButton">Register</button>
                <a className="navButton" href="/profile">Login</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar