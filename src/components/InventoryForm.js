import React from "react";

function InventoryForm(props) {
  return (
    <>
      <form action={handleNewInventoryFormSubmission}>
        <label for="latin=name">Latin Name:</label>
        <input type="text" id="latin-name" name="latin-name" required />
        
        <label for="colloquial-name">Colloquial Name:</label>
        <input type="text" id="colloquial-name" name="colloquial-name" required />

        <label for="pricePerPallet">Price Per Pallet (130 plants):</label>
        <input type="text"id="pricePerPallet" name="pricePerPallet"></input>
        
        <label for="pricePerPlant">Price Per Plant:</label>
        <input type="text"id="pricePerPlant" name="pricePerPlant"></input>

        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity"></input>

        <button type="submit">Submit</button>

      </form>
    </>
  );

  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    props.onNewInventoryCreation({
      name: event.target.name.value,
      colloquial: event.target.colloquial.value,
      pricePerPallet: event.target.pricePerPallet.value,
      pricePerPlant: event.target.pricePerPlant.value,
      palletQuantity: event.target.quantity.value
    });
  }
}

export default InventoryForm;