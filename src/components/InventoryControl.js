import React from "react";
import Inventory from "./Inventory";
import InventoryForm from "./InventoryForm";
import NavBar from './NavBar';
import InventoryDetail from "./InventoryDetail";
import EditInventoryForm from "./EditInventoryForm";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventoryFormVisibleOnPage: false,
      inventory: [],
      selectedPlant: null,
      editFormVisibleOnPage: false
    }
  }


  handleClick = () => {
    if (this.state.currentPlant != null) {
      this.setState({inventoryFormVisibleOnPage: false,
                      currentPlant: null
                    });
    }
    this.setState((prevState => ({
      inventoryFormVisibleOnPage: !prevState.inventoryFormVisibleOnPage
    })))
  }

  handleInventoryClick = () => {
    this.setState({inventoryFormVisibleOnPage: false})
  }

  handleChangingSelectedPlant = (id) => {
    const currentPlant = this.state.inventory.filter(plant => plant.id === id)[0];
    this.setState({selectedPlant: currentPlant});
  }

  handleAddingToInventory = (newPlant) => {
    const newInventoryList = this.state.inventory.concat(newPlant);
    console.log(newInventoryList);
    this.setState({ inventory: newInventoryList,
                    inventoryFormVisibleOnPage: false});
  }

  handleDeleteFromInventory = (id) => {
    const newInventoryList = this.state.inventory.filter(plant => plant.id !== id);
    this.setState({inventory: newInventoryList,
                    selectedPlant: null,
                    inventoryFormVisibleOnPage: false});
  }

  handleEditClick = () => {
    this.setState({editFormVisibleOnPage: true});
  }  

  handleSellingPlantClick = (id) => {
    const updatedInventory = this.state.inventory.map((plant) => {
      if (plant.id === id) {
        return {
          ...plant,
          plantQuantity: plant.plantQuantity - 1
        };
      }
      return plant;
    });
  
    this.setState({
      inventory: updatedInventory
    });
    console.log(this.state.inventory[id])
  }
  

  handleEditingInventoryPlant = (plantToEdit) => {
    const editedInventory = this.state.inventory.filter(plant => plant.id !== this.state.selectedPlant.id).concat(plantToEdit);
    this.setState({
      inventory: editedInventory,
      editFormVisibleOnPage: false,
      selectedPlant: null
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.selectedPlant != null) {
      currentlyVisibleState = <InventoryDetail plant={this.state.selectedPlant} onDeleteClick={this.handleDeleteFromInventory} onEditClick={this.handleEditClick} onSellClick={this.handleSellingPlantClick}/>
      buttonText="Back";
    } else if (this.state.inventoryFormVisibleOnPage) {
      currentlyVisibleState = <InventoryForm onNewInventoryCreation={this.handleAddingToInventory} />
      buttonText="Back";
    } else if (this.state.editFormVisibleOnPage) {
      currentlyVisibleState = <EditInventoryForm plant={this.state.selectedPlant} onEditSubmission={this.handleEditingInventoryPlant} />
      buttonText="Back";
    } else {
      currentlyVisibleState = <Inventory inventory={this.state.inventory} onPlantSelect={this.handleChangingSelectedPlant}/>
      buttonText="Add plant to inventory"
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