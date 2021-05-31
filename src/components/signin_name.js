import React,{ Component }  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';


const signin_name = () => {
    return (
     <Container>
      <Form>
      <b>GRADIGO</b>
    <h3> Register </h3> 
    <h4>Sign Up and Start Learning</h4>
    <input style={{ width:"230px" }} type="text"  placeholder="Username"/>
    <input style={{ width:"230px" }} type="text"  placeholder="Email"/>
    <input style={{ width:"230px" }} type="text"  placeholder="Mobile Number"/>
    <input style={{ width:"230px" }} type="Password"  placeholder="Password"/>
    <button  className="block">SIGN UP</button>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<h2>Already have an account ?&nbsp; <Link to="login">Log In</Link></h2>
    </Form>
    </Container>
    )}
    
const Container = styled.div`
overflow-x: hidden;
padding-left: 900px;
padding-left: 900px;
padding-top: 0px;
margin: 0px ;

color: #302e52;
  font-family: Jost;
  font-size: 15px;
  font-weight: 900;
  font-size: 35px;
  opacity: 1;
`;

const Form = styled.form`
b {
    display: block;
    padding-left: 25px;
  }
h3 {
   padding-left: 50px;
   padding-top: 50px;
   font-weight: 900;
}
h4 {
    padding-left: 15px;
    font-size: 15px;
}
h2 {
  padding-left: 8px;
  font-size: 14px;
}

.block {
  color: white;
  width: 52%;
  background-color: #02083f;
  padding-left: 8px;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
`;

export default signin_name;