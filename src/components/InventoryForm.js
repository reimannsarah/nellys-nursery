import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function InventoryForm(props) {

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewInventoryFormSubmission}
                    buttonText="Submit" />
    </React.Fragment>
  );

  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    const newInventoryItem = {
      name: event.target.name.value,
      colloquial: event.target.colloquial.value,
      quantity: parseInt(event.target.quantity.value), 
      id: v4()
    };
    props.onNewInventoryCreation(newInventoryItem);

  }
}

InventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
}

export default InventoryForm;