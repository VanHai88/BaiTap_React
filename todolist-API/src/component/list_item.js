import React from 'react'

class ListItem extends React.Component {
   render(){
    let {todoItem} = this.props;
    return (
        <tr>
            <th>{todoItem.id}</th>
            <td>{todoItem.name}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={()=>this.props.onDelete(todoItem.id)}><i className="fas fa-trash-alt"></i></button>
                <button type="button" className="btn btn-success" onClick={() => this.props.onEdit(todoItem)}><i className="fas fa-pencil-alt"></i></button>
            </td>
        </tr>
    )
   }
}

export default ListItem