import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro'
import bgImg from "../assests/v.jpg"
import bgImg1 from "../assests/Add9.png"
import bgImg3 from "../assests/subscribe.png"
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

const homes2 = () => {
  return (
    <Container>
        <div>
         
        <div className="carousel">
        <Carousel  >
           <Carousel.Item style={{ textAlign: "center" }}  >
          <Card style={{ width: '40rem' }}>
            <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
            </Card>
           
            </Carousel.Item>
            <Carousel.Item style={{ textAlign: "center" }}>
         <Card style={{ width: '40rem' }}>
            <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
            </Card>
           </Carousel.Item>

            <Carousel.Item style={{ textAlign: "center" }}>
           
            <Card style={{ width: '40rem' }}>
            <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
            </Card>
          
            </Carousel.Item>

        </Carousel>
        </div>
        <img src={bgImg} width="100%" height="100%"/>
       
        <img src={bgImg1} width="100%" height="100%"/>
        <div class="cont">
        <img  class="conta" src={bgImg3}width="100%" height="100%"/></div>
        <h4 className="bec"><b>BECOME AN INSTRUCTOR?</b></h4> 
        <p className="join">Join Thousand Of Instructors And Earn Money Hassle Free!</p>
        <div class="container"> 
        <a href="/instructor"><button class="btn" >Get Started Now</button> </a>
        <h4 className="son"><b>Subscribe Our Newsletter</b></h4>
        <p className="down">Your Download Should Start Automatically, If Not Click Here. Should I Give Up, Huh?.</p>
        <div className="footer-newsletters">
         <input type="email" name="Enter Your Email" />
         <input type="SUBMIT" defaultValue="Subscribe" name="Subscribe" />
         </div>
        </div>
         </div>
    </Container>
  )
}
const Container = styled.div` 

.footer-newsletters {
  position: absolute;
  bottom: 60%;
  padding-bottom: 16%;
  left: 67%;
  border-radius: 50px;
}
.footer-newsletters input[type="email"] {
  background: #ffffff;
  border: 10;
  width: 68%;
  padding: 0 0;
  text-align: center;
  color: rgb(0, 0, 0);
  border-radius: 4px;
}
 .footer-newsletters input[type="submit"] {
  background: #6078ff;
  border: 10;
  width: 32%;
  padding: 5px 0;
  text-align: center;
  color: rgb(255, 255, 255);
  transition: 0.3s;
  cursor: pointer;
  border-radius: 6px;
}
.son{
  position: absolute;
  max-width:2000%;
  bottom: 210px;
  left: 30px;
  color: white;
}
.down{
  position: absolute;
  max-widht:2000%;
  bottom: 170px;
  left: 30px;
  color: white;
}
.bec{
  position: absolute;
  top: 670%;
  left: 430px;
  color: white;
  max-widht:2000%;
}  
.join{
  position: absolute;
  top: 675%;
  left: 430px;
  color: white;
  max-widht:2000%;
}
.container {
  position: relative;
  width:1500px;
  max-widht:2000px;
}
.container img{
 padding-right:100px;
 width: 1500px;
 height: 450px;
}

.container .btn {
 position: absolute;
 bottom: 350px;
 left: 50%;
 transform: translate(-50%, -50%);
 background-color: #191f3d;
 color: #fff;
 font-size: 16px;
 padding:16px 10px;
 border: none;
 cursor: pointer;
 border-radius: 5px;
}
.containers .btn {
  position: absolute;
  top: 1580px;
  left: 48%;
  transform: translate(-50%, -50%);
  background-color: #6078ff;
  color: #fff;
  font-size: 16px;
  padding:9px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
 }
 .carousel
 {
  position: absolute;
  top: 1620px;
  left: 30%;
 }

`; 

const Form = styled.form`
`

export default homes2;



