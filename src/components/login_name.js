import React,{ Component }  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'reactstrap/lib/Card';
import styled from 'styled-components/macro';

const login_name = () => {
    return (
     <Container>
      <Form>
      <b>GRADIGO</b>
      <Card style={{ width: '25rem', height: '30rem' }}>
    <h3> Login </h3>
    <h4><strong>Log In Into Your Gradigo Account</strong></h4>
   <Form>
  <label for="fname"><strong>Username or Email</strong></label>
  <input className="creative"type="text" id="fname" name="fname" placeholder="Email"/>
  <label for="lname">Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <input className="creat" type="text" id="lname" name="lname" placeholder="Passsword"/>
  <input type="checkbox"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Remember me</span>
</Form>
 <button type="submit" className="block">LOGIN</button>
   <h8><Link to="signin">Forgot Password</Link></h8>
    <p className="dont">Don't have an account ?&nbsp;<Link to="signin">Sign up</Link></p>
    </Card>
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
   padding-left:150px;
   padding-top: 20px;
   font-weight: 900;
}
h4 {
    padding-left: 50px;
    font-size: 15px;
    
}

.creative  {
  width: 95%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

}
.creat  {
  width: 95%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

}
h8 {
  position:absolute;
  color: #999;
  padding-left: 280px;
  font-size: 14px;
  bottom:195px;
}
.block {
  color: white;
  width: 52%;
  background-color: #02083f;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
  position:absolute;
  left:100px;
  bottom:140px;

}
.dont
{
  position:absolute;
  bottom:70px;
  left:90px;
 
}

`;

export default login_name;


