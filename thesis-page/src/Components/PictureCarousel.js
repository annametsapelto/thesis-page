import {pictures} from '../Utility/CarouselData';
import {useState} from 'react';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

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
        <div> 
          <ArrowLeft isLightMode={props.isLightMode} switchLeft={switchLeft}/>   
          <div>
              <img src={pictures[currentImg].img} alt={pictures[currentImg].alt} />
              <p>{pictures[currentImg].subtitle}</p>
          </div>
          <ArrowRight isLightMode={props.isLightMode} switchRight={switchRight} />
        </div>
    )
}

export default PictureCarousel;