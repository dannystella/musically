import React from 'react';
import { Jumbotron, Button, Carousel } from 'react-bootstrap';

class Main extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  render () {
  	return (<div className = "container-fluid text-center" >
    <Carousel>
  <Carousel.Item>
    <img className = "images" width={900} height={500} alt="900x500" src="https://www.w3schools.com/bootstrap/ny.jpg" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className = "images"  width={900} height={500} alt="900x500" src="https://www.w3schools.com/bootstrap/chicago.jpg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className = "images"  width={900} height={500} alt="900x500" src="https://www.w3schools.com/bootstrap/la.jpg" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className = "jumbo">
      <Jumbotron >
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>
      </div>
      </div>)
  }
}

export default Main;