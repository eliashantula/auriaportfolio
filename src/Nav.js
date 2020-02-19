import React, { Component } from 'react';

import {Switch,
  BrowserRouter as Router,
  Route, Redirect,withRouter
} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

class Nav extends Component {
constructor(props){
	super(props);
	this.state = {currentLocation: "/"}

}

componentDidUpdate(prevProps){
	if (this.props.path !== prevProps.path){
		this.setState({currentLocation: this.props.path})
	}
}
	render(){
		const {match} = this.props;
		
	const {params} = match
	console.log("here")
	
	
	let result = this.props.location.pathname.split("/")
	console.log(result)
		return(
			<div className="navbar">
			{result[1]=== "" ? (
			<ul className="Nav">
			
			<li className="menu"><a href="#about">About.</a></li>
			<li className="menu"><a href="#projects">Projects.</a></li>
			<li className="menu"><a href="#contact">Contact.</a></li>
			</ul>
			)
			:(
			<ul className="Nav">
			<li className="menu"><Link to="/#about">About.</Link></li>
			<li className="menu"><Link to="/#projects">Projects.</Link></li>
			<li className="menu"><Link to="/#contact">Contact.</Link></li>
			
	
			</ul>
			)
		}
			<div className="name">
			<h2 className="titles">AURIA LEGENDRE
INTERIOR DESIGN</h2>
			</div>
			</div>





			)





	}
}

export default withRouter(Nav)
