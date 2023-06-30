import React from "react";

const menu = [
{
  name: "Fantas Magoria",
  colloquial: "Fish Plant",
  pricePerPallet: "$399",
  pricePerPlant: "$23"
}
]

function Inventory() {

  const currentlyVisibleState = 
    menu.map(plant => 
      <React.Fragment>
        <p>{plant.colloquial}</p>
        <p>{plant.pricePerPallet}</p>
        <p>{plant.pricePerPlant}</p>
      </React.Fragment>
      )
      
  return (
    <React.Fragment>
      <h3>Inventory</h3>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default Inventory;