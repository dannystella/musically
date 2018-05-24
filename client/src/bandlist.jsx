import React from 'react';
import axios from 'axios';
import { Jumbotron, Button, Carousel, Grid, Col, Row } from 'react-bootstrap';

class BandList extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      currentArtists: []
  	}
  }


  componentDidMount() {
    axios.get('/artists').then((data) => {
      this.setState({
        currentArtists: data.data
      }, () => console.log(this.state.currentArtists))
    })
  }

  renderArtists() {
   let artistList = this.state.currentArtists; 
   if(Array.isArray(artistList) && artistList.length > 0){ 
    return artistList.map((artist, i) => {
      return (
        <Row key = {i}>
          <Col xs={6} md={6}>
          {artist.bandname}
          </Col>
          <Col xs={6} md={6}>
          {artist.bandgenre}
          </Col>
        </Row>
      )
    })
  }
  }

  render () {
  	return (
    <div className = "container-fluid text-center" >
    <Grid className = "artistList">
        <Row>
            <Col xs={6} md={6}>
            Artist Name
            </Col>
            <Col xs={6} md={6}>
            Genre
             </Col>
             {this.renderArtists()}
        </Row>



    </Grid>   
    </div>)
  }
}

export default BandList;