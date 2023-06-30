import React from "react";
import PropTypes from 'prop-types';

function InventoryDetail(props) {
  const { plant, onDeleteClick, onEditClick, onSellClick } = props;
  return (
    <React.Fragment>
      <h1>Plant Details</h1>
      <h3>{plant.colloquial}</h3>
      <p>Latin Name: {plant.name}</p>
      <p>Quantity of Pallets in Stock: {plant.palletQuantity}</p>
      <p>Quantity of Plants in Stock: {plant.plantQuantity}</p>
      <button onClick={() => onDeleteClick(plant.id)}>Delete</button>
      <button onClick={onEditClick}>Edit</button>
      <button onClick={onSellClick}>Sell Plant</button>
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  plant: PropTypes.object,
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func
}

export default InventoryDetail;