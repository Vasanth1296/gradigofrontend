import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

class Feedback extends Component {
  render(){
    return(
 
        <Carousel  >
           <div className="section-titles" >
           &nbsp; &nbsp;&nbsp;
            <h2>Feedback</h2>
            <h3>What are they saying</h3>
          </div>
            <Carousel.Item style={{ textAlign: "center" }}  >
          
            <Card style={{ width: '30rem' }}>
            <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
            </Card>
           
            </Carousel.Item>

           
            <Carousel.Item>
         
            <Card style={{ width: '30rem' }}>
            <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
            </Card>
           
            </Carousel.Item>


            <Carousel.Item>
           
            <Card style={{ width: '30rem' }}>
            <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
            </Card>
          
            </Carousel.Item>

        </Carousel>
     
    )
}

}
export default Feedback;