import React from 'react';
import ProductInfo from './product_info'

class ProductShow extends React.Component {

    constructor(props){
        super(props);
        this.state={
            value: 0
        }
    }

    sortPrice = async(e) =>{
        var target = e.target;
       await this.setState({
            value: target.value
        })
        this.props.sortPrice(this.state.value)
    }
    render() {
        var {products} = this.props;
        var product = products.map((value, index) => {
            return <ProductInfo onClickAddCart={this.props.onClickAddCart} key={index} product={value}/>
        })
        return (
            <div className="product_show">
                    <div className="header_product">
                        <p>{products.length} Product(s) found</p>
                        <div>
                            <label>Order by </label>
                            <select
                                onChange={this.sortPrice}
                                value={this.state.value}
                            >
                                <option
                                   value={-0}
                                >Select</option>
                                <option
                                   value={-1}
                                >Lowest to highest</option>
                                <option
                                    value={1}
                                >Highest to lowest</option>
                            </select>
                        </div>
                    </div>
                    <div className="block_product">
                        {product}
                    </div>
                </div>
        )
    }
}

export default ProductShow