import React from 'react';
import logo from '../assets/krabby-logo.jpeg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Krabby PattyPOD Logo" className="logo" />
      </div>
      <h1>Krabby Patty By POD</h1>
      <h2>GRAB & GO MENU</h2>
    </header>
  );
};

export default Header;