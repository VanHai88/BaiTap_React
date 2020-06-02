import React from 'react';
import ItemProduct from './item_product'

class ListProduct extends React.Component {

  render() {
    var itemProduct = this.props.products.map((value, index)=>{
      return <ItemProduct key={index} product={value} onClickNext={this.props.onClickNext} onClickPrev={this.props.onClickPrev}/>
    });
    return (
      <div className="block_Product">
        <div className="title_product">
          <p>Your Pizaa <span>{this.props.total}$</span></p>
          <button onClick={this.props.resetAll}>Reset pizza</button>
        </div>
        {itemProduct}
        <div className="block_total">
          <p>Total</p>
          <p>{this.props.total}$</p>
        </div>
        <div className="checkout">
          <button>Checkout</button>
        </div>
      </div>
    )
  }
}

export default ListProduct;
