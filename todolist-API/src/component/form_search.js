import React from 'react'

class FormSearch extends React.Component {
    constructor(props){
        super(props);
        this.inputRefSearch = React.createRef()
    }
    onSreach = () => {
        this.props.onSreach(this.inputRefSearch.current.value)
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

export default FormSearch