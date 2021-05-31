import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Imgbg from "../assests/Add3.png"
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
      <h3> Have a Question ? </h3>
      <h2> Name </h2>
      <input style={{ width:"230px" }} type="text"  placeholder="Name"/>
      <h2> Email  </h2>
      <input style={{ width:"230px" }} type="text"  placeholder="Email"/>
      <h2> Message </h2>
      <input style={{ width:"230px" }} type="text"  placeholder="Message"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button  className="block">SUBMIT</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Form>
     <div className="mapouter"  >
      <div className="gmap_canvas" >
      <iframe width={650} height={451} id="gmap_canvas" src="https://maps.google.com/maps?q=Techybox%20Infosys&t=&z=19&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
      <a href="https://yt2.org" /><br />
      <style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:451px;width:650px;}" }} />
      <style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:451px;width:650px;}" }} />
      </div>
      </div>
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

  h3 {
     padding-right: 100px;
     padding-top: 50px;
     font-weight: 900;
  }
  h4 {
      padding-left: 0px;
      font-size: 15px;
  }
  h2{
    font-size: 20px;
    font-weight: 500;
    padding-left: 0px;
  }
  h8 {
    color: #999;
    padding-left: 5px;
    font-size: 14px;
  }
  .block {
    color: white;
    width: 18%;
    background-color: #6078ff;
    padding: 5px 100px 1px 20px;
    font-size: 20px;
    cursor: pointer;
    font-weight: 100;
    text-align: right;
  }
`;
const Wrapper = styled.div`

`;

export default contactus;

//<img src={Imgbg2} alt="About Us" width="1350" height="350" />


