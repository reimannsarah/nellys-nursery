import React from "react";
import PropTypes from 'prop-types';

function Plant(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenPlantClicked(props.id)}>
        <h4>Latin name: {props.name}</h4>
        <p>Colloquial Name: {props.colloquial}</p>
        <p>Quantity Available: {props.quantity}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Plant.propTypes = {
  name: PropTypes.string,
  colloquial: PropTypes.string,
  palletQuantity: PropTypes.string,
  whenPlantClicked: PropTypes.func,
  id: PropTypes.string
}

export default Plant;