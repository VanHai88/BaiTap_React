import React from 'react';
import './App.css';
import TodoForm from './component/todo_form'
import TodoList from './component/todo_list'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {

  render() {
    return (
      <div className="container">
         <ToastContainer/>
        <div className="todo-title">
          <h2>TODO LIST</h2>
        </div>
        <div className="todo-form">
          <div className="row">
            <TodoForm/>
          </div>
        </div>
        <div className="todo-list">
          <div className="row">
            <TodoList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
