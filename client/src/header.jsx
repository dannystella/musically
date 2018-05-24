import React from 'react';

// import AnyComponent from './components/filename.jsx'

class Header extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  render () {
  	return (
    <div className = "header" >
      <h1>
        Revent Music <small className = "subHeader">optimizing event booking for musical artists</small>
      </h1>
  </div>
  )
  }
}

export default Header;