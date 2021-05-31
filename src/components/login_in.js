import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro'
import bgImg from "../assests/Frame.png"



const login_in = () => {
  return (
    <Container>
      <Wrapper>
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`   
 max-width: 1000px;
 padding-top: 50px;
 padding-left: 50px;
 background: FFFFFF;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
`;

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  padding-top: 1px;
  background-size: 85% 85%;
  width: 80%;
  height: 80%;
`;






export default login_in;
