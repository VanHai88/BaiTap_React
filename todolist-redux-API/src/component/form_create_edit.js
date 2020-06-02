import React from 'react'
import * as actions from '../actions/index'
import { connect } from "react-redux"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FormCreateEdit extends React.Component {
    constructor(props) {
        super(props)
        this.inputRefCreate = React.createRef();
    }

    onCreate = () => {
        let {getList} = this.props
        const notifyCreate = () => toast.success("Bạn Đã Tạo Thành Công!");
        const notifyEdit = () => toast.warn("Bạn Đã Tạo Cập Nhật Thành Công!");
        let {onCreate, onEdit} = this.props
        let todo
        if (getList.todoName.id==="") {
            todo = {
                id: this.createID(),
                name: this.inputRefCreate.current.value
            }
            onCreate(todo)
            notifyCreate();
        } else {
            todo = {
                id: getList.todoName.id,
                name: this.inputRefCreate.current.value
            }
            onEdit(todo);
            notifyEdit();
        }
    }

    createID(){
        let id = Math.random().toString(36).substring(2, 15)
        return id+"-"+id+"-"+id+"-"+id;
      }

    componentWillReceiveProps(nextProps) {
        this.inputRefCreate.current.value = nextProps.getList.todoName.name
    }

    render() {
        let {getList} = this.props
        return (
            <div className="todo-form_create_edit">
                <input
                    ref={this.inputRefCreate}
                    name="input_create"
                    type="text"
                    className="form-control"
                />
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.onCreate}
                >{getList.todoName.id === "" ? "Thêm" : "Cập Nhật"}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        getList: state.getList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreate: (todo) => {
            dispatch(actions.createTodo(todo))
        },
        onEdit: (todo) =>{
            dispatch(actions.editTodo(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateEdit)