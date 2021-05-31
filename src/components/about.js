import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Imgbg from "../assests/aboutus.png"
import Imgbg1 from "../assests/Frame3.png"
import Imgbg2 from "../assests/Why2.png"
import Imgbg3 from "../assests/design.png"

import styled from 'styled-components/macro'

class about extends Component {
  render () {
    return (
      <Container>
      <div>
      
       <img src={Imgbg} alt="About Us" width="100%" height="100%" />
      </div>
      <Form>
    <h3> Our Story </h3>
    <h4>Discover Your Perfct Program In Our Courses.</h4>
    <h4>Convallis vitae, nunc ut venenatis, lectus. Tellus nunc orci dolor nec facilisis et lacus, eu aliquet. Amet imperdiet ac venenatis, lacus. Tortor interdum quisque et, eu etiam ac. Hac lectus at posuere est consequat euismod tellus ut. Dolor ut diam sed dignissim eget gravida. Lectus mattis hac vitae, sed quis vel ornare sed. Ut vel cursus sed id eu. Laoreet bibendum eget dui sapien bibendum sapien. </h4>
    <img src={Imgbg1} alt="About Us"  width="45%" height="45%" />
    <img src={Imgbg3} alt="About Us"  width="79%" height="79%" />
    <img src={Imgbg2} alt="About Us" width="100%" height="100%" />
    </Form>
      </Container>
    );
  }
}

const Container = styled.div`   
text-align: center;
`;

const Form = styled.form`
padding-bottom: 300px;
h3 {
   color: #2c3252;
   padding-top: 50px;
   font-weight: 900;
}
h4 {
  color: #2c3252;

  font-size: 15px;
}
img .Imgbg1{
  padding-left: 100px;
}
`;



export default about;

//import Imgbg2 from "../assests/FOOTER.png"
//<img src={Imgbg2} alt="About Us" width="1350" height="350" />