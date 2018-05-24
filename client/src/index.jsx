import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";

import Header from './header.jsx';
import Navigation from './navbar.jsx';
import Main from './main.jsx'
import About from './about.jsx';
import BookEvent from './bookevent.jsx';
import BandList from './bandlist.jsx';
import ArtistForm from './addartist.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }






  render () {
  	return (<div >
   <Header className = "header"/> 
     <Navigation />  
      <Switch>
          <Route exact path="/" component = {Main}
          />
          <Route path="/about" component = {About}
          />
          <Route path="/bookevent" component = {BookEvent}
          />
          <Route path="/artistlist" component = {BandList}
          />
          )} />       
          <Route path="/addartist" component = {ArtistForm}
          />
          )} />       
          </Switch>  
     <Footer/>
    </div>)
  }
}

ReactDOM.render(
  <BrowserRouter>
<App />
</BrowserRouter> 
, document.getElementById('app'));