import React,{ Component }  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const termsnav = () => {
  return (
   <Container>

    <div className="App">
      <h1>Sample</h1>
      <Tabs>
        <TabList>
          <Tab>
            <b>About me</b>
          </Tab>
          <Tab>
            <b>contact me</b>
          </Tab>
          <Tab>
            <b>privacy policy</b>
          </Tab>
          <Tab>
            <b>Terms of services</b>
          </Tab>
          <Tab>
            <b>purchase guide</b>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h5 className="terms">1.Terms</h5>
            <p className="a">Do you want to become a UI/UX designer but you don't know where to start? 
            This course will allow you to develop your user interface design skills 
</p>
<p className="aa">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. 
It's used by everyone from entrepreneurs and start-ups </p>
          
          <h5 className="limitations">2.limitations</h5>
            <p className="b">Do you want to become a UI/UX designer but you don't know where to start? 
            This course will allow you to develop your user interface design skills 
</p>
<p className="bb">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design.
 It's used by everyone from entrepreneurs and start-ups 
          </p>
          
          <h5 className="siteterms">3.site terms of use modification</h5>
            <p className="c">Do you want to become a UI/UX designer but you don't know where to start?
             This course will allow you to develop your user interface design skills 
</p>
<p className="cc">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design.
 It's used by everyone from entrepreneurs and start-ups </p>
          
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5 className="terms">1.Terms</h5>
            <p className="a">Do you want to become a UI/UX designer but you don't know where to start? 
            This course will allow you to develop your user interface design skills 
</p>
<p className="aa">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. 
It's used by everyone from entrepreneurs and start-ups </p>
          
          <h5 className="limitations">2.limitations</h5>
            <p className="b">Do you want to become a UI/UX designer but you don't know where to start? 
            This course will allow you to develop your user interface design skills 
</p>
<p className="bb">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design.
 It's used by everyone from entrepreneurs and start-ups 
          </p>
          
          <h5 className="siteterms">3.site terms of use modification</h5>
            <p className="c">Do you want to become a UI/UX designer but you don't know where to start?
             This course will allow you to develop your user interface design skills 
</p>
<p className="cc">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design.
 It's used by everyone from entrepreneurs and start-ups </p>
          
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5 className="terms">1.Terms</h5>
            <p className="a">Do you want to become a UI/UX designer but you don't know where to start? 
            This course will allow you to develop your user interface design skills 
</p>
<p className="aa">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. 
It's used by everyone from entrepreneurs and start-ups </p>
          
          <h5 className="limitations">2.limitations</h5>
            <p className="b">Do you want to become a UI/UX designer but you don't know where to start? 
            This course will allow you to develop your user interface design skills 
</p>
<p className="bb">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design.
 It's used by everyone from entrepreneurs and start-ups 
          </p>
          
          <h5 className="siteterms">3.site terms of use modification</h5>
            <p className="c">Do you want to become a UI/UX designer but you don't know where to start?
             This course will allow you to develop your user interface design skills 
</p>
<p className="cc">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design.
 It's used by everyone from entrepreneurs and start-ups </p>
          
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5 className="terms">1.Terms</h5>
            <p className="a">Do you want to become a UI/UX designer but you don't know where to start? 
            This course will allow you to develop your user interface design skills 
</p>
<p className="aa">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. 
It's used by everyone from entrepreneurs and start-ups </p>
          
          <h5 className="limitations">2.limitations</h5>
            <p className="b">Do you want to become a UI/UX designer but you don't know where to start? 
            This course will allow you to develop your user interface design skills 
</p>
<p className="bb">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design.
 It's used by everyone from entrepreneurs and start-ups 
          </p>
          
          <h5 className="siteterms">3.site terms of use modification</h5>
            <p className="c">Do you want to become a UI/UX designer but you don't know where to start?
             This course will allow you to develop your user interface design skills 
</p>
<p className="cc">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design.
 It's used by everyone from entrepreneurs and start-ups </p>
          
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <h5 className="terms">1.Terms</h5>
            <p className="a">Do you want to become a UI/UX designer but you don't know where to start? 
            This course will allow you to develop your user interface design skills 
</p>
<p className="aa">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. 
It's used by everyone from entrepreneurs and start-ups </p>
          
          <h5 className="limitations">2.limitations</h5>
            <p className="b">Do you want to become a UI/UX designer but you don't know where to start? 
            This course will allow you to develop your user interface design skills 
</p>
<p className="bb">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design.
 It's used by everyone from entrepreneurs and start-ups 
          </p>
          
          <h5 className="siteterms">3.site terms of use modification</h5>
            <p className="c">Do you want to become a UI/UX designer but you don't know where to start?
             This course will allow you to develop your user interface design skills 
</p>
<p className="cc">
Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master 
Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design.
 It's used by everyone from entrepreneurs and start-ups </p>
          
          </div>
        </TabPanel>
      </Tabs>
    </div>
      <Form>
    </Form>
</Container>
  );
}
    
const Container = styled.div`
.App {
  font-family: sans-serif;
  background: white;
  color: white;
  height: 1000vh;
}

.react-tabs {
  display: flex;
  margin-left: 36px;
  width: 470px;
  height: 400px;
 
  color: black;
  background: white;
}

.react-tabs__tab-list {
  display: flex;
  flex-direction: column;
  width: 170px;
  margin: 0;
  padding: 0;
  color: white;
  background: white;
}

.react-tabs__tab {
  height: 70px;
  list-style: none;
  padding: 12px 6px;
  cursor: pointer;
  color: #bbb;
}

.react-tabs__tab--selected {
  background: #FFFFFF;
  border-color: whites;
  border-left: white;
  color: black;
}

.react-tabs__tab-panel {
  display: none;
  width: 300px;
}

.react-tabs__tab-panel--selected {
  display: block;
}

.react-tabs__tab {
  padding-left: 24px;
}

.react-tabs__tab--selected {
  padding-left: 21px;
}

.terms {
  position:absolute;
  left:5px;
  padding-right:400px;
  width: 950px;
  height: 10px;
  top : 400px;
  font-weight:bold;
  color:#2c3252;
  
} 

.a{
  position: absolute;
  width: 1050px;
  height: 10px;
  top:450px;
 
}
.aa {
  position: absolute;
  width: 950px;
  height: 10px;
  top:500px;
 
}
.limitations {
  position: absolute;
 left:5px;
 padding-right:350px;
  width: 950px;
  height: 10px;
  top : 600px;
  font-weight:bold;
  color:#2c3252;

  
} 

.b {
  position: absolute;
  left: auto;
  width: 1050px;
  height: 10px;
  top:650px;

} 
.bb {
  position: absolute;
  left: auto;
  width: 950px;
  height: 10px;
  top:700px;

} 
.siteterms {
  position: absolute;
  left:5px;
  padding-right:150px;
  width: 950px;
  height: 10px;
  top : 800px;
  font-weight:bold;
  color:#2c3252;

  
} 
.c {
  position: absolute;
  left: auto;
  width: 1050px;
  height: 10px;
  top : 850px;
  
} 
.cc {
  position: absolute;
  left: auto;
  width: 950px;
  height: 10px;
  top : 900px;
  
} 
.panel-content {
  text-align: center;
}
`;

const Form = styled.form`

`;

export default termsnav;

