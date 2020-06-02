import React from 'react';
import * as actions from "../actions/index"
import {connect} from "react-redux"

class ProductInfo extends React.Component {
    onClickAddCart = () =>{
        this.props.addCart(this.props.product)
    }
    render() {
        var {transportation, img, name, price, discount} = this.props.product;
        return (
            <div className="product_info">
                <span className="tagShip">{transportation}</span>
                <img src={img} alt="img" />
                <div className="content_infor">
                    <h4>{name}</h4>
                    <span className="line"></span>
                    <div className="price">
                        <p><span>$</span> {price}</p>
                        <p><span>or</span> {discount[0]} <span>X</span> $ {discount[1]}</p>
                    </div>
                </div>
                <button onClick={()=>this.onClickAddCart()}>Add to cart</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addCart: (product)=>{
            dispatch(actions.addCart(product))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductInfo);