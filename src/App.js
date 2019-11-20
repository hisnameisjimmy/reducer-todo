import React from 'react';
import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducers/index.js';
import './App.css';
import { AddForm } from './components/Add';

function App() {
  return (
    <div className="App">
      <AddForm />
    </div>
  );
}

export default App;
