import React, {Component} from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-awesome-slider/dist/styles.css';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


export default class LightBox extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
    const {images} = this.props
    console.log(images)
    return (
      <div className="slideContainer" onClick={() => this.setState({ isOpen: true })}>
  
        <img className="firstImage" src={images[0]} width="100%" onClick={() => this.setState({ isOpen: true })}/>
        
           <div className="text1">Open Slideshow</div>
   
 	      
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

      </div>
    );
  }
}


