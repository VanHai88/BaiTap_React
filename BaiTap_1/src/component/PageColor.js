import React from 'react';

class PageColor extends React.Component{
  render(){
    var style = {
      width: "150px",
      height: "40px",
      backgroundColor: this.props.color
    }
    return(
      <div className="block_color">
        <div className="tag_name">
          <p>{this.props.id}</p>
          <p>{this.props.name}</p>
        </div>
        <div style={style}></div>
      </div>
    )
  }
}

export default PageColor;
