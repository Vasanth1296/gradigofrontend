import React,{ Component }  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Imgbg from "../assests/YOUR.png"
import Imgbg1 from "../assests/Our1.png"
import Imgbg2 from "../assests/GRADIGO.png"
import bgImg3 from "../assests/Why.png"
import Imgbg4 from "../assests/What1.png"
import bgImg5 from "../assests/features.png"
import Imgbg6 from "../assests/welcome1.png"
import bgImg6 from "../assests/Limitless1.png"
import { FaUserCircle } from "react-icons/fa";
import { IconName } from "react-icons/hi";


const homes = () => {
    return (
     <Container>
      <div class="gradigo">
      <img src={Imgbg2} alt="About Us" width="100%" height="100%" />
      <h8>(56)123 456 789 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  hello@gradigo.com</h8>
      <Link class="gradag"  to="/login">Home</Link>
      <Link class="grada"  to="/course">Courses</Link>
      
     
      <Link class="grad"  to="/signin">Login/Register</Link>
      </div>
      <div>
      <img src={bgImg3} alt="About Us" width="100%" height="90%" />
      <img src={bgImg5} alt="About Us" width="100%" height="85%" />
      <div class="containers">  
        <a href="/course"><button class="btn"  >Get Started Now</button> </a>
        </div>
      <img src={bgImg6} alt="About Us" width="100%" height="85%" />
      
      <img src={Imgbg} alt="About Us" width="100%" height="90%" />
      <img src={Imgbg1} alt="About Us" width="100%" height="90%" />
      <img src={Imgbg6} alt="About Us" width="100%" height="90%" />
        <img src={Imgbg4} alt="About Us" width="100%" height="90%" />
      </div>
    </Container>
    )}
    
const Container = styled.div`
h8{
  color:white;
  position:relative;
  bottom:620px;
  left:870px;
   
 }
 .containers .btn {
  position: absolute;
  top: 1580px;
  left: 48%;
  
  transform: translate(-50%, -50%);
  background-color: #6078ff;
  color: #fff;
  font-size: 16px;
  
  border: none;
  cursor: pointer;
  border-radius: 5px;
 }
.person{
  position: absolute;
 
  top: 500%;
  right: 190px;
  font-size: 15px;
  color: white;
}

 .gradigo {
  position: relative;
 
 }
 


`;


export default homes;
