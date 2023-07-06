import React from "react";
import PropTypes from 'prop-types';

function Menu(props) {
  if (props.inventory.length !== 0) {
    return (
      <React.Fragment>
        <h3>Menu</h3>
        <ul>
          {props.inventory.map(plant =>
            <li key={plant.id} onClick={() => props.onPlantSelect(plant.id)} >{plant.colloquial} - {plant.name}</li>
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