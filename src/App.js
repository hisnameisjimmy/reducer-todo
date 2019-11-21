import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducers/index.js';
import './App.css';
import { AddForm } from './components/Add';
import { List } from "./components/List";

function App() {
  
  const [ state, dispatch ] = useReducer(todoReducer, initialState);

  const addTodo = todo => {
    dispatch({
      type: "CREATE_TODO",
      todo: todo
    });
  }
  const toggleCompleted = id => {
    dispatch({
      type: "TOGGLE_DELETE",
      id: id
    });
  }

  const clearCompleted = id => {
    dispatch({
      type: "CLEAR_COMPLETED",
      id: id
    });
  }

  return (
    <div className="App">
      <AddForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <List todos={state.todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
