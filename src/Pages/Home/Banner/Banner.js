import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
   <Carousel>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-3 text-danger">Travel & Adventures</h3> 
      <h3 className="mb-5 display-6">Where would you like to go?</h3>
      <button className="btn btn-outline-primary">Read more</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://cdn.britannica.com/41/129941-050-7A7D1027/Niagara-Falls-cities-River-Ontario-New-York.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-3 text-danger">Travel & Adventures</h3> 
      <h3 className="mb-5 display-6">Where would you like to go?</h3>
      <button className="btn btn-outline-primary">Read more</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/switzerland/destinations-switzerland-og-image-1200x630.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-3 text-danger">Travel & Adventures</h3> 
      <h3 className="mb-5 display-6">Where would you like to go?</h3>
      <button className="btn btn-outline-primary">Read more</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://www.karakorumexpedition.com/wp-content/uploads/Nanga-Parbat-800x375.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-3 text-danger">Travel & Adventures</h3> 
      <h3 className="mb-5 display-6">Where would you like to go?</h3>
      <button className="btn btn-outline-primary">Read more</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://www.zubludiving.com/images/Indonesia/Bali/Bali-Indonesia-Banner.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-3 text-danger">Travel & Adventures</h3> 
      <h3 className="mb-5 display-6">Where would you like to go?</h3>
      <button className="btn btn-outline-primary">Read more</button>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </div>
    );
};

export default Banner;

