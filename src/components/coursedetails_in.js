import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bgImg3 from "../assests/Add2.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Coursedetails_in extends Component {
    render() {
        return (
        <div>
 <img src={bgImg3} width="100%" height="100%"/>
        <main id="main" >
        {/* ======= Breadcrumbs ======= */}
        {/*<div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>Course Details</h2>
            <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
          </div>
        </div>*/}{/* End Breadcrumbs */}
        {/* ======= Cource Details Section ======= */}
        <section id="course-details" className="course-details" >
          <div className="container" data-aos="fade-up" class="text-left" style={{width: '1300px'}}>
            <div className="row">
              <div className="col-lg-8">
              &nbsp; &nbsp;&nbsp;
              <div class="embed-responsive embed-responsive-21by9">
              <iframe class="embed-responsive-item" src="assets/video/Sample.mp4"></iframe>
                </div>
                <h3>Web Development</h3>
                <p>
                 Learn Web development from stract.. and the technology with certified mentors and professional mentors.
                </p>
         {/* course details */}
             
         <nav>

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
      </nav>
          
      <Tabs>
              <TabList>
                  <Tab><b>Overview</b></Tab>
                  <Tab><b>Q & A</b></Tab>
                  <Tab><b>Notes</b></Tab>
              </TabList>
              <TabPanel>
              There is a lot of good information in this course. 
              I am giving this course 4 stars due to the fact that the weather project is out of date. 
              But I would say the information is delivered in a way that can be easily understood.
                </TabPanel>

              <TabPanel>
              This is a front to back JavaScript course for absolutely everybody. 
              We start with the basic fundamentals and work our way to advanced programming WITHOUT relying on frameworks or libraries at all. 
              You will learn a ton of pure JavaScript, whether you are a beginner or an established JS programmer. 
              There is something for everyone...
              </TabPanel>

              <TabPanel>
              I like that there are several full projects in this course. 
              It lets you start typing JavaScript and practicing what you've learned. 
              It's a good feeling to see the results of some cool projects that you finished coding. 
              Some other cool gems in this course are the use of CSS frameworks like Materialize, Skeleton, and Bootswatch, when putting together the UI for the projects. 
              The weather app project needs to be updated since the Weather Underground api is no more. 
              The OpenWeather api website/docs aren't as easy to navigate as others, and can be confusing for complete beginners. 
              Brad's a great teacher especially for beginners that have no experience whatsoever. 
              His YouTube channel is an EXCELLENT resource/supplement as well. I like how in many of his videos he explains the simplest of things because they are things that true beginners with no experience would have known. 
              Overall, a great course for learning and putting into practice some JavaScript.
              </TabPanel>

              </Tabs>
              </div>
            
        <div className="col-lg-4">
        &nbsp; &nbsp;&nbsp;
        <h2>Table of Content</h2>
        <p>Click on the collapsible panel to open and close it.</p>
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" href="#collapse1">Collapsible panel</a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse">
              <div className="panel-body">Panel Body</div>
              <div className="panel-footer">Panel Footer</div>
            </div>
          </div>
        </div>


      </div>

              {/*<div className="col-lg-4">
                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>Trainer</h5>
                  <p><a href="#">Walter White</a></p>
                </div>
                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>Course Fee</h5>
                  <p>₹ 165</p>
                </div>
                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>Available Seats</h5>
                  <p>30</p>
                </div>
                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>Schedule</h5>
                  <p>5.00 pm - 7.00 pm</p>
                </div>
                <Link to="signin" className="get-started-btn">Start Course</Link>
                </div>*/}
                </div>
             </div>
        </section>
        {/* End Cource Details Section */}
        {/* ======= Cource Details Tabs Section ======= */}
        
      </main>

        </div>
)    
    }
}
export default Coursedetails_in;