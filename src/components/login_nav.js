import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export class Login extends Component {
  render() {
    return (
          <div>
          <div>
        
    
        </div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <p className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><b>My Course</b></p>
            <p className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><b>My Points</b></p>
            <p className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><b>Feedback</b></p>
           
      <div className="collapse navbar-collapse" id="navbarSuapportedContent-4">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" /> Profile </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
              <a className="dropdown-item" href="#">My account</a>
              <a className="dropdown-item" href="#">Log out</a>
            </div>
          </li>
        </ul>
      </div>

           </div>

        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
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
          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          {/* Points */}
          <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                  <p class="card-category">Total Points</p>
                  <h3 class="card-title"> 50
                    <small> Points</small>
                  </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">date_range</i> Last 24 Hours 
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">store</i>
                  </div>
                  <p class="card-category">Course Enroled</p>
                  <h3 class="card-title"> 5 </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">date_range</i> Last 24 Hours
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-danger card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">info_outline</i>
                  </div>
                  <p class="card-category">Course Completed</p>
                  <h3 class="card-title">2</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">date_range</i> Last 24 Hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

          </div>
          <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>

        </div>
          {/*<div className="bs-example">
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <a href="#" className="navbar-brand"></a>
          <div className="collapse navbar-collapse" id="navbarCollapse1">
            <div className="navbar-nav">
              <a href="#" className="nav-item nav-link active">My Course</a>
              <a href="#" className="nav-item nav-link">My Points</a> 
              <i class="fa fa-user mr-2"></i>
            </div>
            {/*<form className="form-inline ml-auto">
              <input type="text" className="form-control mr-sm-2" placeholder="Search" />
              <button type="submit" className="btn btn-outline-light">Search</button>
            </form>*/}
          {/*</div>
        </nav>
      </div>*/}
          </div>
    )
  }
}

export default Login
