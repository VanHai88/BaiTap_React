import React from 'react';
import ProductSize from './product_size'
import ProductShow from './product_show'
import ProductCart from './product_cart'
import ProductPill from './product_pill'

class PipiShop extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            listCart: [
                
            ],
            productSearchSize:["XS"],
            products: [
                {
                    id: 1,
                    transportation: "Free shipping",
                    img: './images/img1.jpg',
                    name: "AO SOMI W2SMD010019",
                    price: 2,
                    discount: [5,1.25],
                    size: ["XS","M","XL"],
                    count: 1
                },
                {
                    id: 2,
                    transportation: "Free shipping",
                    img: './images/img2.jpg',
                    name: "DAM NU W2DAM030002",
                    price: 20.50,
                    discount: [10,5.25],
                    size: ["XS","S","XL"],
                    count: 1
                },
                {
                    id: 3,
                    transportation: "Free shipping",
                    img: './images/img3.jpg',
                    name: "DAM NU DNG039003PK",
                    price: 15.90,
                    discount: [8,6.25],
                    size: ["S","M","XLL"],
                    count: 1
                },
                {
                    id: 4,
                    transportation: "Free shipping",
                    img: './images/img4.jpg',
                    name: "AO THUN W2ATN030008",
                    price: 8.90,
                    discount: [6,2.25],
                    size: ["XS","S","M","XL"],
                    count: 1
                },
                {
                    id: 5,
                    transportation: "Free shipping",
                    img: './images/img5.jpg',
                    name: "AO SOMI W2SMD01068",
                    price: 20.90,
                    discount: [4,1.25],
                    size: ["XS","S","M","ML","XL"],
                    count: 1
                },
                {
                    id: 6,
                    transportation: "Free shipping",
                    img: './images/img6.jpg',
                    name: "DAM NU DNG039003PK88",
                    price: 30.90,
                    discount: [10,15.25],
                    size: ["M","XL"],
                    count: 1
                },
                {
                    id: 7,
                    transportation: "Free shipping",
                    img: './images/img7.jpg',
                    name: "AO SOMI W2SMD010020",
                    price: 15.00,
                    discount: [4,5.25],
                    size: ["XS","M","XL"],
                    count: 1
                },
                {
                    id: 8,
                    transportation: "Free shipping",
                    img: './images/img8.jpg',
                    name: "DAM NU DNG039003PSA",
                    price: 20.80,
                    discount: [9,8.25],
                    size: ["XS","M","L"],
                    count: 1
                }
            ],
            listProduct: []
            ,
            subtotal: 0
        }
    }

    componentDidMount(){
        this.addShowProduct();
    }

    onClickSize = (value)=>{
        let {productSearchSize} = this.state
        let index = productSearchSize.findIndex(item => item === value);
        if(index === -1){
            productSearchSize.push(value)
        }else{
            productSearchSize.splice(index, 1)
        }
        this.setState({
            productSearchSize: [...productSearchSize]
        })
        this.addShowProduct();
    }

    addShowProduct(){
        var {products, listProduct} = this.state;
        listProduct = products.filter(value => this.checkShowProduct(value.size));
        this.setState({
           listProduct: listProduct
        })
    }

    checkShowProduct(product){
        var {productSearchSize} = this.state;
        return product.some(r=> productSearchSize.indexOf(r) >= 0);
    }

    onClickAddCart = (product) =>{
        product = JSON.parse(product);
        var {listCart} = this.state;
        var temp = this.state.listCart;
        var itemIdex = listCart.indexOf(product.id);
        var productItem = temp.filter(value => value.id === product.id);
        if(itemIdex === -1){
            temp.push(product.id, product)
            this.setState({
                listCart: temp,
                subtotal: this.state.subtotal + product.price
            })
        }else{
            listCart[itemIdex+1].count = listCart[itemIdex+1].count + 1;
            this.setState({
                listCart: listCart,
                subtotal: this.state.subtotal + productItem[0].price
            })
        }
    }
    
    onClearProduct = (id) =>{
        var listCart = this.state.listCart;
        var temp = this.state.listCart;
        var productItem = temp.filter(value => value.id === id);
        var itemIdex = listCart.indexOf(id);
        temp.splice(itemIdex, 2)
        console.log(productItem)
        this.setState({
            listCart: temp,
            subtotal: listCart.length !== 0 ? this.state.subtotal - productItem[0].price * productItem[0].count:0
        })
    }

    sortPrice = (value) =>{
        console.log(value)
        var {listProduct} = this.state;
        listProduct = listProduct.sort((a,b)=>{
            if(a.price > b.price) return -value
            else if(a.price < b.price) return value
            else return 0
        })
        
        this.setState((state)=>{
            return{listProduct: listProduct}
        })
    }

    render() {
        let size = ["XS","S","M","ML","L","XL","XLL"];
        return (
            <>
                <div className="container" id="container">
                    <ProductSize sizes={size} onClickSize={this.onClickSize}/>
                    <ProductShow products={this.state.listProduct} onClickAddCart={this.onClickAddCart} sortPrice={this.sortPrice}/>
                    <ProductCart listCart={this.state.listCart} subtotal={parseFloat(this.state.subtotal).toFixed(2)} onClearProduct={this.onClearProduct}/>
                </div>
                <ProductPill listCart={this.state.listCart}/>
            </>
        )
    }
}

export default PipiShop;
