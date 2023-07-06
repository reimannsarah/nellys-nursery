import React from "react";
import PropTypes from 'prop-types';

function Menu(props) {
  if (props.inventory.length !== 0) {
    return (
      <React.Fragment>
        <h3>Menu</h3>
        <ul className="menu-list">
          {props.inventory.map(plant =>
          <div key={plant.id} >
            <li onClick={() => props.onPlantSelect(plant.id)} ><span className="menu-name">{plant.colloquial}</span><span className="menu-quantity"> Available: {plant.quantity}</span> </li>
            <hr/>
          </div>
          )}
        </ul>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Menu</h3>
        <p>Please add inventory</p>
      </React.Fragment>
    )
  }
}

Menu.propTypes = {
  key: PropTypes.string,
  id: PropTypes.string,
  onPlantSelect: PropTypes.func,
  colloquial: PropTypes.string,
  name: PropTypes.string
}

export default Menu;