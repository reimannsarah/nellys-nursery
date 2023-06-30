import React from "react";
import PropTypes from 'prop-types';

function NavBar(props) {
  return (
    <div className="navbar">
      <p>Home</p>
      <button onClick={props.onInventoryClick}>Inventory</button>
      <button>Cart</button>
    </div>
  );
}

NavBar.propTypes = {
  onInventoryClick: PropTypes.func
}

export default NavBar;