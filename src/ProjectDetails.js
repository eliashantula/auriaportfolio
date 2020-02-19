import React, {Component} from 'react'

import {Link,withRouter} from 'react-router-dom'
import showroom1 from './showroom1.jpg'
import showroom2 from './showroom2.jpg'
import showroom3 from './showroom3.jpg'
import fpredo from './FP REDO.jpg'
import nonprofit1 from './NonProfit1.jpg'
import nonprofit2 from './Non Profit2.jpg'
import nonprofit3 from './Non Profit3.jpg'
import nonprofit4 from './Non Profit4.jpg'
import nonprofit5 from './Non Profit5.jpg'
import nonprofit6 from './Non Profit6.jpg'
import nonprofit7 from './Non Profit7.jpg'
import nonprofit8 from './Non Profit8.jpg'
import nonprofit9 from './Non Profit9.jpg'
import nonprofit10 from './Non Profit10.jpg'
import nonprofit11 from './Non Profit11.jpg'
import sharedspace1 from './sharedspace1.jpg'
import sharedspace2 from './Shared space2.jpg'
import sharedspace3 from './obese redo 1.jpg'
import residential1 from './Residential1.jpg'
import residential2 from './Residential2.jpg'
import homegroup1 from './home group 1.jpg'
import homegroup2 from './home group 2.jpg'
import homegroup3 from './home group 3.jpg'
import homegroup4 from './home group 4.jpg'
import homegroup5 from './home group 5.jpg'
import highend1 from './High end 1.jpg'
import highend2 from './High end 2.jpg'
import highend3 from './High end 3.jpg'
import highend4 from './High end 4.jpg'
import highend5 from './High end 5.jpg'
import highend6 from './High end 6.jpg'
import highend7 from './High end 7.jpg'
import LightBox from './SlideShow.js'
import autism1 from './Autism1.jpg'
import autism2 from './Autism2.jpg'
import autism3 from './Autism3.jpg'
import autism4 from './Autism4.jpg'
import autism5 from './Autism5.jpg'
import healthcare1 from './healthcare1.jpg'
import healthcare2 from './healthcare2.jpg'
import healthcare3 from './healthcare3.jpg'
import healthcare4 from './healthcare4.jpg'
import restaurant1 from './restaurant1.jpg'
import restaurant2 from './restaurant2.jpg'
import restaurant3 from './restaurant3.jpg'
import restaurant4 from './restaurant4.jpg'
import restaurant5 from './restaurant5.jpg'
import restaurant6 from './restaurant6.jpg'
import popup1 from './pop up1.jpg'
import popup2 from './pop up2.jpg'
import popup3 from './popup3.jpg'
import bankpopup1 from './Bank Pop up 1.jpg'
import bankpopup2 from './Bank Pop up 2.jpg'
import bankpopup3 from './Bank Pop up 3.jpg'
import bankpopup4 from './Bank Pop up 4.jpg'
import bankpopup5 from './Bank Pop up 5.jpg'
import retail1 from './retail 1.jpg'
import retail2 from './retail 2.jpg'
import retail3 from './retail 3.jpg'
import retail4 from './retail 4.jpg'
import np1 from './np1.png'
import np2 from './np2.png'
import np3 from './np3.png'
import np4 from './np4.png'
import np5 from './np5.png'
import np6 from './np6.png'
import firstshared from './firstshared.png'
import secondshared from './secondshared.png'
import nat1 from './nat1.png'
import high1 from './high1.png'
import high2 from './high2.png'
import high3 from './high3.png'
import high4 from './high4.png'
import high5 from './high5.png'
import homegroup from './homegroup.png'
import healthfp from './healthfp.png'
import rest from './rest.png'
import rest1 from './rest1.png'
import rest2 from './rest2.png'
import rest3 from './rest3.png'
import rest4 from './rest4.png'
import rest5 from './rest5.png'
import popfp from './popfp.png'
import bankfp from './bankfp.png'
import bankfp1 from './bankfp1.png'
import retailfp from './retailfp.png'
import Nav from './Nav.js'

