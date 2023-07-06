import React from "react";

function Menu(props) {
  if (props.inventory.length !== 0) {
    return (
      <React.Fragment>
        <h3>Menu</h3>
        <ul>
          {props.inventory.map(plant =>
            <li key={plant.id}>{plant.colloquial} - {plant.name}</li>
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

export default Menu;