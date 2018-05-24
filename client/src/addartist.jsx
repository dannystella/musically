import React from 'react';
import { Jumbotron, Button, Carousel, Form, FormControl, FormGroup, ControlLabel, FieldGroup, HelpBlock } from 'react-bootstrap';
import axios from 'axios';
class ArtistForm extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      bandname: '',
      bandgenre: '',
      bandsummary: ''
    }
    this.handleArtistAdd = this.handleArtistAdd.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  componentDidMount() {

  }


  handleArtistAdd() {
    let artistAdd = {};
    artistAdd.bandname = this.state.bandname;
    artistAdd.bandgenre = this.state.bandgenre;
    artistAdd.bandsummary = this.state.bandsummary;
    axios.post('/addartists', artistAdd).then((res) => {
      console.log(res);
      this.setState({
        bandname: '',
        bandgenre: '',
        bandsummary: ''        
      })
    });

  }

  handleValueChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
  	return (<div className = "container-fluid text-center" >
    <form>
    <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Artist Name</ControlLabel>
          <FormControl
            name= 'bandname'
            type="text"
            value={this.state.bandname}
            placeholder="Artist"
            onChange={this.handleValueChange}
          />
          <ControlLabel>Genre</ControlLabel>
          
          <FormControl
            name='bandgenre'
            type="text"
            value={this.state.bandgenre}
            placeholder="Genre"
            onChange={this.handleValueChange}
          />
          <ControlLabel>Summary</ControlLabel>
          
          <FormControl
            name= 'bandsummary'
            type="text"
            value={this.state.bandsummary}
            placeholder="Summary"
            onChange={this.handleValueChange}
          />
          <FormControl.Feedback />
        </FormGroup>
    </form>

    <Button type="submit" onClick = {this.handleArtistAdd}>Submit</Button>
     </div>)
  }
}

export default ArtistForm;