import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import Imgbg from "../assests/instructor.png";
import Imgbg1 from "../assests/blue.png";
import Imgbg2 from "../assests/white.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const instru = () => {
    return (
		<Container>
         <h2>Become An Instructor </h2>
         <p>Home   /   Become  an Instructor </p>
         <p className="gradig">Apply As Instructor</p>
         <p className="gradi">Discover your perfect program in our courses.</p>
         <p className="gard">Convallis vitae, nunc ut venenatis, lectus. Tellus nunc orci dolor nec facilisis et lacus, eu aliquet. Amet imperdiet ac venenatis, lacus. Tortor interdum quisque et, eu etiam ac. Hac lectus at posuere est consequat euismod tellus ut. Dolor ut diam sed dignissim eget gravida. Lectus mattis hac vitae, sed quis vel ornare sed. Ut vel cursus sed id eu. Laoreet bibendum eget dui sapien bibendum sapien.</p>
       
         <Form >
      <img src={Imgbg} alt="footer" class="center" />
      <div  className="tab">
          <Tabs>
              <TabList>
                  <Tab><b>Become an Instructor</b></Tab>
                  <Tab><b>Instructor Rule</b></Tab>
                  <Tab><b>Start with courses</b></Tab>
              </TabList>

              <TabPanel>
                  <p className="instru">
                 <b>Become</b>&nbsp;&nbsp;&nbsp;
                  Do you want to become a UI/UX designer but you don't know where to start? This course will allow you to develop your user interface design skills and you can add UI designer to your CV and start getting clients for your skills.
                  </p></TabPanel>
                  <TabPanel>
                  <p className="instru">
                 <b>Instructor Rules</b>&nbsp;&nbsp;&nbsp;
                 Do you want to become a UI/UX designer but you don't know where to start? This course will allow you to develop your user interface design skills and you can add UI designer to your CV and start getting clients for your skills.
                  </p>
                  </TabPanel>
                  <TabPanel>
                  <p className="instru">
                 <b>Start With course</b>&nbsp;&nbsp;&nbsp;
                  Do you want to become a UI/UX designer but you don't know where to start? This course will allow you to develop your user interface design skills and you can add UI designer to your CV and start getting clients for your skills.
                  </p>
              </TabPanel>
       </Tabs>
      
       </div>
       </Form>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <img src={Imgbg1} class="centers"  width="100%" height="100%" />
       <img src={Imgbg2} class="white"   />
       <p className="create">Create Free Account To Get</p>
       <p  className="register"> REGISTER TO BECOME A TEACHER </p>
       <input className="email" style={{ width:"230px" }} type="text"  placeholder="Your Name"/>
       <input className="password" style={{ width:"230px" }} type="text"  placeholder="Email"/>
       <input className="phone" style={{ width:"230px" }} type="text"  placeholder="Phone"/>
       <button  className="block">SUBMIT</button>
       <p className="discount">REGISTER NOW AND GET A 50% DISCOUNT</p>
       <p  className="free">Get 100 Online Course For Free</p>
       </Container>
         
)
    }
 
const Container = styled.div`
h2{
    position: absolute;
    bottom: 500px;
    left: 520px;
    font-weight: bold;
    color: #2c3252;
}
p{
    position: absolute;
    bottom: 460px;
    left: 570px;
    color: #a0a0a0;
}
.gradig{
    position: absolute;
    bottom: 350px;
    left: 600px;
    color: #2c3252;
    font-weight: bold;
}
.gradi {
    position: absolute;
    bottom: 330px;
    left: 510px;
}
.gard{
    position: absolute;
    bottom: 200px;
    left: 60px;
    text-align:center;
    right:60px
}
.white {
    position: absolute;
    top: 1100px;
    left: 900px;
    width:20%;
    height:40%;
    font-weight: bold;
    color: #2c3252;
}    
.create {
    position: absolute;
    top: 1030px;
    left: 928px;
    width:25%;
    height:50%;
    font-weight: bold;
    color: #2c3252;
}
.register{
    position: absolute;
    top: 1070px;
    left: 905px;
    width:25%;
    height:50%;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.email {
    position: absolute;
    top: 1120px;
    left: 910px;
    color: #000000;
}
.password {
    position: absolute;
    top: 1170px;
    left: 910px;
    color: #000000;
}
.phone {
    position: absolute;
    top: 1230px;
    left: 910px;
    color: #000000;
}
.block {
    position: absolute;
    top: 1319px;
    left: 1032px;
    width:200px;
    background: #6078ff;
    color: #fff;
    transform: translate(-50%, -50%);
    padding:9px 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
}
.discount{
    position: absolute;
    top: 1080px;
    left: 250px;
    color: #fff;
    font-weight: bold;
}

.free {
    position: absolute;
    top: 1110px;
    left: 290px;
    color: #2c3252;
}
}
`;
    
const Form = styled.form`

.center {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  left:350px;
  top:470px;
}
.centers {
    position: relative;
    max-width: auto;
  }
.tab{
    padding-left:29%;
    padding-top:62%;
    width:900px;
    height:950px;

}
.instru{
   top:900px;
   left:90px;
}

`;
export default instru;