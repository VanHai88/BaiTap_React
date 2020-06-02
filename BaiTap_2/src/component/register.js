import React from 'react';

class Register extends React.Component{
  render(){
    return(
      <div className="block_register">
        <h3>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h3>
        <p>Công nghệ đang thay đổi nhanh chóng, hãy cùng vươn ra thế giới với những bài viết chất lượng từ Fullstack Station bạn nhé.</p>
        <form>
          <input type="text" placeholder="TÊN CỦA BẠN"></input>
          <input type="text" placeholder="EMAIL CỦA BẠN"></input>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          <label htmlFor="vehicle1"> Would you like to receive the latest gmail notification?</label><br/>
          <a href="https://www.google.com/">ĐĂNG KÝ</a>
          <p>Bạn sẽ nhận được email thông báo khi cfos bài viết mới, mình khồn spam vì mình cũng rất ghét :)</p>
        </form>
      </div>
    )
  }
}

export default Register;
