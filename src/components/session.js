import React, { Component } from 'react';
import { Media } from 'reactstrap';
 
class Session extends Component {
    render() {
        return (
        <div>
		<section id="hero">
        <div className="hero-container">
          <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators" id="hero-carousel-indicators" />
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active" style={{backgroundImage: 'url("assets/img/slide/slide-1.jpg")'}}>
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">Welcome To Learn</h2>
                    <p className="animate__animated animate__fadeInUp">Hi this is a platform to learn new things and develop your knowledge</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{backgroundImage: 'url("assets/img/slide/slide-2.jpg")'}}>
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">Keep Learing</h2>
                    <p className="animate__animated animate__fadeInUp">Hi this is a platform to learn new things and develop your knowledge</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{backgroundimage: 'url("assets img slide slide-3.jpg")'}}>
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">knowledge Is Power</h2>
                    <p className="animate__animated animate__fadeInUp">Hi this is a platform to learn new things and develop your knowledge</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon icofont-rounded-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
            
    
          </div>
        </div>
      </section>
     
  
      </div>
     
    );
  }
}

export default Session;