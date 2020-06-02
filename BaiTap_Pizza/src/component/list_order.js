import React from 'react';

class ListOrder extends React.Component{
  render(){
    const {img, name, price} = this.props.product
    return(
      <div className="tagProduct">
        <img src={img} alt="img"/>
        <div className="productInfo">
          <p>Tên: {name}</p>
          <p>Giá: {price}$</p>
        </div>
      </div>
    )
  }
}

export default ListOrder;
