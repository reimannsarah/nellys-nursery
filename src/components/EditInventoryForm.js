import React, {useState} from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function EditInventoryForm(props) {

  const [palletQuantity, setPalletQuantity] = useState("");
  
  return (
    <>
      <form onSubmit={handleEditInventoryFormSubmission}>
        <label htmlFor="name">Latin Name:</label>
        <input type="text" id="name" name="latin-name" required />
        
        <label htmlFor="colloquial">Colloquial Name:</label>
        <input type="text" id="colloquial" name="colloquial-name" required />

        <label htmlFor="quantity">Quantity:</label>
        <input type="text" id="quantity" name="quantity" onChange={(event) => setPalletQuantity(event.target.value)}></input>

        <button type="submit">Submit</button>

      </form>
    </>
  );

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    const editedInventoryItem = {
      name: event.target.name.value,
      colloquial: event.target.colloquial.value,
      pricePerPallet: event.target.pricePerPallet.value,
      pricePerPlant: event.target.pricePerPlant.value,
      palletQuantity: palletQuantity, 
      plantQuantity: palletQuantity * 130, 
      id: v4()
    };
  
    props.onEditSubmission(editedInventoryItem);
    
  }
}

EditInventoryForm.propTypes = {
  onEditSubmission: PropTypes.func
}

export default EditInventoryForm;