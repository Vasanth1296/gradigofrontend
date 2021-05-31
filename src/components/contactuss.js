import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Imgbg from "../assests/team.png"
import styled from 'styled-components/macro'

class contactus extends Component {
  render () {
    return (
        <div>
        <div>
       <img src={Imgbg} alt="About Us" width="100%" height="100%" />
      </div>
      <Container>
          <Wrapper>
          </Wrapper>
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

`;

const Form = styled.form`

`;
const Wrapper = styled.div`

`;

export default contactus;

