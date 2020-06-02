import React from 'react';

class ProductCart extends React.Component {
    clickCart = () =>{
        document.getElementById("block_list_cart").style.display = 'block';
     }
 
     cancelProductCart = () =>{
         document.getElementById("block_list_cart").style.display = 'none';
     }

     onClearProduct = (id) =>{
        this.props.onClearProduct(id);
     }

     checkOut = () =>{
        document.getElementById("product_bill").style.display = 'flex';
        document.getElementById("container").style.opacity = '.2';
        document.getElementById("block_list_cart").style.display = 'none';
     }
     
    render() {
        var productAddCart = this.props.listCart.map((value, index)=>{
            return typeof value === 'object' ? <div key={index} className="cart_info">
                        <img src={value.img} alt="img" />
                        <div className="cart_content">
                            <h4>{value.name}</h4>
                            <p><span>S</span> Black with custom print</p>
                            <p>Quantity: {value.count}</p>
                        </div>
                        <p className="cart_price">$ {value.price}</p>
                        <img src="./images/icon.png" className="clear" alt="img" onClick={()=>this.onClearProduct(value.id)} />
                    </div>:false
         })
        return (
            <div className="product_cart">
                    <div className="show_list_cart">
                        <img src="./images/cart.png" alt="cart" onClick={this.clickCart}></img>
                        <span className="count_cart">{this.props.listCart.length/2}</span>
                    </div>
                    <div id="block_list_cart">
                        <div className="cancel">
                            <img src="./images/icon.png" alt="canel" onClick={this.cancelProductCart}/>
                        </div>
                        <div className="list_cart">
                            <div className="icon_cart">
                                <img src="./images/cart.png" alt="cart"></img>
                                <span>Bag</span>
                                <span className="count_cart">{this.props.listCart.length/2}</span>
                            </div>
                            {productAddCart}
                        </div>
                        <div className="checkout">
                            <div className="subtotal">
                                <p>SUBTOTAL</p>
                                <div className="subtotal_price">
                                    <p className="price_cart">${this.props.subtotal}</p>
                                    <p>OR UP TO 9 x $ 4.48</p>
                                </div>
                            </div>
                            <button onClick={this.checkOut}>CHECK OUT</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ProductCart