const data =  {"SHOWROOM":{ images: [showroom1, showroom2, showroom3],floorplans: [fpredo], description: `The goal was to design a showroom in New York displaying the company’s products and showcasing the endless possibilities of design through its various patterns and color options, and demonstrating solutions for the product’s acoustic property. The hexagonal shapes of the products are displayed in the wallpaper. The design of the space reflects the multi-faceted aspect of the materials and their different potential  applications. The partitions and poles were designed to display the products from both sides and to add some interactive components which allow for pivoting the products. The use of sustainable materials such as bamboo flooring, and  the cork ceiling responds to the goal of the company to recycle paper. The neutral tones and muted pastels of the materials were intentionally  to give all life to the products.` }, "NON-PROFIT":{ images:[nonprofit1,nonprofit2,nonprofit3,nonprofit4,nonprofit5,nonprofit6,nonprofit7,nonprofit8,nonprofit9,nonprofit10,nonprofit11],floorplans:[np1,np2,np3,np4,np5,np6],description: `The goal was to design a space for the non-profit organisation Teach For America to showcase their mission to the public. The space also contains classrooms open to teachers, a library for members, office space and two apartments available for out of state guests and speakers.The design of the space reflects the non-profit’s two core values of equality and diversity and was inspired by Piet Mondrian Composition’ s painting. The design incorporates various walls thickness,  height, different line weight, ceiling height.`}, "SHARED SPACE":{images:[sharedspace1, sharedspace2, sharedspace3], floorplans: [firstshared,secondshared],description: `The goal was to design a vertical learning studio and  an exhibition space offering architectural and design solutions for obesity issues. The“ripple” concept is based on the idea that one action leads to another action. The space creates a walk able and mobile environment, and gives solutions to ensure optimal performance of physical activity. Proper circadian rhythm is encouraged through lighting, good indoor air quality, appropriate thermal comfort and acoustical comfort. The choice of furniture is an important component to encourage active seating.`}, "RESIDENTIAL":{images:[residential1, residential2], floorplans:[nat1],description: `The goal of the design was to create a residential space that conforms to client aspirations and needs.The space incorporates nature with the use of natural materials and biophilic components. The design encourages natural daylight and takes into consideration thermal and acoustical comfort.`},"HOME GROUP":{
 	images:[homegroup1, homegroup2,homegroup3,homegroup4,homegroup5],floorplans:[homegroup],description:`The goal of the project was to design a space for women coming from a substance abuse rehabilitation center and who need a short term place before transitioning to their future lives. The design reflects a journey that includes lifestyle changes and full recovery with the help of guidance, education and support.`
 }, "HIGH-END RESIDENTIAL":{images:[highend1, highend2, highend3, highend4, highend5, highend6, highend7],floorplans: [high1,high2,high3,high4,high5],description:`The goal of the project was to design a high end residential space that responds to the eclectic style of the family. The family moved their residency from a rural area to an urban one. The family encompasses the parents, children and  grandparents. The design is meant to create a space that satisfies different generations style. The design reflects the family’s journey and the family branching out into a new space.`}, "AUTISM CENTER": {images:[autism1,autism2,autism3,autism4,autism5], description: `The goal of the project was to design an autism  day center responding to the lack of facilities for autistic children over 18 years old. The center focuses on teaching daily life skills to help them transition to a more independent life style. Routines and schedules are important for autistic people, and these notions helped inform the design, and the space planning process. The space is zoned between high and low stimulus areas.
Materials were selected for their natural, biophilic and acoustical properties. The choice of color minimizes the amount of visible stimuli. Indoor air quality, thermal comfort, natural daylight and safety were important components taken into consideration. `},"HEALTH CARE":{images:[healthcare1,healthcare2,healthcare3,healthcare4],floorplans: [healthfp],description:`The goal of the design was to create a healthcare room for children needing post surgical brain procedures. The patients need to stay for 3 to 5 days during which caregivers monitor and run tests. The patient’s gradual improvement is reminiscent of origami in which pieces of shapes are folded to achieve an elaborate whole.
The main goals of the project were to: optimize staff productivity and efficiency, promote quality care and safety of patients, encourage a family centered approach, decrease young patients’ anxiety and create a contaminant free environment`},"RESTAURANT":{images:[restaurant1, restaurant2,restaurant3,restaurant4,restaurant5,restaurant6], floorplans: [rest1, rest,rest2,rest3,rest4,rest5],description: `The goal was to design a French restaurant in Chelsea market to attract clientele at all times of day.
The chef believes that travel is the key to developing a cuisine to the highest standards. Water is the means through which travel is realized, and the movement of the waves transports the secret ingredients of the refined cuisine the restaurant is offering `},"POP-UP":{images:[popup1,popup2,popup3], floorplans:[popfp],description: `The goal was to design a pop up space where teenagers could display their vision of New York through different mediums with the help of QR codes. The space uses QR code shapes to create the layout of the space and the design of some components. The first floor demonstrates how to use a QR code to see the teenagers’ work, and offers workshop events. The concept explores how identities intersect and are enriched with the use of QR Codes`}, "BANK POP-UP": {images:[bankpopup1,bankpopup2,bankpopup3,bankpopup4,bankpopup5], floorplans: [bankfp, bankfp1],description:`The goal was to design a bank branch pop up inside a student campus to attract future clientele. The design translates a dynamic journey of financial choices and decisions that will empower a student towards a successful financial destination. The layout of the space and the 3D design is meant to reflect this dynamic journey, and encourages the students to follow the different steps necessary to be successful. The triangle section contains the journey that a student would take.`}, "RETAIL": {images:[retail1,retail2,retail3,retail4], floorplans: [retailfp], description: `The goal was to design a space for teenage girls to learn programming. The space addresses the lack of programming education in public schools, and the under representation of girls in computer science. The design is meant to represent the empowerment of the teenage girls.
The space is accessible to members to learn programming. It is divided into 4 spaces: the learning and presentation area, the brainstorming area and the making area. Students are left independently to resolve their work problems, and to initiate group activities.The design allows a flying instructor positioned in the center for occasional help.`}};




class ProjectDetails extends Component {
constructor(props){
	super(props)

}



render(){
const name = this.props.match.params.project.toUpperCase()
const descriptions = data[name].description
const pics = data[name].images
const pic = pics[0]
const floorplans = data[name].floorplans

return (

<div className="projectContainer">

<h2 className="projecttitle">{name}</h2>
<div className="description">{descriptions}</div>
<div className="slides">
<LightBox images = {pics}/>
</div>
<div className="projectgallery">
<img src={pic} className="projectPic" width="100%"/>
{floorplans.map((pic)=> (

<img src={pic} className="projectPic" width="100%"/>

	))
}
</div>
<div className="link">
<Link to={`/`}><span>Return Home</span></Link>
</div>
</div>



		)
}


}

export default withRouter(ProjectDetails)