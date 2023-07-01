import React from "react";
import PropTypes from 'prop-types';

function NavBar(props) {
  return (
    <div className="navbar">
      <button onClick={props.onMenuClick}>Menu</button>
      <button onClick={props.onInventoryClick}>Inventory</button>
    </div>
  );
}

NavBar.propTypes = {
  onInventoryClick: PropTypes.func,
  onMenuClick: PropTypes.func
}

export default NavBar;