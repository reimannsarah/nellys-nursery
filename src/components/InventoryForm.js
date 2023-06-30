import React, {useState} from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function InventoryForm(props) {

  const [palletQuantity, setPalletQuantity] = useState("");
  return (
    <>
      <form onSubmit={handleNewInventoryFormSubmission}>
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

  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    const newInventoryItem = {
      name: event.target.name.value,
      colloquial: event.target.colloquial.value,
      palletQuantity: palletQuantity, 
      plantQuantity: palletQuantity * 130, 
      id: v4()
    };

    props.onNewInventoryCreation(newInventoryItem);

  }
}

InventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
}

export default InventoryForm;