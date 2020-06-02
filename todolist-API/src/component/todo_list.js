import React from 'react'
import ListItem from './list_item'
import TodoLoading from './todo_loading'

class TodoList extends React.Component {
  render() {
    let {listtodo, isLoading} = this.props;
    let todo = listtodo.map((value, index) => {
      return <ListItem key={index} todoItem={value} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
    })
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {isLoading?<TodoLoading/>:""}
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

export default TodoList