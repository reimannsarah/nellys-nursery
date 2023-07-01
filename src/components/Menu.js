import React from "react";

function Menu(props) {
  return (
    <React.Fragment>
      {props.inventory.map(plant => 
        <ul>
          <li>{plant.colloquial} - {plant.name}</li>
        </ul>
        )}
    </React.Fragment>
  )
}

export default Menu;