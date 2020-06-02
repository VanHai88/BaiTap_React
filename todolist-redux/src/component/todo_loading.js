import React from 'react'

class TodoLoading extends React.Component {
    render() {
        return (
            <div className="fulfilling-bouncing-circle-spinner">
                <div className="circle"></div>
                <div className="orbit"></div>
            </div>
        )
    }
}

export default TodoLoading