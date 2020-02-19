import React, {Component} from 'react'
import Gallery from './Gallery'
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
const images = [
{name:"SHOWROOM",  image : showroom   },
{name:"NON-PROFIT", image :  nonprofit },
{name:"SHARED SPACE",  image :  sharedspace  },
{name:"RESIDENTIAL", image : residential   },
{name:"HOME GROUP",  image :  homegroup  },
{name:"HIGH-END RESIDENTIAL",  image : highend    },
{name:"AUTISM CENTER", image : autism   },
{name:"HEALTH CARE",  image :   health },
{name:"RESTAURANT", image : restaurant   },
{name:"POP-UP",  image :  popup  },
{name:"BANK POP-UP", image : bankpop   },
{name:"RETAIL", image : retail  }





]

class Projects extends Component {
constructor(props){
super(props)
}

render(){

    const project = images.map((image)=>(
    	 <Gallery project={image} />
    	))
	return (
<div id="projects">
<h1 className="project">Projects.</h1>
{project}


</div>

		)
}



}


export default Projects