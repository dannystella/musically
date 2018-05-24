import React from 'react';
import { Jumbotron, Button, Carousel, Image, Grid, Row, Col } from 'react-bootstrap';

class About extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  render () {
  	return (
    <div className = "container-fluid text-center" >

      <Image className = "col-sm-12" src="https://www.shoemakerjukebox.com/sites/www.shoemakerjukebox.com/files/hire-Live-Band.jpg" responsive />
      <div className = "jumbo">
      <Jumbotron className = "jumbotron" >
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
    </div>
      )
  }
}

export default About;