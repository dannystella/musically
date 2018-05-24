import React from 'react';
import { Jumbotron, Button, Carousel, Form, FormControl, FormGroup, ControlLabel, FieldGroup, HelpBlock } from 'react-bootstrap';

class BookEvent extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  componentDidMount() {
    console.log("mounted");
  }

  render () {
  	return (<div className = "container-fluid text-center" >
    <form>
    <FormGroup
          controlId="formBasicText"
          // validationState={this.getValidationState()}
        >
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            // onChange={this.handleChange}
          />
          <FormControl.Feedback />
          {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Summary of Even requirements</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>
    </form>

    <Button type="submit">Summary</Button>
     </div>)
  }
}

export default BookEvent;