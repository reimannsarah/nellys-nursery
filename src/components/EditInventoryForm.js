import React, {useState} from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditInventoryForm(props) {

  const { plant } = props;
  
  function handleEditInventoryFormSubmission(event) {
    event.preventDefault()
    props.onEditPlant({
      name: event.target.name.value,
      colloquial: event.target.colloquial.value,
      quantity: event.target.quantity.value, 
      id: plant.id
    })
  }

  return (
    <React.Fragment>
      <ReusableForm 
        buttonText="Edit" />
    </React.Fragment>
  );
}

EditInventoryForm.propTypes = {
  plant: PropTypes.object,
  onEditPlant: PropTypes.func
}

export default EditInventoryForm;