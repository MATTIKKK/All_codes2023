import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Matik's chat</span>
      <div className="user">
        <img src="https://i.pinimg.com/736x/f9/d6/f9/f9d6f930634b0b22639b4345078d41db.jpg" alt="" />
        <span>Squidward</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
