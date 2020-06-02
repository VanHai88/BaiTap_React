import React from 'react';

class ProductSize extends React.Component {
    onClickSize = (value) =>{
         document.getElementById("item_size" + value).classList.toggle("active");
         this.props.onClickSize(value);
    }
    render() {
        var size = this.props.sizes.map((value, index)=>{
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

export default ProductSize;