import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Imgbg from "../assests/courselist.png"
import styled from 'styled-components/macro'

class courselist extends Component {
  render () {
    return (
        <div>
        <div>
        <img src={Imgbg} alt="About Us" width="100%" height="100%" />
        </div>
      <Container>
      <div className="footer-newsletter">
         <input type="email" name="Enter Your Email" placeholder="What do you want to learn ?" />
         <input type="SUBMIT" defaultValue="Subscribe" name="Subscribe" />
         </div>
      <Form>
      
    </Form>
    
      </Container> 
      
      </div>
      
    );
  }
}

const Container = styled.div` 
overflow-x: hidden;
padding-left: 400px;
margin: 0px ;

color: #302e52;
  font-family: Jost;
  opacity: 1;

.footer-newsletter {
  font-family: sans-serif;
  position: absolute;
  top:220px;
  right:650px;
  border-radius: 50px;
  
}
  .footer-newsletter input[type="email"] {
    position: absolute
    background: #fff;
    border: 10;
    width: 112%;
    padding: 0 0;
    text-align: center;
    color: White;
    border-radius: 4px;
 
  }
   .footer-newsletter input[type="submit"] {
    position: absolute;
    background: #6078ff;
    border: 10;
    top: 0px;
    left:225px;
    width: 50%;
    padding: 5px 0;
    text-align: center;
    color: rgb(255, 255, 255);
    transition: 0.3s;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Form = styled.form`

`;


export default courselist;

