import React from 'react';
import './App.css';
import TodoForm from './component/todo_form'
import TodoList from './component/todo_list'
import axios from 'axios';
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

  componentDidMount() {
    axios.get(`https://5ec912d19ccbaf0016aa8b69.mockapi.io/TodoList`)
      .then(res => {
        this.setState({
          listtodo: res.data,
          isLoading:false
        });
      })
  }

  onCreate = async (value) => {
    let { listtodo } = this.state;
    let todo = {
      name: value.name
    }
    const notifyCreate = () => toast.success("Bạn Đã Tạo Thành Công!");
    const notifyEdit = () => toast.warn("Bạn Đã Tạo Cập Nhật Thành Công!");
    if (value.id === undefined || value.id === "") {
      await axios.post(`https://5ec912d19ccbaf0016aa8b69.mockapi.io/TodoList`, todo)
        .then(res => {
          console.log("a",res.data)
          listtodo.push(res.data)
          notifyCreate();
        })
    } else {
      await axios.put(`https://5ec912d19ccbaf0016aa8b69.mockapi.io/TodoList/${value.id}`, todo)
        .then(res => {
          let index = listtodo.findIndex(item => item.id === res.data.id)
          listtodo[index] = res.data
          notifyEdit();
        });
    
      
    }

    this.setState({
      listtodo: listtodo,
      todoname: { id: "", name: "" }
    })
    console.log(this.state.listtodo)
  }

  onDelete = (value) => {
    let { listtodo } = this.state;
    const notifyDelete = () => toast.error("Bạn Đã Xóa Thành Công!");
    axios.delete(`https://5ec912d19ccbaf0016aa8b69.mockapi.io/TodoList/${value}`)
      .then(res => {
        let index = listtodo.findIndex(item => item.id === res.data.id)
        listtodo.splice(index, 1);
        this.setState({
          listtodo: listtodo
        })
        notifyDelete()
      })

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
