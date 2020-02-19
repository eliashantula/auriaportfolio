import React, { Component } from 'react';
import {Switch,
  BrowserRouter as Router,
  Route,Link
} from 'react-router-dom'


class Nav1 extends Component {

	render(){
		return(
			<div className="navbar">
			<ul className="Nav">
			<li className="menu"><Link to="/">About.</Link></li>
			<li className="menu"><Link to="/">Projects.</Link></li>
			<li className="menu"><Link to="/">Contact.</Link></li>
			</ul>
			<div className="name">
			<h2 className="titles">AURIA LEGENDRE
INTERIOR DESIGN</h2>
			</div>
			</div>





			)





	}
}

export default Nav1