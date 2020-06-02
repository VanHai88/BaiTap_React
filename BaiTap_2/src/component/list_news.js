import React from 'react';

class ListNews extends React.Component {
  render() {
    var itemTopic = "";
    for(let value of this.props.arrTopic){
      itemTopic += value+", ";
    }

    let className = "fas fa-star";
    let tempclass= className;
    var arrStart = [];
    for(let i = 0; i < 5; i++){
      if(i < this.props.indexStar){
        tempclass += " bright";
        arrStart.push(<li key={i}><i className={tempclass}></i></li>);
      }else{
        arrStart.push(<li key={i}><i className={className}></i></li>);
      }
    }

    return (
      <div className="block_list">
        <img src={this.props.img} alt="img"></img>
        <div className="block_list_content">
          <h3>{this.props.title}</h3>
          <p className="text_child">Posted by {this.props.postedBy}<span>{this.props.time}</span>{this.props.topic}</p>
          <div className="estimate">
            <p className="text_child">{itemTopic.substring(0,itemTopic.length-2)}</p>
            <ul className="list-star">
              {arrStart}
            </ul>
          </div>
          <p>{this.props.content}</p>
          <a href={this.props.link}>READ MORE</a>
        </div>
      </div>
    )
  }
}

export default ListNews;
