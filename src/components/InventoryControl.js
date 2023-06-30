import React from "react";
import Inventory from "./Inventory";
import InventoryForm from "./InventoryForm";
import NavBar from './NavBar';
import InventoryDetail from "./InventoryDetail";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventoryFormVisibleOnPage: false,
      inventory: [],
      selectedItem: null
    }
  }


  handleClick = () => {
    if (this.state.currentItem != null) {
      this.setState({inventoryFormVisibleOnPage: false,
                      currentItem: null
                    });
    }
    this.setState((prevState => ({
      inventoryFormVisibleOnPage: !prevState.inventoryFormVisibleOnPage
    })))
  }

  handleInventoryClick = () => {
    this.setState({inventoryFormVisibleOnPage: false})
  }

  handleChangingSelectedItem = (id) => {
    const currentItem = this.state.inventory.filter(ticket => ticket.id === id)[0];
    this.setState({selectedItem: currentItem});
  }

  handleAddingToInventory = (newItem) => {
    const newInventoryList = this.state.inventory.concat(newItem);
    console.log(newInventoryList);
    this.setState({ inventory: newInventoryList,
                    inventoryFormVisibleOnPage: false});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.selectedItem != null) {
      currentlyVisibleState = <InventoryDetail item={this.state.selectedItem} />
    } else if (this.state.inventoryFormVisibleOnPage) {
      currentlyVisibleState = <InventoryForm onNewInventoryCreation={this.handleAddingToInventory} />
      buttonText="Back";
    } else {
      currentlyVisibleState = <Inventory inventory={this.state.inventory} onItemSelect={this.handleChangingSelectedItem}/>
      buttonText="Add item to inventory"
    }

    return (
      <>
      <NavBar onInventoryClick={this.handleInventoryClick}/>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}


export default InventoryControl;