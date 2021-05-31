import React,{ Component } from 'react';
import styled from 'styled-components/macro';
import Card from "react-bootstrap/Card";
import {Form,Button} from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Imgbg from "../assests/instructor.png";

class Sett extends Component {
    render() {
return(
    <Container>
  <div>
  <h3>Settings</h3>
          <p className="readyto">Ready To Jump Back In?</p>
          <p className="card"></p>
          <Card style={{ width: '65rem', height: '35rem' }}>
          <Card.Body>
          <Tabs>
              <TabList>
                  <Tab><b>General</b></Tab>
                  <Tab><b>Avatar</b></Tab>
                  <Tab><b>Password</b></Tab>
              </TabList>
              <TabPanel>
              <p className="bio"><b>Biographical Info</b></p>
              <div className="input"> 
              <label for="exampleFormControlTextarea1"></label> <textarea id="exampleFormControlTextarea1" rows="8"></textarea> 
              </div>
              <p className="first"><b>First Name</b></p>
              <div className="input2"> 
              <label for="exampleFormControlTextarea1"></label> <textarea id="exampleFormControlTextarea1" rows="2"></textarea> 
              </div>
              <p className="nick"><b>Nickname</b></p>
              <div className="input3"> 
              <label for="exampleFormControlTextarea1"></label> <textarea id="exampleFormControlTextarea1" rows="2"></textarea> 
              </div>
              <p className="mobile"><b>Mobile Number</b></p>
              <div className="input4"> 
              <label for="exampleFormControlTextarea1"></label> <textarea id="exampleFormControlTextarea1" rows="2"></textarea> 
              </div>
              <p className="email"><b>E-mail ID</b></p>
              <div className="input5"> 
              <label for="exampleFormControlTextarea1"></label> <textarea id="exampleFormControlTextarea1" rows="2"></textarea> 
              </div>
              </TabPanel>
              <div className="butto">
              <button type="button" class="btn btn-primary">SAVE CHANGES</button>
              </div>
              <TabPanel>
              
              <div>
    
              </div>
              
              </TabPanel>
              <TabPanel>
              <p className="old"><b>Old password</b></p>
              <div className="input6"> 
              <label for="exampleFormControlTextarea1"></label> <textarea id="exampleFormControlTextarea1" rows="2"></textarea> 
              </div>
              <p className="new"><b>New password</b></p>
              <div className="input7"> 
              <label for="exampleFormControlTextarea1"></label> <textarea id="exampleFormControlTextarea1" rows="2"></textarea> 
              </div>
              <p className="confo"><b>Confirmation password</b></p>
              <div className="input8"> 
              <label for="exampleFormControlTextarea1"></label> <textarea id="exampleFormControlTextarea1" rows="2"></textarea> 
              </div>
              </TabPanel>
              </Tabs>
          </Card.Body>
          </Card>
  </div>
      
      </Container>
    );
}}

const Container = styled.div`
.confo{
    position:absolute;
    top: 300px;
}
.new{
    position:absolute;
    top: 190px;
}
.old{
    position:absolute;
    top: 80px;
}
.butto{
    position:absolute;
    top:485px;
}
.email{
    position:absolute;
    top: 68%;
    left:51%;
}
.mobile{
    position: absolute;
    top: 68%;
    
}
.nick{
    position:absolute;
    top: 51%;
    left:51%;
}
.first{
    position:absolute;
    top: 51%;
}
.bio{
    position:absolute;
    top: 13%;
}
.input8{
    position:absolute;
    top:330px;
    width:46%;
}
.input7{
    position:absolute;
    top:210px;
    height:60%;
    width:46%;
}
.input6{
    position:absolute;
    top:100px;
    height:60%;
    width:46%;
}
.input5{
    position:absolute;
    top:400px;
    left: 51%;
    height:60%;
    width:46%;
}
.input3{
    position:absolute;
    top:300px;
    left: 51%;
    height:60%;
    width:46%;
}
.input4{
    position:absolute;
    top:400px;
    height:60%;
    width:46%;
}
.input2{
    position:absolute;
    top:300px;
    height:60%;
    width:46%;
}
.input{
    position:absolute;
    top:90px;
    height:40%;
    width:95%;
}
.card{
    position: absolute;
    left: 20%;
    top:30%;
}
h3
{
    position:absolute;
    left: 20%;
    top: 13%;
}
.readyto{
  position:absolute;
  left:20%;
  top:20%;
  padding-bottom:10%;
  color:#2c3252; 
}
`;

export default Sett;