import React from "react";

function Menu(props) {
  return (
    <React.Fragment>
      <ul>
      {props.inventory.map(plant => 
          <li key={plant.id}>{plant.colloquial} - {plant.name}</li>
          )}
      </ul>
    </React.Fragment>
  )
}

export default Menu;