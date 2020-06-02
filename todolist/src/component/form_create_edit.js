import React from 'react'

class FormCreateEdit extends React.Component {
    constructor(props) {
        super(props)
        this.inputRefCreate = React.createRef();
        this.state = {
            id: "",
            name: ""
        }
    }
    onCreate = () => {
        let { id } = this.state;
        let todo = {
            id: id,
            name: this.inputRefCreate.current.value
        }
        this.props.onCreate(todo)
    }

    componentWillReceiveProps(nextProps) {
        let { id, name } = nextProps.todoName
        this.setState({
            id: id,
            name: name,
        })
        if(id!==undefined){
            this.inputRefCreate.current.value = name
        }
    }

    render() {
        let { id } = this.state;
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
                >{id===""||id===undefined?"Thêm":"Cập Nhật"}</button>
            </div>
        )
    }
}

export default FormCreateEdit