import React from 'react';

class NewsPost extends React.Component {
  render() {
    let tagTopic = "";
    for(let value of this.props.arrTopic){
      tagTopic += value+" ,";
    }
    return (
      <div className="posts_content">
        <img src={this.props.img} alt="img" />
        <div className="content">
          <h4>{this.props.title}</h4>
        <p>{this.props.time} <span></span> {tagTopic.substring(0, tagTopic.length-2)}</p>
        </div>
      </div>
    )
  }
}

export default NewsPost;
