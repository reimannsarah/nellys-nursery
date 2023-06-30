import React from "react";
import Inventory from "./Inventory";
import InventoryForm from "./InventoryForm";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventoryFormVisibleOnPage: false,
      inventory: []
    }
  }


  handleAddInventoryClick = () => {
    this.setState({ inventoryFormVisibleOnPage: true })
  }

  handleAddingToInventory = (newItem) => {
    const newInventoryList = this.state.inventory.concat(newItem);
    console.log(newInventoryList);
    this.setState({ inventory: newInventoryList,
                    inventoryFormVisibleOnPage: false});
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.inventoryFormVisibleOnPage) {
      currentlyVisibleState = <InventoryForm onNewInventoryCreation={this.handleAddingToInventory} />
    } else {
      currentlyVisibleState = <Inventory inventory={this.state.inventory} />
    }

    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleAddInventoryClick}>Add to inventory</button>
      </>
    );
  }
}


export default InventoryControl;