import React from 'react'
import ListItem from './list_item'
import TodoLoading from './todo_loading'
import {connect} from 'react-redux'
import * as actions from "../actions/index"

class TodoList extends React.Component {

  componentWillMount(){
    this.props.getListTodo();
  }

  render() {
    let {listtodo,searchTodo} = this.props;
    let todoNew = listtodo.todos.filter(todo => {
      return todo.name.toLowerCase().indexOf(searchTodo.toLowerCase()) !== -1;
    })
    let todo = todoNew.map((value, index) => {
      return <ListItem key={index} index={index} todoItem={value}/>
    })
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {listtodo.isLoading?<TodoLoading/>:""}
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    listtodo: state.getList,
    searchTodo: state.searchTodo
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getListTodo: ()=>{
      dispatch(actions.getList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)