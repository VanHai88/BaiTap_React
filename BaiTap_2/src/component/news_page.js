import React from 'react';
import ListNews from './list_news'
import Register from './register'
import NewsPost from './news_posts'

class NewsPage extends React.Component {
  render() {
    let arrdataNewPage = [
      {
        img: "/images/img1.jpg",
        title: "HƯỚNG DẪN HỌC REACTJS",
        postedBy: "Nguyễn Nhân",
        time: "Th2 23.2020",
        topic: "Javascript",
        arrTopic: ["React"],
        indexStar: 4,
        content: "Hướng dẫn học React Js sao cho hiệu quả! Nếu bạn mới làm quen với React hoặc phần fornt-end mới...",
        link: "https://www.google.com/"
      },
      {
        img: "/images/img2.jpg",
        title: "HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPONENT CHUẨN TRONG REACT",
        postedBy: "Nguyễn Hải",
        time: "Th5 20.2020",
        topic: "Javascript",
        indexStar: 5,
        arrTopic: ["Lập trình", "Môi trường phát triển", "React"],
        content: "Sau một thời gian tìm hiểu và áp dụng rất hiệu quả , hôm nay mình chia sẻ với các bạn cấu trúc thư...",
        link: "https://www.google.com/"
      },
      {
        img: "/images/img3.jpg",
        title: "HƯỚNG DẪN CÀI ĐẶT WEBPACK ĐỂ VIẾT REACTJS/ES6",
        postedBy: "Hoàng Cao",
        time: "Th5 28.2020",
        topic: "Javascript",
        indexStar: 1,
        arrTopic: ["Lập trình", "Môi trường phát triển", "React"],
        content: "Trên trang chủ của Reactjs thì các mã ví dụ điều được viết bằng ES5, mặc dù viết bằng ES5 hay ES6...",
        link: "https://www.google.com/"
      },
      {
        img: "/images/img4.png",
        title: "HƯỚNG DẪN SỬ DỤNG REDUX HIỆU QUẢ TRONG ỨNG DỤNG REACT",
        postedBy: "Nguyễn Nhân",
        time: "Th2 23.2020",
        topic: "Javascript",
        indexStar: 0,
        arrTopic: ["Lập trình", "React", "React Native"],
        content: "Câu hỏi: khi nào thì nên sử dụng Appilication State {Redux Store}, khi nào thì nên sử dụng Local...",
        link: "https://www.google.com/"
      },
      {
        img: "/images/img5.png",
        title: "VÒNG ĐỜI CỦA COMPONENT TRONG REACTJS VỚI ES6",
        postedBy: "Nguyễn Nhân",
        time: "Th2 23.2020",
        topic: "Javascript",
        indexStar: 2,
        arrTopic: ["Lập trình", "React"],
        content: "Có thể nói khái niệm component trongReact là một trong những thành phần quan trọng nhất của...",
        link: "https://www.google.com/"
      }
    ]

    let arrPost = [
      {
        img: "/images/img6.jpg",
        title: "Hãy sẵn sàng với Serverless",
        time: "Th11 28.2018",
        arrTopic: ["Công nghệ", "Hệ điều hành", "Máy chủ web", "Môi trường phát triển"]
      },
      {
        img: "/images/img7.jpg",
        title: "Fullstack Station chuyển tên miền từ Business Card",
        time: "Th6 4.2018",
        arrTopic: ["Giao lưu"]
      },
      {
        img: "/images/img8.jpg",
        title: "Áp dụng các chiêu thức võ học vào lập trình",
        time: "Th4 10.2018",
        arrTopic: ["Lập trình"]
      },
      {
        img: "/images/img9.jpg",
        title: "Kinh nghiệm dành cho người mới lập trình Python",
        time: "Th3 16.2018",
        arrTopic: ["Lập trình", "Môi trường phát triển", "Python"]
      },
      {
        img: "/images/img10.png",
        title: "Hường dẫn tạo Graphql Server một cách dễ dàng - phần 1",
        time: "Th11 28.2018",
        arrTopic: ["Công nghệ", "GraphQL", "Nodejs"]
      }
    ]

    var addContent = arrdataNewPage.map((value, index) => {
      return <ListNews key={index} img={value.img} title={value.title} postedBy={value.postedBy} time={value.time} topic={value.topic} arrTopic={value.arrTopic} indexStar={value.indexStar} content={value.content} link={value.link} />;
    });

    var addContentPost = arrPost.map((value,index)=>{
      return <NewsPost key={index} img={value.img} title={value.title} time={value.time} arrTopic={value.arrTopic}/>
    });

    return (
      <div className="container">
        <div className="block_content">
          <div className="block_list_news">
            <h2 className="title_page">
              SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO
              </h2>
            {addContent}
          </div>
          <div className="block_sidebar">
            <Register />
            <div className="block_posts">
              <h3>BÀI VIẾT MỚI</h3>
              {addContentPost}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsPage;
