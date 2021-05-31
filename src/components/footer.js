import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
 
class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4><b>Gradigo</b></h4>
                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="ion-ios-arrow-right" /> <a href="#">Home</a></li>
                  <li><i className="ion-ios-arrow-right" /> <a href="#">About us</a></li>
                  <li><i className="ion-ios-arrow-right" /> <a href="#">Services</a></li>
                  <li><i className="ion-ios-arrow-right" /> <a href="#">Terms of service</a></li>
                  <li><i className="ion-ios-arrow-right" /> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                No 01, 5th street <br />
                Chennai, 600100<br />
                TamilNadu <br />
                  <strong>Phone:</strong> +91 9998887771<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className="social-links">
                  <a href="https://twitter.com/" className="twitter"><i className="bx bxl-twitter" /></a>
                  <a href="https://www.facebook.com/" className="facebook"><i className="bx bxl-facebook" /></a>
                  <a href="https://www.instagram.com/accounts/login/?hl=en" className="instagram"><i className="bx bxl-instagram" /></a>
                  <a href="https://www.google.com/account/about/" className="google-plus"><i className="bx bxl-google-plus" /></a>
                  <a href="https://www.linkedin.com/login" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                <form action method="post">
                  <input type="email" name="email" /><input type="SUBMIT" defaultValue="Subscribe" name="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright <strong>Gradigo</strong>. All Rights Reserved
          </div>
          <div className="credits">
            {/*
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage
      */}
       
          </div>
        </div>
      </footer>
    
    );
  }
};
export default Footer;