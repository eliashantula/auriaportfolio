import React from 'react'
import { Link } from 'react-router-dom';


const Gallery = ({project}) => {
const {name, image} = project
return (
<div className = "gallery"> <Link to ={`/specific/${name.toLowerCase()}`}>

<img src={image} className="gallerypic" width="100%" height="100%"/>

<div className = "text">{name}
</div>


</Link>
</div>

	)




	}


	export default Gallery