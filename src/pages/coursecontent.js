import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
class Coursepage extends Component {
    render() {
        return (
        
          
        
      
        <section id="courses" className="courses">
          <div className="container" data-aos="fade-up">
           
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img src="assets/img/course-1.jpg" className="img-fluid" alt="..." />
                  <div className="course-content">
                    <h3><a href="course-details.html">Website Design</a></h3>
                    <div className="d-flex justify-content-between align-items mb-3" class="text-right">
                     
                      <p className="price">₹ 169</p>
                    </div>
                    
                    <div className="trainer d-flex justify-content-between align-items-center">
                         
                       <Link to="coursecontent" className="get-started-btn" >Get Started</Link>   
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div>
		<Header />
		
		<Footer />
		</div>
        </section>
       

)    
    }
}
export default Coursepage;