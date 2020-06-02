import React from 'react';
import './App.css';
import TodoForm from './component/todo_form'
import TodoList from './component/todo_list'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listtodo: [

      ],
      todoname: {},
      keySearch: "",
      isLoading: true
    }
  }

  onCreate = async (todo) => {
    let { listtodo } = this.state;
    const notifyCreate = () => toast.success("Bạn Đã Tạo Thành Công!");
    const notifyEdit = () => toast.warn("Bạn Đã Tạo Cập Nhật Thành Công!");
    if (todo.id === undefined || todo.id === "") {
      let todoNew = {
        id: this.createID(),
        name: todo.name
      }
          listtodo.push(todoNew)
          notifyCreate();
    } else {
          let index = listtodo.findIndex(item => item.id === todo.id)
          listtodo[index] = todo
          notifyEdit();
    }

    this.setState({
      listtodo: listtodo,
      todoname: { id: "", name: "" },
      isLoading: false
    })
  }

  createID(){
    let id = Math.random().toString(36).substring(2, 15)
    return id+"-"+id+"-"+id+"-"+id;
  }

  onDelete = (id) => {
    let { listtodo } = this.state;
    const notifyDelete = () => toast.error("Bạn Đã Xóa Thành Công!");
        let index = listtodo.findIndex(item => item.id === id)
        listtodo.splice(index, 1);
        this.setState({
          listtodo: listtodo
        })
        notifyDelete()
  }

  onEdit = (value) => {
    this.setState(
      {
        todoname: value
      }
    )
  }

  onSreach = (value) => {
    this.setState({
      keySearch: value.toLowerCase()
    })
  }

  render() {
    let { keySearch, listtodo, isLoading } = this.state
    if (keySearch) {
      listtodo = listtodo.filter(todo => {
        console.log(todo.name.toLowerCase())
        return todo.name.toLowerCase().indexOf(keySearch) !== -1;
      })

    }
    return (
      <div className="container">
         <ToastContainer/>
        <div className="todo-title">
          <h2>TODO LIST</h2>
        </div>
        <div className="todo-form">
          <div className="row">
            <TodoForm onCreate={this.onCreate} todoName={this.state.todoname} onSreach={this.onSreach} />
          </div>
        </div>
        <div className="todo-list">
          <div className="row">
            <TodoList listtodo={listtodo} onDelete={this.onDelete} onEdit={this.onEdit} isLoading={isLoading}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
