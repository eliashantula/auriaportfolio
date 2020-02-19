import React, {Component} from 'react'
import profile from './portrait1'
class About extends Component {

render(){

return (
	<div id="about">
	<h1 className="about1"> About Me. </h1>
	<div className="portrait"><img className="profile" src={profile} width="85%"/>
	</div>
<div className="intro"><p>
Hi! My name is Auria. <br/>
<br/>
I am a lawyer turned interior designer, passionate about making an impact on people's lives by creating unique and innovative design solutions. After working in Paris and New York, I finally decided to jump 
into my passion and went back to study interior design and start a new page in my life, and I have zero regrets! I love the combination of creative and technical skills that is required from an interior designer. 
I believe in the importance of the use of evidence-based design as being a critical element of an interior design project's success. Considering users' needs and providing sustainable solutions for safety, well-being and comfort are among my primary concerns while designing a project.
Here is an overview of my  projects and the skills that I have to offer. Enjoy!
	</p></div>
	</div>

	)


}

}

export default About