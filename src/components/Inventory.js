import React from "react";
import PropTypes from 'prop-types';

function Inventory(props) {

  const currentlyVisibleState = 
    props.inventory.map(plant => 
      <div key={plant.id}>
        <p>{plant.colloquial}</p>
        <p>{plant.pricePerPallet}</p>
        <p>{plant.pricePerPlant}</p>
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
  inventory: PropTypes.array
}

export default Inventory;