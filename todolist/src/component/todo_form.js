import React from 'react'
import FormCreateEdit from './form_create_edit'
import FormSearch from './form_search'
class TodoForm extends React.Component {
    render(){
        return (
            <>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <FormCreateEdit onCreate={this.props.onCreate} todoName={this.props.todoName}/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <FormSearch onSreach={this.props.onSreach}/>
                </div>
            </>
        )
    }
}

export default TodoForm