import React,{ Component } from 'react'
import Imgbg from "../assests/Figma.png";
import Imgbg1 from "../assests/face6.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components/macro'
import Card from "react-bootstrap/Card";
import {BsAlarm} from "react-icons/bs";
import { BiShareAlt} from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import ReactReadMoreReadLess from "react-read-more-read-less";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {GrNotes} from "react-icons/gr";
import { BsClockHistory } from "react-icons/bs";

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere";

const coursesingle = () => {
    return (
        <Container>
            <img src={Imgbg} alt="About Us" width="100%" height="100%" />
            <Form>
            <div  className="tabb">
          <Tabs>
              <TabList>
                  <Tab><b>Overview</b></Tab>
                  <Tab><b>Instructor</b></Tab>
                  <Tab><b>Reviews</b></Tab>
              </TabList>
             
              <TabPanel>
              <p className="card1">
<Card style={{ width: '20rem', height: '20rem' }}>
  
  <Card.Body>
    <Card.Title>
        <p className="dol">
        <b>$89.99</b></p>
        </Card.Title>
        <Card.Text>
            <p className="amt">339.99</p>
        <p className="rectangle">
            <p> 91% off</p>
        </p>
    </Card.Text>
    <Card.Text>
    
        <p className="day">
        <BsAlarm/>&nbsp;
       
      2 Days Left At This Price!</p>
    </Card.Text>
   
    <p className="but">
    <button type="button" class="btn btn-primary btn-lg btn-block">BUY NOW</button></p>
    <p className="but">
<button type="button" class="btn btn-dark btn-lg btn-block">ENROLL</button></p>

  </Card.Body>
  <Card.Footer>
      <p className="share">
          
    <Card.Link href="#"><BiShareAlt/>Share This Course</Card.Link></p>
  </Card.Footer>
</Card></p>

<div className="acc">
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Introduction
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Introduction to the course</p>
                   <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Introduction</p>
                   <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Structure of the course</p>
                   <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Required Tools</p>
                   <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get Your Free E-book</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Design Basics
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intro to Design Basics</p>
                    <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Layout</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visual hierarchy</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visual noise</p>
                    <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iconography</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typography</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Figma Academy
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intro to Design Basics</p>
                    <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Layout</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visual hierarchy</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visual noise</p>
                    <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iconography</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typography</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                     UI Elements
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intro to Design Basics</p>
                    <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Layout</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visual hierarchy</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visual noise</p>
                    <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iconography</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typography</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Assesment
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intro to Design Basics</p>
                    <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Layout</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visual hierarchy</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visual noise</p>
                    <p><GrNotes/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iconography</p>
                    <p><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typography</p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    
                 
                 <p className="course">Course Description</p>&nbsp;&nbsp;
                  <p className="overvie">Do you want to become a UI/UX designer but you don't know where to start? This course will allow you to develop your user interface design skills and you can add UI designer to your CV and start getting clients for your skills.
                  </p>
<div className="read">
 <ReactReadMoreReadLess
   charLimit={200}
   readMoreText={"Read more +"}
   readLessText={"Read less -"}
   readMoreClassName="read-more-less--more"
   readLessClassName="read-more-less--less"
 >
   {longText}
 </ReactReadMoreReadLess>
</div>
                <h4> What you'll learn </h4>
                  <p className="col">
                  <p><AiFillCheckCircle /> Become a UI/UX designer.</p>
                  <p><AiFillCheckCircle/> You will be able to start earning money Figma skills.</p>
                  <p><AiFillCheckCircle/> Build a UI project from beginning to end.</p>
                  <p><AiFillCheckCircle/> Work with colors & fonts.</p>
                  <p><AiFillCheckCircle/> You will create your own UI Kit.</p></p>

                  <p className="colu">
                      <p><AiFillCheckCircle/> Build & test a complete mobile app.</p>
                      <p><AiFillCheckCircle/> Learn to design mobile apps & websites.</p>
                      <p> <AiFillCheckCircle/>Design 3 different logos.</p>
                      <p><AiFillCheckCircle/> Create low-fidelity wireframe.</p>
                      <p><AiFillCheckCircle/> Downloadable exercise files.</p>
                  </p>
                 
                 
               <p className="requirement"> Requirements </p>
               <p className="requir">
                  <li> We do not require any previous experience or pre-defined skills to take this course. A great&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                      orientation would be enough to master UI/UX design.</li>&nbsp;&nbsp;
                 <li> A computer with a good internet connection.</li>&nbsp;&nbsp;
                 <li> Adobe Photoshop (OPTIONAL)</li>
                      </p>
                  </TabPanel>
                  <TabPanel>
                  <p className="overvie">
                 <p><b>About the instructor</b></p>&nbsp;&nbsp;&nbsp;</p>
                 <p className="img1">
                 <img src={Imgbg1} alt="About Us" width="20%" height="20%" /></p>
               
                    <p className="lauren" > Lauren Handerson</p>&nbsp;&nbsp;&nbsp;
                    <p className="dev" >iOS developer & UI Designer</p>
                    
                    
                 <p>I am a UI/UX designer and an iOS developer with having almost six years of experience in application 
                 developement and also ten years of graphic design and User Interface design. 
                  </p>
                  <p>My Passion is helping people to learn new skills in a short-term course and achieve their goals. I've been 
                      designing for more than ten years and developing iOS apps for four years. It's my honor if I could help you learn
                      to program in a simple wors. I currently am teching iOS 13, Swift 5, ARKit 3, Sketch 5, Illustrator, Photoshop,
                      Cinema 4D, HTML, CSS, JavaScript, etc. </p>
                  </TabPanel>
                  <TabPanel>
                  <p><b>Student feedback</b></p>&nbsp;&nbsp;&nbsp;
                      <p className="card2">
                          <Card style={{ width: '18rem', height: '18rem' }}>

                          
                              <Card.Body>
                                <Card.Title>
                                    <h1 className="num">
                                        <b>4.93</b>
                                    </h1>
                                    
                                </Card.Title>
                               <Card.Text>
                                 
                               <b className="coursee">Course rating</b>
                               </Card.Text>
                               <div className="star">
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" /> 
                     </div>
                              </Card.Body>
                          </Card>
                          </p>
                          <p className="oscar">
                          <p>Oscar Cafeo</p>
                          <p className="beauty">Beautiful courses</p>
                          <div className="starr">
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" /> 
                     </div>
                          <p>This course was well organized and covered a lot more details than any other Figma courses. I
                              really enjoy it. One suggestion is that it can be much better if we could complete the prototype
                              together. Since we created 24 frames, I really want to test it on Figma mirror to see all the
                              connections. Could you please let me take a look at the complete prototype?
                          </p>
                          <p>Alex Morgan</p>
                          <p className="beautiful">Beautiful courses</p>
                          <div className="starrr">
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" /> 
                     </div>
                          <p>This course was well organized and covered a lot more details than any other Figma courses. I
                              really enjoy it. One suggestion is that it can be much better if we could complete the prototype
                              together. Since we created 24 frames, I really want to test it on Figma mirror to see all the
                              connections. Could you please let me take a look at the complete prototype?
                       </p>
                       </p>
                       
                  </TabPanel>
       </Tabs>
      
       </div>
       </Form>
       </Container>
    )};
