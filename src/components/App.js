import React from 'react';
import './App.css';
import Inventory from './Inventory';
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Inventory />
    </React.Fragment>
  );
}

export default App;
