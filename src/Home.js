import React, {Component} from 'react'; 
import Nav from './Nav.js'
import About from './About.js'
import Projects from './Projects.js'
import showroom from './showroom1.jpg'
import nonprofit from './NonProfit1.jpg'
import sharedspace from './sharedspace1.jpg'
import residential from './Residential1.jpg'
import homegroup from './home group 1.jpg'
import highend from './High end 1.jpg'
import autism from './Autism1.jpg'
import health from './healthcare1.jpg'
import restaurant from './restaurant1.jpg'
import popup from './pop up1.jpg'
import bankpop from './Bank Pop up 1.jpg'
import retail from './retail 1.jpg'
import Contact from './Contact.js'

class Home extends Component {


render(){
	return (
  <div className="Container">


     <About/>
     <Projects/>
     <Contact/>
</div> 



		)
}

}

export default Home