import React from "react";
import PropTypes from 'prop-types';

function Plant(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h4>Latin name: {props.name}</h4>
        <p>Colloquial Name: {props.colloquial}</p>
        <p>Pallet Quantity: {props.palletQuantity}</p>
        <p>Plant Quantity: {props.plantQuantity}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Plant.propTypes = {
  name: PropTypes.string,
  colloquial: PropTypes.string,
  palletQuantity: PropTypes.string,
  whenItemClicked: PropTypes.func,
  id: PropTypes.string
}

export default Plant;