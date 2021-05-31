import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Imgbg from "../assests/Course.png"
class Coursepage extends Component {
    render() {
        return (
        <div>
          <img src={Imgbg} alt="About Us" width="100%" height="100%" />
         
        <main id="main" data-aos="fade-in">
        &nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;
        <section id="courses" className="courses">
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay={100}>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img src="assets/img/course-1.jpg" className="img-fluid" alt="..." />
                  <div className="course-content">
                    <h3><a href="course-details.html">Website Design</a></h3>
                    <div className="d-flex justify-content-between align-items mb-3" class="text-right">
                     
                      <p className="price">₹ 169</p>
                    </div>
                    
                    <div className="trainer d-flex justify-content-between align-items-center">
                         <div>
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star" />
                         <span className="fa fa-star" />
                       </div>  
                       <Link to="coursecontent" className="get-started-btn">View</Link>   
                    </div>
                  </div>
                </div>
              </div> {/* End Course Item*/}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
                  <div className="course-content">
                    <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                    <div className="d-flex justify-content-between align-items-left mb-3" class="text-right" >
                    
                     <p className="price">₹ 250</p>
                    </div>
                     <div className="trainer d-flex justify-content-between align-items-center">
                     <div>
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star" />
                         <span className="fa fa-star" /> 
                     </div>
                     <Link to="signin" className="get-started-btn" >View</Link>
                     </div>
                  </div>
                </div>
              </div> {/* End Course Item*/}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img src="assets/img/course-3.jpg" className="img-fluid" alt="..." />
                  <div className="course-content">
                    <h3><a href="course-details.html">Copywriting</a></h3>
                    <div className="d-flex justify-content-between align-items-left mb-3" class="text-right">  
                      <p className="price">₹ 500</p>
                    </div>
                    <div></div>
                    <div className="trainer d-flex justify-content-between align-items-center">
                     <div>
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star checked" />
                         <span className="fa fa-star" />
                         <span className="fa fa-star" /> 
                     </div>
                     <Link to="signin" className="get-started-btn">View</Link>
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
export default Coursepage;