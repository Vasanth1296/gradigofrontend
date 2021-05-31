import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Imgbg from "../assests/Add4.png";

import styled from 'styled-components/macro'

class terms extends Component {
  render () {
    return (
      <Container>
      <div>
       <img src={Imgbg} alt="About Us" width="100%" height="100%" />
      </div>
     
      <Form>
    </Form>
      </Container>
    );
  }
}

const Container = styled.div`   

`;

const Form = styled.form`
h3 {
}
h4 {

}
`;

export default terms;

//import Imgbg2 from "../assests/FOOTER.png"
//<img src={Imgbg2} alt="About Us" width="1350" height="350" />
