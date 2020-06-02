import React from 'react';
import {connect} from "react-redux"
import * as actions from "../actions/index"

class ProductSize extends React.Component {
    onClickSize = (value) =>{
         document.getElementById("item_size" + value).classList.toggle("active");
         this.props.onClickSize(value)
    }
    render() {
        var size = this.props.size.map((value, index)=>{
            return <span key={index} className={index===0?"active":""} id={"item_size" + value} onClick={()=>this.onClickSize(value)}>{value}</span>
        })
        return (
            <div className="product_size">
                <h2>Sizes:</h2>
                <div className="size_list">
                    {size}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        size: state.productGetSize
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onClickSize: (size)=>{
            dispatch(actions.searchSize(size))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductSize);