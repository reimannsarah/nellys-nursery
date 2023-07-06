import React from "react";
import plant from "./../img/plant.gif"

function Header() {
  return (
    <div className="header">
      <img src={plant} alt="plant gif" id="plant-gif"/>
      <h1>Nelly's Nursery</h1>
      <img src={plant} alt="plant gif" id="plant-gif"/>
    </div>
  );
}

export default Header;