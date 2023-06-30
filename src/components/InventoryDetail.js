import React from "react";

function InventoryDetail(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <h3>{item.colloquial}</h3>
      <p>Latin Name: {item.name}</p>
      <p>Price Per Pallet: {item.pricePerPallet}</p>
      <p>Price Per Plant: {item.pricePerPlant}</p>
      <p>Quantity of Pallets in Stock: {item.palletQuantity}</p>
      <p>Quantity of Plants in Stock: {item.plantQuantity}</p>
    </React.Fragment>
  );
}

export default InventoryDetail;