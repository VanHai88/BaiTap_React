import React from 'react';
import ListProduct from './list_product'
import ListOrder from './list_order'

class ShowPizaa extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      totalCount: 0,
      listOrder: [],
      products: [
        {
          id: 1,
          name: "Thu Huyền",
          img: "/images/img1.jpg",
          price: 3.5,
          count: 0
        },
        {
          id: 2,
          name: "Khánh Ly",
          img: "/images/img2.jpg",
          price: 2.5,
          count: 0
        },
        {
          id: 3,
          name: "Thu Phương",
          img: "/images/img3.jpg",
          price: 2.5,
          count: 0
        },
        {
          id: 4,
          name: "Bích Phương",
          img: "/images/img4.jpg",
          price: 5,
          count: 0
        },
        {
          id: 5,
          name: "Thu Hiền",
          img: "/images/img5.jpg",
          price: 2,
          count: 0
        },
        {
          id: 6,
          name: "Ly lY",
          img: "/images/img6.jpg",
          price: 4,
          count: 0
        },
        {
          id: 7,
          name: "Na Na",
          img: "/images/img7.jpg",
          price: 5.5,
          count: 0
        }
      ]
    }
  };

  onClickNext = (id_item)=>{
    var {listOrder, products} = this.state;
    var startPrice =  products.filter(product => product.id===id_item);
    var {id,price, count} = startPrice[0]
    if(id_item === id){
      this.setState({
        products: products.map(value=>{
          if(id === value.id){
            return {...value, count: value.count<10?value.count+1:value.count};
          }else{
            return value;
          }
        }),
        totalCount: count < 10 ? this.state.totalCount + price : this.state.totalCount,
        listOrder: [...listOrder,startPrice[0].id,startPrice[0]]
      })
    }
  }

  onClickPrev = (id_item)=>{
    var {products, listOrder} = this.state;
    var indexItem = listOrder.lastIndexOf(id_item)
    var arrProdrct = [...this.state.listOrder]
    if(indexItem !== -1){
      arrProdrct.splice(indexItem,2)
    }
    var startPrice =  products.filter(product => product.id===id_item);
    var {id, price, count} = startPrice[0]
    if(id_item === id){
      this.setState({
        products: products.map(value=>{
          if(id === value.id){
            return {...value, count: value.count>0?value.count-1:value.count};
          }else{
            return value;
          }
        }),
        totalCount: count > 0 ? this.state.totalCount - price : this.state.totalCount,
        listOrder: arrProdrct
      })
    }
  }

  resetAll = ()=>{
    this.setState({
      totalCount: 0,
      listOrder: [],
      products: this.state.products.map(value=>{
        return {...value, count: 0};
        })
      })
  }

  render(){
    var productOrder = this.state.listOrder.map((value, index)=>{
      return typeof value === 'object'? <ListOrder key={index} product={value}/>:false
    });
    return(
       <div className="container">
          <div className="block_order">
            <h1>HOT GIRL</h1>
            <div className="list_product_order">
              {productOrder}
            </div>
          </div>
          <ListProduct resetAll={this.resetAll} products={this.state.products} total={this.state.totalCount} onClickNext={this.onClickNext} onClickPrev={this.onClickPrev}/>
       </div>
    )
  }
}

export default ShowPizaa;
