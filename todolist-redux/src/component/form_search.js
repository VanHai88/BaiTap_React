import React from 'react'
import {connect} from "react-redux"
import * as actions from "../actions/index"

class FormSearch extends React.Component {
    constructor(props){
        super(props);
        this.inputRefSearch = React.createRef()
    }
    onSreach = () => {
        this.props.onSearch(this.inputRefSearch.current.value)
    }
    render(){
        return (
            <div className="todo-form_search">
                <input
                    ref={this.inputRefSearch}
                    type="text"
                    name=""
                    className="form-control" />
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.onSreach}
                >Tìm</button>
            </div>
        )
    }
}

const mapDispatchProp = dispatch=>{
    return{
        onSearch: (keyWord)=>{
            dispatch(actions.searchTodo(keyWord))
        }
    }
}

export default connect(null,mapDispatchProp)(FormSearch)