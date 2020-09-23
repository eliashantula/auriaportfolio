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
{name:"HIGH-END RESIDENTIAL",  image : highend    }
,
{name:"SHOWROOM",  image : showroom   },
{name:"HEALTH CARE",  image :   health },
{name:"BANK POP-UP", image : bankpop   },
{name:"NON-PROFIT", image :  nonprofit },
{name:"SHARED SPACE",  image :  sharedspace  },
{name:"RESIDENTIAL", image : residential   },
{name:"RETAIL", image : retail  },
{name:"AUTISM CENTER", image : autism   },
{name:"HOME GROUP",  image :  homegroup  },
{name:"POP-UP",  image :  popup  },
{name:"RESTAURANT", image : restaurant   }









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
<div className="containerTest">
{project}
</div>

</div>

		)
}



}


export default Projects