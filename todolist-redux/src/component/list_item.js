import React from 'react'
import * as actions from "../actions/index"
import {connect} from "react-redux"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListItem extends React.Component {
    onDelete=(id)=>{
        const notifyDelete = () => toast.error("Bạn Đã Xóa Thành Công!");
        this.props.onDeleteTodo(id);
        notifyDelete()
    }

   render(){
    let {todoItem, index} = this.props;
    return (
        <tr>
            <th>{index+1}</th>
            <td>{todoItem.name}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={()=>this.onDelete(todoItem.id)}><i className="fas fa-trash-alt"></i></button>
                <button type="button" className="btn btn-success" onClick={() => this.props.getEditItem(todoItem)}><i className="fas fa-pencil-alt"></i></button>
            </td>
        </tr>
    )
   }
}

const mapDispatchToProps = dispatch =>{
    return{
        onDeleteTodo: (id)=>{
            dispatch(actions.deleteTodo(id))
        },
        getEditItem: (todo)=>{
            dispatch(actions.getEditItem(todo));
        }
    }
}

export default connect(null,mapDispatchToProps)(ListItem)