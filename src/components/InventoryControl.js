import React from "react";
import Inventory from "./Inventory";
import InventoryForm from "./InventoryForm";
import NavBar from './NavBar';
import InventoryDetail from "./InventoryDetail";
import EditInventoryForm from "./EditInventoryForm";
import Menu from "./Menu";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventoryFormVisibleOnPage: false,
      inventory: [],
      selectedPlant: null,
      editFormVisibleOnPage: false,
      menuVisibleOnPage: false
    }
  }


  handleClick = () => {
    if (this.state.selectedPlant != null) {
      this.setState({
        inventoryFormVisibleOnPage: false,
        selectedPlant: null
      });
    } else if (this.state.menuVisibleOnPage) {
      this.setState({menuVisibleOnPage: false,
                      inventoryFormVisibleOnPage: true})
    }else {
      this.setState((prevState => ({
        inventoryFormVisibleOnPage: !prevState.inventoryFormVisibleOnPage
      })));
    }
  }

  handleInventoryClick = () => {
    this.setState({ inventoryFormVisibleOnPage: false,
                    selectedPlant: null,
                  menuVisibleOnPage: false})
  }

  handleMenuClick = () => {
    this.setState({menuVisibleOnPage: true,
                    selectedPlant: null})
  }

  handleChangingSelectedPlant = (id) => {
    const currentPlant = this.state.inventory.filter(plant => plant.id === id)[0];
    this.setState({ selectedPlant: currentPlant,
                    menuVisibleOnPage: false});
  }

  handleAddingToInventory = (newPlant) => {
    const newInventoryList = this.state.inventory.concat(newPlant);
    this.setState({
      inventory: newInventoryList,
      inventoryFormVisibleOnPage: false
    });
  }

  handleDeleteFromInventory = (id) => {
    const newInventoryList = this.state.inventory.filter(plant => plant.id !== id);
    this.setState({
      inventory: newInventoryList,
      selectedPlant: null,
      inventoryFormVisibleOnPage: false
    });
  }

  handleEditClick = () => {
    this.setState({ editFormVisibleOnPage: true });
  }

  handleEditingInventoryPlant = (plantToEdit) => {
    const editedInventory = this.state.inventory.filter(plant => plant.id !== this.state.selectedPlant.id).concat(plantToEdit);
    this.setState({
      inventory: editedInventory,
      editFormVisibleOnPage: false,
      selectedPlant: null
    });
  }

  handleSellingPlantClick = (id) => {
    const currentPlant = this.state.inventory.filter(plant => plant.id === id)[0]
    if (currentPlant.quantity > 0) {
    const newPlant = {...currentPlant, quantity: currentPlant.quantity - 1 }
    const updatedInventory = this.state.inventory.filter(plant => plant.id !== currentPlant.id).concat(newPlant)

    this.setState({ inventory: updatedInventory, selectedPlant: newPlant });
    } else {
      const newPlant = {...currentPlant, quantity: "No more in stock" }
    const updatedInventory = this.state.inventory.filter(plant => plant.id !== currentPlant.id).concat(newPlant)

    this.setState({ inventory: updatedInventory, selectedPlant: newPlant });
    }
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.menuVisibleOnPage) {
      currentlyVisibleState = <Menu inventory={this.state.inventory} onPlantSelect={this.handleChangingSelectedPlant} />
      buttonText="Add to inventory"
    } else if (this.state.editFormVisibleOnPage) {
      currentlyVisibleState = <EditInventoryForm plant={this.state.selectedPlant} onEditPlant={this.handleEditingInventoryPlant} />
      buttonText = "Back to Inventory";
    } else if (this.state.selectedPlant != null) {
      currentlyVisibleState = <InventoryDetail plant={this.state.selectedPlant} onDeleteClick={this.handleDeleteFromInventory} onEditClick={this.handleEditClick} onSellClick={this.handleSellingPlantClick} />
      buttonText = "Back to Inventory";
    } else if (this.state.inventoryFormVisibleOnPage) {
      currentlyVisibleState = <InventoryForm onNewInventoryCreation={this.handleAddingToInventory} />
      buttonText = "Back to Inventory";
    } else {
      currentlyVisibleState = <Inventory inventory={this.state.inventory} onPlantSelect={this.handleChangingSelectedPlant} />
      buttonText = "Add plant to inventory"
    }

    return (
      <>
        <NavBar onInventoryClick={this.handleInventoryClick} onMenuClick={this.handleMenuClick}  />
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}


export default InventoryControl;