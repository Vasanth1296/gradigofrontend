import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components/macro';
import CardText from 'reactstrap/lib/CardText';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Form,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Imgbg from "../assests/instructor.png";
import { Scrollbars } from 'rc-scrollbars';

class Studentdb extends Component {
    render()
    {
      return(
          <Container>
              <h3><b> Howdy, Kathelen Monero!</b></h3>
              <p>Ready to Jump Back in ?</p>
        <div className="block1">
           <Card style={{ width: '16rem', height: '6rem' }}>
           <CardText>
               <p  className="content1"><b>Total Number of Students </b></p>
               <h1 className="number1"><b>15</b></h1>
               </CardText>
            </Card>
            </div>
            <div className="block2">
           <Card style={{ width: '16rem', height: '6rem' }}>
           <CardText>
               <p  className="content2"><b>Total Number of Instructors </b></p>
               <h1 className="number2"><b>22</b></h1>
               </CardText>
            </Card>
            </div>
            <div className="block3">
           <Card style={{ width: '16rem', height: '6rem' }}>
           <CardText>
               <p  className="content3"><b>Total Earned  </b></p>
               <h1 className="number3"><b>921</b></h1>
               </CardText>
            </Card>
            </div>
            <div className="block4">
           <Card style={{ width: '16rem', height: '6rem' }}>
           <CardText>
               <p  className="content4"><b>Account Balance  </b></p>
               <h1 className="number4"><b>148</b></h1>
               </CardText>
            </Card>
            </div>
            <div className="courselist">
            <Card style={{ width: '50rem', height: '40rem' }}>
               <p className="courses"> Courses</p>
               <Tabs className="tabdb">
               <TabList>
                  <Tab>All(expected removed from view)</Tab>
                  <Tab>Design</Tab>
                  <Tab>Business</Tab>
                  <Tab>Software Development</Tab>
                  <Tab>Photograph</Tab>
                  <Tab>VFX</Tab>
                  <Tab>Android</Tab>
              </TabList>
              </Tabs>
              <Form className="contentdb">
  <input type="text"  placeholder="Search Our Courses"/>
  <p className="searchdb"><Link to="" class="fas fa-search"></Link></p>
</Form>
<div className="photo1">
<Card style={{ width: '23rem', height: '9rem' }}>
<img src={Imgbg} alt="About Us" width="30%" height="90%" />
<div className="sr">
<span className="fa fa-star checked" />
</div>
<p className="photo">Photography</p>
<p className="comp"><b>The Complete JavaScript Course </b></p>
<p className="build"><b>2020:Build Real Projects </b></p>
<p className="started">Started July 9,2020 </p>
<Progress className="progress" percent={25}/>
</Card>
</div>
<div className="photo2">
<Card style={{ width: '23rem', height: '9rem' }}>
<img src={Imgbg} alt="About Us" width="30%" height="90%" />
<div className="sr">
<span className="fa fa-star checked" />
</div>
<p className="photo">Photography</p>
<p className="comp"><b>The Complete JavaScript Course </b></p>
<p className="build"><b>2020:Build Real Projects </b></p>
<p className="started">Started July 9,2020 </p>
<Progress className="progress" percent={75}/>
</Card>
</div>
<div className="photo3">
<Card style={{ width: '23rem', height: '9rem' }}>
<img src={Imgbg} alt="About Us" width="30%" height="90%" />
<div className="sr">
<span className="fa fa-star checked" />
</div>
<p className="photo">Photography</p>
<p className="comp"><b>The Complete JavaScript Course </b></p>
<p className="build"><b>2020:Build Real Projects </b></p>
<p className="started">Started July 9,2020 </p>
<Progress className="progress" percent={50}/>
</Card>
</div>
<div className="photo4">
<Card style={{ width: '23rem', height: '9rem' }}>
<img src={Imgbg} alt="About Us" width="30%" height="90%" />
<div className="sr">
<span className="fa fa-star checked" />
</div>
<p className="photo">Photography</p>
<p className="comp"><b>The Complete JavaScript Course </b></p>
<p className="build"><b>2020:Build Real Projects </b></p>
<p className="started">Started July 9,2020 </p>
<Progress className="progress" percent={90}/>
</Card>
</div>
<div className="photo5">
<Card style={{ width: '23rem', height: '9rem' }}>
<img src={Imgbg} alt="About Us" width="30%" height="90%" />
<div className="sr">
<span className="fa fa-star checked" />
</div>
<p className="photo">Photography</p>
<p className="comp"><b>The Complete JavaScript Course </b></p>
<p className="build"><b>2020:Build Real Projects </b></p>
<p className="started">Started July 9,2020 </p>
<Progress className="progress" percent={45}/>
</Card>
</div>
<div className="photo6">
<Card style={{ width: '23rem', height: '9rem' }}>
<img src={Imgbg} alt="About Us" width="30%" height="90%" />
<div className="sr">
<span className="fa fa-star checked" />
</div>
<p className="photo">Photography</p>
<p className="comp"><b>The Complete JavaScript Course </b></p>
<p className="build"><b>2020:Build Real Projects </b></p>
<p className="started">Started July 9,2020 </p>
<Progress className="progress" percent={25}/>
</Card>
</div>
 </Card>
</div>
<div className="salestoday"> 
<Card style={{ width: '16rem', height: '20rem' }}>

<Scrollbars style={{ width:"250px", height:"252px" }}>
  <p className="cn">&nbsp;&nbsp;&nbsp;Course Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</p>
        <p className="aa"><b>&nbsp;&nbsp;&nbsp;Angular Advances &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $26.00</b></p>
        <p className="hb"><b>&nbsp;&nbsp;&nbsp;HTML Basic &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $40.00</b></p>
        <p className="as"><b>&nbsp;&nbsp;&nbsp;Android Studio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $26.00</b></p>
        <p className="cs"><b>&nbsp;&nbsp;&nbsp;CSS3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $40.00</b></p>
        <p className="bd"><b>&nbsp;&nbsp;&nbsp;Big Data &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $26.00</b></p>
           
 </Scrollbars>
                </Card>
                </div>
                <div className="latesttestimonials"> 
                <Card style={{ width: '16rem', height: '18rem' }}>
                <p className="lt"><b>Latest Testimonials</b></p>
                <Carousel  >
           <Carousel.Item style={{ textAlign: "center" }}  >
               <div className="feedbackdb">
          <Card style={{ width: '14rem',height:'14rem',backgroundColor:'#E3EEF4' }}>
            <h7>Alison Dawn</h7>
                <p className="designation">Wordpress Developer</p>
                <p className="cardcontent">
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                 I believe in Life long Learning and Skols is a great place to learn from Experts.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
            </Card>
            </div>
           </Carousel.Item>

            <Carousel.Item style={{ textAlign: "center" }}>
            <div className="feedbackdb">
         <Card style={{ width: '14rem',height:'14rem',backgroundColor:'#E3EEF4' }}>
            <h7>Jena Karlis</h7>
            <p className="designation">Wordpress Developer</p>
            <p className="cardcontent">
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                 I believe in Life long Learning and Skols is a great place to learn from Experts.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
            </Card>
            </div>
           </Carousel.Item>


            <Carousel.Item style={{ textAlign: "center" }}>
            <div className="feedbackdb">
           <Card style={{ width: '14rem',height:'14rem',backgroundColor:'#E3EEF4' }}>
            <h7>John Larson</h7>
            <p className="designation">Wordpress Developer</p>
            <p className="cardcontent">
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                 I believe in Life long Learning and Skols is a great place to learn from Experts.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
            </Card>
            </div>
          </Carousel.Item>

        </Carousel>
                </Card>
                </div>
            </Container>
      )
    }}
    const Container = styled.div`
    .sr
    {
        position: absolute;
        top:6.5%;
        right:10%;   
        max-width:1000px;
    }

    .photo
    {
        position: absolute;
        top:7%;
        right:45%;   
        max-width:1000px; 
    }
    .comp
    {
        position: absolute;
        top:28%;
        right:10%;    
    }
    .build
    {
        position: absolute;
        top:40%;
        right:20%;    
    }
    .started
    {
        position: absolute;
        top:60%;
        right:30%;    
    }
    .photo1
    {
        position: absolute;
        top:21%;
        left:2%;    
    }
    .photo2
    {
        position: absolute;
        top:46%;
        left:2%;    
    }
    .photo3
    {
        position: absolute;
        top:70%;
        left:2%;    
    }
    .photo4
    {
        position: absolute;
        top:21%;
        left:52%;    
    }
    .photo5
    {
        position: absolute;
        top:46%;
        left:52%;    
    }
    .photo6
    {
        position: absolute;
        top:70%;
        left:52%;    
    }
    .cn{
        position: absolute;
        top:10%;
        height: 4.5vh;
        width: 221px;
        background-color:#303956;
        border-radius: 3px;
        color:white;
        left:10px;
        
      }
      .aa{
        position: absolute;
        top:25%;
        height: 6vh;
        width: 220px;
        background-color:white;
        border-radius: 3px;
        left:10px;
      }
      .hb{
        position: absolute;
        top:40%;
        height: 6vh;
        width: 220px;
        background-color:white;
        border-radius: 3px;
        left:10px;
      }
      .as{
        position: absolute;
        top:55%;
        height: 6vh;
        width: 220px;
        background-color:white;
        border-radius: 3px;
        left:10px;
      }
      .cs{
        position: absolute;
        top:70%;
        height: 6vh;
        width: 220px;
        background-color:white;
        border-radius: 3px;
        left:10px;
      }
      .bd{
        position: absolute;
        top:85%;
        height: 6vh;
        width: 220px;
        background-color:white;
        border-radius: 3px;
        left:10px;
      }


    h7
    {
        position:absolute;
        right:30%;
        bottom:70%;
        color:black;
        font-weight: bold;
    }
    .designation
    {
        position:absolute;
        right:20%;
        bottom:50%;
        color:black;
        
    }
    .cardcontent
    {
        
        position:absolute;
        right:20%;
        top:48%;
        color:black;
    }
.feedbackdb
{
  
    padding-left:20px;
 padding-bottom:2px;
}
.lt
{
    position:absolute;
    right:48%;
    top:0%;
 
}
    h3
    {
        position:absolute;
        right:57%;
        bottom:81%;
    }
    p
    {
        position:absolute;
        right:67%;
        bottom:75%;
    }
    .courses
    {
        position:absolute;
        right:92%;
        bottom:93%;
        color:black; 
    }
    
.block1
{
    position:absolute;
    right:62%;
    bottom:55%;
}
.block2
{
    position:absolute;
    right:42%;
    bottom:55%;
}
.block3
{
    position:absolute;
    right:22%;
    bottom:55%;
}
.block4
{
    position:absolute;
    right:2%;
    bottom:55%;
}
.number1
{
    position:relative;
    left:20%;
    top:55px;
    color:violet;
    }
.number2
{
    position:relative;
    left:20%;
    top:55px;
    color:yellow;
    
}
.number3
{
    position:relative;
    left:20%;
    top:55px;
    color:green;
   
}
.number4
{
    position:relative;
    left:20%;
    top:55px;
    color:blue;
    
}
.content1
{
position:relative;
max-width:1000px;
top:130px;
left:180%;
}
.content2
{
    position:relative;
    max-width:1000px;
    top:130px;
    left:180%;
}
.content3
{
position:relative;
max-width:1000px;
top:110px;
left:180%;
 }
.content4
{
position:relative;
max-width:1000px;
top:120px;
left:180%;
    
}
.courselist
{
    position:absolute;
    right:21.5%;
    top:38%;
}
.tabdb
{
    position:absolute;
    right:21%;
    top:5%; 
}
.searchdb{
    position: absolute;
    top: 35%;
    right: 0%;
  }
.contentdb
{
position:absolute;
margin:10px;;
max-width:180px;
top:17%;
}
form.contentdb input[type=text] {
  padding-top: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 110%;
  height:20%;
  background: #f1f1f1;
}

form.contentdb button {
  position: absolute;
  float: right;
  width: 25%;
  top: 2px;
  padding-top: 10px;
  background: #2196F3;
  color: white;
  font-size: 20px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.contentdb button:hover {
  background: #0b7dda;
}

form.contentdb::after {
  content: "";
  clear: both;
  display: table;
}
.salestoday
{
    position:absolute;
    right:21px;
    top:38%; 
}
.latesttestimonials
{
    position:absolute;
    right:21px;
    top:92%; 
}
.progress{
    position:absolute;
    right:21px;
    top:80%; 
    width:60%;
}

`;
    export default Studentdb;