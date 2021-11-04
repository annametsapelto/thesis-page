import {pictures} from '../Utility/CarouselData';
import {useState} from 'react';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import '../Styles/Carousel.css';

const PictureCarousel = (props) => {
    const [currentImg, setCurrentImg] = useState(0);

    const switchLeft = () =>{
        if(currentImg !== 0) {
            setCurrentImg(currentImg-1)
        }
    }

    const switchRight = () => {
        if(currentImg !== pictures.length-1) {
            setCurrentImg(currentImg+1)
        }
    }

    return (
        <div className={"carousel" + (!props.isLightMode ? "darkCarousel": "")}> 
          <ArrowLeft isLightMode={props.isLightMode} switchLeft={switchLeft} className="carouselButton"/>   
          <div>
              <img src={pictures[currentImg].img} alt={pictures[currentImg].alt} />
              <p>{pictures[currentImg].subtitle}</p>
          </div>
          <ArrowRight isLightMode={props.isLightMode} switchRight={switchRight} className="carouselButton"/>
        </div>
    )
}

export default PictureCarousel;