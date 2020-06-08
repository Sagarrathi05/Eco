import React from 'react';
import Page from "./page"
import './App.css';
import { Provider } from 'react-redux';
import customeStore from './redux/store';
import "react-web-tabs/dist/react-web-tabs.css";


function App() {
  return (
    <div className="App">
      <Provider store={customeStore}> <Page/></Provider>
     
    </div>
  );
}

export default App;
