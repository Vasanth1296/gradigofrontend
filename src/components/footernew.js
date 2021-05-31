import React,{ Component }  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Imgbg2 from "../assests/footernew.png"


const footernew = () => {
    return (
      <footer id="footer">
     <Container>
      <img src={Imgbg2} alt="footer" width="100%" height="100%" />
      <Form >
         <h2>GRADIGO</h2>
         <p>329 Queensberry Street,North </p>
         <p className="gradig">Melbourne VIC 3051, Australia.</p>
         <p className="gradi">123 456 7890</p>
         <p className="gard">support@gradigo.com</p>
         <div className="social-links">
          <a href="https://twitter.com/" className="twitter"><i className="bx bxl-twitter" /></a>
          <a href="https://www.facebook.com/" className="facebook"><i className="bx bxl-facebook" /></a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" className="instagram"><i className="bx bxl-instagram" /></a>
          <a href="https://www.google.com/account/about/" className="google-plus"><i className="bx bxl-google-plus" /></a>
          <a href="https://www.linkedin.com/login" className="linkedin"><i className="bx bxl-linkedin" /></a>
          </div>
         <p className="our">Our Company</p>
         <Link class="company"  to="/login">Our Company</Link>
         <Link class="course"  to="/course">About</Link>
         <Link class="contact"  to="/login">Contact Us</Link>
         <Link class="community"  to="/login">Community</Link>
         <Link class="student"  to="/login">Student PerkS</Link>
         <Link class="blog"  to="/login">Blog</Link>
         <Link class="program"  to="/login">Affiliate Program</Link>
         <Link class="career"  to="/login">Careers</Link>
         <p className="ours">Subscribe Our Newsletter</p>
         <p className="ourss">Your download should start automatically, if not Click here. Should I give up, huh?.</p>
         <div className="footer-newsletter">
         <input type="email" name="Enter Your Email" />
         <input type="SUBMIT" defaultValue="Subscribe" name="Subscribe" />
         </div>
      </Form>
    </Container>
    </footer>
    )
};
const Container = styled.div`

`;

const Form = styled.form`

h2{
  position: absolute;
  top: 760%;
  left: 7%;
  color: #fff;
  font-weight: bold
}
p{
  position: absolute;
  top: 770%;
  left: 7%;
  color: #fff;
}
.gradig {
  position: absolute;
  top: 773%;
  left: 7%;
  color: #fff;
 }
.gradi {
  position: absolute;
  top: 779%;
  left: 7%;
  color: #fff;
 }
.gard {
  position: absolute;
  top: 784%;
  left: 7%;
  color: #fff;
 }
 .our{
  position: absolute;
  top: 759%;
  left: 37%;
  color: #fff;
  font-weight: bold
}
.company{
  position: absolute;
  top: 765%;
  left: 37%;
  color: #fff;
 }
 .course{
  position: absolute;
  top: 770%;
  left: 37%;
  color: #fff;
 }
 .contact{
  position: absolute;
  top: 774%;
  left: 37%;
  color: #fff;
 }
 .community{
  position: absolute;
  top: 780%;
  left: 37%;
  color: #fff;
 }
 .student{
  position: absolute;
  top: 785%;
  left: 37%;
  color: #fff;
 }
 .blog{
  position: absolute;
  top: 759%;
  left: 50%;
  color: #fff;
 }
 .program{
  position: absolute;
  top: 764%;
  left: 50%;
  color: #fff;
 }
 .career{
  position: absolute;
  top: 769%;
  left: 50%;
  color: #fff;
 }
 .ours{
  position: absolute;
  top: 759%;
  left: 67%;
  color: #fff;
  font-weight: bold
}
.ourss{
  position: absolute;
  top: 764%;
  left: 67%;
  color: #fff;
}
.footer-newsletter {
  position: absolute;
  top: 774%;
  left: 67%;
  border-radius: 50px;
}
.footer-newsletter input[type="email"] {
  background: #ffffff;
  border: 10;
  width: 68%;
  padding: 0 0;
  text-align: center;
  color: rgb(0, 0, 0);
  border-radius: 4px;
}
 .footer-newsletter input[type="submit"] {
  background: #6078ff;
  border: 10;
  width: 32%;
  padding: 5px 0;
  text-align: center;
  color: rgb(255, 255, 255);
  transition: 0.3s;
  cursor: pointer;
  border-radius: 6px;
}
.social-links{
  position: absolute;
  top: 790%;
  left: 6%;
}
.social-links a {
  font-size: 18px;
  display: inline-block;
  background: #333;
  color: #eee;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}
.social-links a:hover {
  background: #6078ff;
  color: #fff;
}
`;

export default footernew;