const Container = styled.div`
.share{
    position: absolute;
    top: 80%;
    right: 30%;
.img1{
    max-width: 140px;
}
.read{
    position: absolute;
    margin: 20% 2%;
    max-width: 700px;
    top: 40%;
    right: 50%;
    left: 7%;
  }
`;
const Form = styled.form`

.amt{
    text-decoration: line-through;
    
    position: absolute;
    height: 25px;
    width: 50px;
    top: 7%;
    left: 28%;
}

.overvie{
    position: absolute;
    top: 70%;
    max-width: 800px;
}
.app
{
position: absolute;
 top:800px;
 
}
h4
{
    position: absolute;
    top:700px;
    right:50px;
}

.lauren{
    position: absolute;
   bottom:200px;
    right: 850px;
    color:#2C3252;
}
.dev{
    position: absolute;
   bottom:150px;
    right: 785px;
}

.share{
    color: blue;
}
.coursee{
    position: absolute;
    left: 90px;
    top: 150px;
    color: black;
}
.num{
    position: absolute;
    left: 85px;
    top: 90px;
    color: black;
    font-size: 50px;
}
.tabb{
    padding-left: 10%;
    padding-right: 42%;
    padding-top: 1%;  
}
.star{
    position: absolute;
    right: 120px;
    top: 170px;
    
}
.starr{
    position: absolute;
    right: 50px;
    top: 200px;
}
.starrr{
    position: absolute;
    right: 50px;
    top: 10px;
}
.oscar{
    position: absolute;
    left: 20%;
    max-width: 680px;
}

.card1{
    position: absolute;
    padding-left: 60%;
    padding-right: 60%;
}
.rectangle {
    position: absolute;
    height: 25px;
    width: 50px;
    background-color: #B8B2FD;
    color: white;
    top: 5%;
    left: 80%;
  }
.col{
    position: absolute;
    max-width: 800px;
    left: 7%;
   top: 115%;
    bottom: 110%;
}
.colu{
    position: absolute;
    max-width: 800px;
    left: 40%;
   top: 115%;
    bottom: 110%;
}
.day{
    
    color: red;
  right: 50%;
  left: 50%;
}
.share{
    position: absolute;
}
.dol{
    right: 80%;
}
.requir{
    position: absolute;
    top: 1000px;
    
}
.beauty{
    size: 5px;
}
h4
{
    font-weight: bold;
    position : absolute;
    left : 100px;
    bottom:140px;
}
.requirement
 { 
    font-weight: bold;
    position : absolute;
    right : 1040px;
    top:950px;
 }   
 .course
 {
    font-weight: bold; 
    position : absolute;
    top:420px;
 }

`;

export default coursesingle;


