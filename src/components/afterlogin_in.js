import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 

class Afterlogin_in extends Component {
    render() {
        return (
        <div>
        <main id="main" data-aos="fade-in">
        
        {/* ======= Courses Section ======= */}
        <section id="courses" className="courses">

          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img src="assets/img/course-1.jpg" className="img-fluid" alt="..." />
                  <div className="course-content">
                    <h3><a href="course-details.html">Website Design</a></h3>
                    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                    <div className="d-flex justify-content-between align-items-left mb-3">
                     <Link to="signin" className="get-started-btn">Get Started</Link>
                      <p className="price">₹ 169</p>
                    </div>
                    <div className="trainer d-flex justify-content-between align-items-center">
                    </div>
                  </div>
                </div>
              </div> {/* End Course Item*/}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
                  <div className="course-content">
                    <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                    <div className="d-flex justify-content-between align-items-left mb-3">
                     <Link to="signin" className="get-started-btn">Get Started</Link>
                      <p className="price">₹ 250</p>
                    </div>
                  </div>
                </div>
              </div> {/* End Course Item*/}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img src="assets/img/course-3.jpg" className="img-fluid" alt="..." />
                  <div className="course-content">
                    <h3><a href="course-details.html">Copywriting</a></h3>
                    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                    <div className="d-flex justify-content-between align-items-left mb-3">
                     <Link to="signin" className="get-started-btn">Get Started</Link>
                      <p className="price">₹ 500</p>
                    </div>
                  </div>
                </div>
              </div> {/* End Course Item*/}
            </div>
          </div>
        </section>{/* End Courses Section */}
      </main>
        </div>
)    
    }
}
export default Afterlogin_in;