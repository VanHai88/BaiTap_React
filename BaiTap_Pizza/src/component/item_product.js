import React from 'react';

class ItemProduct extends React.Component {

  onClickNext(id){
    this.props.onClickNext(id)
  }

  onClickPrev(id){
    this.props.onClickPrev(id)
  }

  render() {
    var {id, name, price, count} = this.props.product
    return (
      <>
        <div className="product_item">
              <div className="product_name">
                <p>{name}</p>
                <p>{price}$</p>
              </div>
              <div className="input_number">
                <button className="btn next" onClick={()=>this.onClickPrev(id)}><i className="fas fa-minus"></i></button>
                <span>{count}</span>
                <button className="btn prev" onClick={()=>this.onClickNext(id)}><i className="fas fa-plus"></i></button>
              </div>
            </div>
      </>
    )
  }
}

export default ItemProduct;
