import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const News = () => {
    return (
        <div id="news">
             <h1 className="text-center text-danger my-5">NEWS</h1>
             <Row xs={1} md={4} className="g-2">
             <Col>
      <Card className="rounded-5 mx-2 mb-3">
        <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://d1pe6f90ru47yo.cloudfront.net/wp-content/uploads/2021/07/08164529/Screenshot-2021-07-08-at-17.44.59-860x375.jpg" />
        <Card.Body>
         
          <Card.Text>
              <span className="me-5"><i class="fas fa-user-shield"></i> Admin</span>
              <span className="ms-5"><i class="fas fa-comments"></i> 3comments</span>
        
          </Card.Text>
          <Card.Title>
              Things to See and Do When Visiting Japan
          </Card.Title>
         
           <button className="btn btn-primary">Read more</button>
        </Card.Body>
      </Card>
    </Col>
             <Col>
      <Card className="rounded-5 mx-2 mb-3">
        <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://www.unco.edu/college-bound-colorado/images/group-friends-jumping.jpg" />
        <Card.Body>
         
          <Card.Text>
              <span className="me-5"><i class="fas fa-user-shield"></i> Admin</span>
              <span className="ms-5"><i class="fas fa-comments"></i> 2comments</span>
        
          </Card.Text>
          <Card.Title>
              Journeys are Best Measured in New Friends
          </Card.Title>
         
           <button className="btn btn-primary">Read more</button>
        </Card.Body>
      </Card>
    </Col>
             <Col>
      <Card className="rounded-5 mx-2 mb-3">
        <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2021/5/25/1/shutterstock_PhotoRoman-316584812.jpg.rend.hgtvcom.966.644.suffix/1621980971547.jpeg" />
        <Card.Body>
         
          <Card.Text>
              <span className="me-5"><i class="fas fa-user-shield"></i> Admin</span>
              <span className="ms-5"><i class="fas fa-comments"></i> 4comments</span>
        
          </Card.Text>
          <Card.Title>
             Travel the Most Beautiful Places in the World
          </Card.Title>
         
           <button className="btn btn-primary">Read more</button>
        </Card.Body>
      </Card>
    </Col>
             <Col>
      <Card className="rounded-5 mx-2 mb-3">
        <Card.Img style={{height: '300px'}} className="p-3 rounded-5" variant="top" src="https://www.travelwanderlust.co/wp-content/uploads/2019/12/best-places-to-travel-alone-in-the-world.jpg" />
        <Card.Body>
         
          <Card.Text>
              <span className="me-5"><i class="fas fa-user-shield"></i> Admin</span>
              <span className="ms-5"><i class="fas fa-comments"></i> 3comments</span>
        
          </Card.Text>
          <Card.Title>
              Enjoy & Feel adventure in your life By travelling
          </Card.Title>
         
           <button className="btn btn-primary">Read more</button>
        </Card.Body>
      </Card>
    </Col>
             </Row>
        </div>
    );
};

export default News;