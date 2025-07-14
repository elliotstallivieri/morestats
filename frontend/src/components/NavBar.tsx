import React from "react";
import "./NavBar.css"; 

interface NavBarProps {
  buttons: [string, () => void][];
}

const NavBar: React.FC<NavBarProps> = ({ buttons }) => {
  return (
    <div className="navbar">
      {buttons.map(([text, onClick], idx) => (
        <button key={idx} onClick={onClick || (() => {console.log("error : missing onClick")})} className="navbar-button">
          {text}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
