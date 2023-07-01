import React from "react";
import PropTypes from 'prop-types';
import Plant from "./Plant";

function Inventory(props) {

  const currentlyVisibleState = 
  props.inventory.map((plant) => 
  <div key={plant.id}>
    <Plant whenPlantClicked={props.onPlantSelect}
      name={plant.name}
      colloquial={plant.colloquial}
      quantity={plant.quantity}
      key={plant.id}
      id={plant.id}
      />
    </div>
  )

  return (
    <React.Fragment>
      <h3>Inventory</h3>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  onPlantSelect: PropTypes.func
}

export default Inventory;