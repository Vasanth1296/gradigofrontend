import React,{ Component } from 'react';
import styled from 'styled-components/macro';
import Card from "react-bootstrap/Card";
import CardBody from 'reactstrap/lib/CardBody';
import {Form,Button} from "react-bootstrap";
import { HiSearch } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'

class Sidebar extends Component {
        render() {
    return(
        <Container>
      <div>
          <h3>Courses List</h3>
          <p className="readyto">Ready To Jump Back In?</p>
          <p className="card1">
          <Card style={{ width: '48.8rem', height: '60rem' }}>
          <Card.Body>
          <p><b>Course List </b></p>
            <Form className="dbmail">
  <input type="text"  placeholder="Search Our Courses"/>
  <p className="secon"><Link to="" class="fas fa-search"></Link></p>
</Form>
   <Card className="car1" style={{ width: '14rem', height: '23rem' }}>
   <div className="starat">
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" /> 
                     </div>
                     <p className="deve">Development</p>
                     <h4 className="cjc"><b>The Complete JavaScript Course 2020: Real Projects!</b></h4>
                     <p className="les">5 Lessons</p>
   </Card>
   <Card className="car2" style={{ width: '14rem', height: '23rem' }}>
   <div className="starat">
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" /> 
                     </div>
                     <p className="marke">Marketing</p>
                     <h4 className="ptm"><b>Productivity and Time Management for the...</b></h4>
                     <p className="les">5 Lessons</p>
</Card>
<Card className="car3" style={{ width: '14rem', height: '23rem' }}>
<div className="starat">
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" /> 
                     </div>
                     <p className="pedeve">Personal Development</p>
                     <h4 className="ehs"><b>Learn Ethical Hacking From Scratch</b></h4>
                     <p className="les">5 Lessons</p>
</Card>
<Card className="car4" style={{ width: '14rem', height: '23rem' }}>
<div className="starat">
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" /> 
                     </div>
                     <p className="deve">Development</p>
                     <h4 className="cjc"><b>The Complete JavaScript Course 2020: Real Projects!</b></h4>
                     <p className="les">5 Lessons</p>
   </Card>
   <Card className="car5" style={{ width: '14rem', height: '23rem' }}>
   <div className="starat">
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" /> 
                     </div>
                     <p className="marke">Marketing</p>
                     <h4 className="ptm"><b>Productivity and Time Management for the...</b></h4>
                     <p className="les">5 Lessons</p>
</Card>
<Card className="car6" style={{ width: '14rem', height: '23rem' }}>
<div className="starat">
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" /> 
                     </div>
                     <p className="pedeve">Personal Development</p>
                     <h4 className="ehs"><b>Learn Ethical Hacking From Scratch</b></h4>
                     <p className="les">5 Lessons</p>
</Card>

        </Card.Body>
          </Card></p>
          <p className="card2">
          <Card style={{ width: '17rem', height: '60rem' }}>
          <Card.Body>
        <p><b>Category</b></p>
        <button className="addnew">
          add new Category
        </button>
        <p className="bar"></p>
        <p className="cat"><b>Category</b></p>
        <p className="acti"><b>Action</b></p>

        <p className="bar1"></p>
        <p className="bar2"></p>
        <p className="bar3"></p>
        <p className="bar4"></p>
        <p className="bar5"></p>
      
        <p className="Desi">Design(10)</p>
        <Link className="edit1">Edit</Link>
        <p className="slash1">|</p>
        <Link className="del1">Delete</Link>

        <p className="scie">Science(0)</p>
        <Link className="edit2">Edit</Link>
        <p className="slash2">|</p>
        <Link className="del2">Delete</Link>

        <p className="pho">Photograph(100)</p>
        <Link className="edit3">Edit</Link>
        <p className="slash3">|</p>
        <Link className="del3">Delete</Link>

        <p className="ac">Arts & Crafts(05)</p>
        <Link className="edit4">Edit</Link>
        <p className="slash4">|</p>
        <Link className="del4">Delete</Link>

        <p className="vfx">VFX(120)</p>
        <Link className="edit5">Edit</Link>
        <p className="slash5">|</p>
        <Link className="del5">Delete</Link>

        <p className="soft">Software(1200)</p>
        <Link className="edit6">Edit</Link>
        <p className="slash6">|</p>
        <Link className="del6">Delete</Link>

        <p className="spor">Sports(50)</p>
        <Link className="edit7">Edit</Link>
        <p className="slash7">|</p>
        <Link className="del7">Delete</Link>

        <p className="mus">Music(20)</p>
        <Link className="edit8">Edit</Link>
        <p className="slash8">|</p>
        <Link className="del8">Delete</Link>

        <p className="acting">Acting(2)</p>
        <Link className="edit9">Edit</Link>
        <p className="slash9">|</p>
        <Link className="del9">Delete</Link>

        <p className="dan">Dance(13)</p>
        <Link className="edit10">Edit</Link>
        <p className="slash10">|</p>
        <Link className="del10">Delete</Link>
        
        </Card.Body>
          </Card></p>
          
          <div className="copyright">
            © Copyright <strong>Gradigo</strong>. All Rights Reserved
          </div>
          
        </div>
      
      </Container>
    );
}}
const Container = styled.div`
.les{
  position:absolute;
  top:87%;
  left:10%;
  color:grey;
}
.ehs{
  position:absolute;
  font-size: 15.5px;
  top:70%;
  left:3%;
}
.pedeve{
  position:absolute;
  color:grey;
  top:60%;
  left:5%;
}

.ptm{
  position:absolute;
  font-size: 15.5px;
  top:70%;
  left:3%;
}
.marke{
  position:absolute;
  color:grey;
  top:60%;
  left:5%;
}
.cjc{
  position:absolute;
  font-size: 15.5px;
  top:70%;
  left:3%;
}
.deve{
  position:absolute;
  color:grey;
  top:60%;
  left:5%;
}
.starat{
  position:absolute;
  top:87%;
  left:57%;
}
.car1{
  position: absolute;
  top: 10%;
  left: 4%;
}
.car2{
  position: absolute;
  top: 10%;
  left: 36%;
}
.car3{
  position: absolute;
  top: 10%;
  left: 68%;
}
.car4{
  position: absolute;
  top: 52%;
  left: 4%;
}
.car5{
  position: absolute;
  top: 52%;
  left: 36%;
}
.car6{
  position: absolute;
  top: 52%;
  left: 68%;
}
.edit10{
  position: absolute;
  top:473px;
  left: 165px;
}
.del10{
  position: absolute;
  top:473px;
  left: 205px;
}
.edit9{
  position: absolute;
  top:435px;
  left: 165px;
}
.del9{
  position: absolute;
  top:435px;
  left: 205px;
}
.edit8{
  position: absolute;
  top:395px;
  left: 165px;
}
.del8{
  position: absolute;
  top:395px;
  left: 205px;
}
.edit7{
  position: absolute;
  top:355px;
  left: 165px;
}
.del7{
  position: absolute;
  top:355px;
  left: 205px;
}
.edit6{
  position: absolute;
  top:320px;
  left: 165px;
}
.del6{
  position: absolute;
  top:320px;
  left: 205px;
}
.edit5{
  position: absolute;
  top:281px;
  left: 165px;
}
.del5{
  position: absolute;
  top:281px;
  left: 205px;
}
.edit4{
  position: absolute;
  top:243px;
  left: 165px;
}
.del4{
  position: absolute;
  top:243px;
  left: 205px;
}
.edit3{
  position: absolute;
  top:205px;
  left: 165px;
}
.del3{
  position: absolute;
  top:205px;
  left: 205px;
}
.edit2{
  position: absolute;
  top:165px;
  left: 165px;
}
.del2{
  position: absolute;
  top:165px;
  left: 205px;
}
.edit1{
  position: absolute;
  top:125px;
  left: 165px;
}
.del1{
  position: absolute;
  top:125px;
  left: 205px;
}
.dan{
  position: absolute;
  top:473px;
  left: 25px;
}
.slash10{
  position: absolute;
  top:473px;
  left: 195px;
}
.acting{
  position: absolute;
  top:435px;
  left: 25px;
}
.slash9{
  position: absolute;
  top:435px;
  left: 195px;
}
.mus{
  position: absolute;
  top:395px;
  left: 25px;
}
.slash8{
  position: absolute;
  top:395px;
  left: 195px;
}
.spor{
  position: absolute;
  top:355px;
  left: 25px;
}
.slash7{
  position: absolute;
  top:355px;
  left: 195px;
}
.soft{
  position: absolute;
  top:320px;
  left: 25px;
}
.slash6{
  position: absolute;
  top:320px;
  left: 195px;
}
.vfx{
  position: absolute;
  top:281px;
  left: 25px;
}
.slash5{
  position: absolute;
  top:281px;
  left: 195px;
}
.ac{
  position: absolute;
  top:243px;
  left: 25px;
}
.slash4{
  position: absolute;
  top:243px;
  left: 195px;
}
.pho{
  position: absolute;
  top:205px;
  left: 25px;
}
.slash3{
  position: absolute;
  top:205px;
  left: 195px;
}
.scie{
  position: absolute;
  top:165px;
  left: 25px;
}
.slash2{
  position: absolute;
  top:165px;
  left: 195px;
}
.Desi{
  position: absolute;
  top:125px;
  left: 25px;
}
.slash1{
  position: absolute;
  top:125px;
  left: 195px;
}
.cat{
  position:absolute;
  top:9%;
  left:13%;
  color:white;
}
.acti{
  position:absolute;
  top:9%;
  left:65%;
  color:white;
}
.bar{
  position: absolute;
  top:8%;
  left:3%;
  height: 6vh;
  width: 255px;
  background-color:#303956;
  border-radius: 2px;
}
.bar1{
  position: absolute;
  top:16%;
  left:3%;
  height: 6vh;
  width: 255px;
  background-color:#F5F7FA;
  border-radius: 3px;
}
.bar2{
  position: absolute;
  top:24%;
  left:3%;
  height: 6vh;
  width: 255px;
  background-color:#F5F7FA;
  border-radius: 3px;
}
.bar3{
  position: absolute;
  top:32%;
  left:3%;
  height: 6vh;
  width: 255px;
  background-color:#F5F7FA;
  border-radius: 3px;
}
.bar4{
  position: absolute;
  top:40%;
  left:3%;
  height: 6vh;
  width: 255px;
  background-color:#F5F7FA;
  border-radius: 3px;
}
.bar5{
  position: absolute;
  top:48%;
  left:3%;
  height: 6vh;
  width: 255px;
  background-color:#F5F7FA;
  border-radius: 3px;
}


.addnew{
  position: absolute;
  border: none;
  color: white;
  padding: 6px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 3px 5px;
  cursor: pointer;
  background-color: #2552AE;
  color: white;
  left: 47%;
  top: 10px;
}
.secon{
    position:absolute;
    top:30%;
    right: 5%;
}
.copyright{
    position:absolute;
    right: 30%;
    top: 183%;
    
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
.card1{
    position: absolute;
    left: 20%;
    top:30%;
}
.card2{
    position: absolute;
    left: 79%;
    top:30%;
}
.dbmail
{
    position:absolute;
margin:auto;
max-width:400px;
left:3%;
top:5%;
}
form.dbmail input[type=text] {
  padding-top: 0px;
  font-size: 15px;
  border: 1px solid grey;
  float: left;
  width: 100%;
  background: #f1f1f1;
}

form.dbmail button {
  position: absolute;
  float: right;
  width: 20%;
  top: 1px;
  padding-top: 10px;
  background: #2196F3;
  color: white;
  font-size: 20px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.dbmail button:hover {
  background: #0b7dda;
}

form.dbmail::after {
  content: "";
  clear: both;
  display: table;
}
`;

export default Sidebar;