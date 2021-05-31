import React,{ Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'
import Imgbg1 from "../assests/Founderror.png"
import Footer from './footer';

  class error extends Component {
    render () {
      return (
        <Container>
       &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;
         <img src={Imgbg1} alt="About Us"  width="50%" height="50%"/>
       
        </Container>
      );
    }
  }
  
  const Container = styled.div`   
  text-align: center;
  position: absolute;
  top: 100px;
  right: 130px;

  `;
  export default error;
