import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <a href="/" className="logo">TripTop</a>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar