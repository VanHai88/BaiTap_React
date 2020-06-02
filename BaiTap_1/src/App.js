import React from 'react';
import './App.css';
import PageColor from './component/PageColor'

class App extends React.Component{
  render(){
    return(
      <div className="container">
          <header className="header">
            <h1> So Jrine!</h1>
            <h2>By Jhon Flynn</h2>
            <h3>FREAT FOR QUILTING 	&amp; SEWING</h3>
          </header>
          <section className="table_color">
            <div>
              <PageColor id="451" name="Pink" color="#FFC0CB"/>
              <PageColor id="452" name="LightPink" color="#FFB6C1"/>
              <PageColor id="453" name="HotPink" color="#FF69B4"/>
              <PageColor id="454" name="DeepPink" color="#FF1493"/>
              <PageColor id="455" name="PaleVioletRed" color="#DB7093"/>
              <PageColor id="456" name="MediumVioletRed" color="#C71585"/>
              <PageColor id="457" name="Lavender" color="#E6E6FA"/>
              <PageColor id="458" name="Thistle" color="#D8BFD8"/>
            </div>

            <div>
              <PageColor id="459" name="Plum" color="#DDA0DD"/>
              <PageColor id="460" name="Orchid" color="#DA70D6"/>
              <PageColor id="461" name="Violet" color="#EE82EE"/>
              <PageColor id="462" name="Fuchsia/Magenta" color="#FF00FF"/>
              <PageColor id="463" name="MediumOrchid" color="#BA55D3"/>
              <PageColor id="464" name="DarkOrchid" color="#9932CC"/>
              <PageColor id="465" name="DarkViolet" color="#9400D3"/>
              <PageColor id="466" name="BlueViolet" color="#8A2BE2"/>
            </div>

            <div>
              <PageColor id="467" name="Orange" color="#FFA500"/>
              <PageColor id="468" name="DarkOrange" color="#FF8C00"/>
              <PageColor id="469" name="Coral" color="#FF7F50"/>
              <PageColor id="470" name="Tomato" color="#FF6347"/>
              <PageColor id="471" name="OrangeRed" color="#FF4500"/>
              <PageColor id="472" name="MediumVioletRed" color="#C71585"/>
              <PageColor id="473" name="IndianRed" color="#CD5C5C"/>
              <PageColor id="474" name="Red" color="#FF0000"/>
            </div>
          </section>
          <footer className="footer">
            <div className="footer_poy">
              <p>#50/3 Polyester</p>
              <p>3,280 yd. cones</p>
              <p>09/10</p>
            </div>
            <div className="footer_Recommended">
              <p>Recommended needle: Home machines: Topstitch #90/14. Longarm machines: #16 (MR 3.5)</p>
            </div>
            <div className="footer_infor">
              <p>(800) 499-1777 &#9679; <span>WWW.Superiorthreads.com</span></p>
            </div>
          </footer>
      </div>
    )
  }
}

export default App;
