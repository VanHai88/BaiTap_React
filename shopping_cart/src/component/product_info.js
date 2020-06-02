import React from 'react';

class ProductInfo extends React.Component {
    onClickAddCart = (product) =>{
        this.props.onClickAddCart(product)
    }
    render() {
        var {transportation, img, name, price, discount} = this.props.product;
        var product = JSON.stringify(this.props.product)
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
                <button onClick={()=>this.onClickAddCart(product)}>Add to cart</button>
            </div>
        )
    }
}

export default ProductInfo