import {pictures} from '../Utility/CarouselData';
import {useState} from 'react';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import styled from 'styled-components';

const Carousel = styled.div`
    display: flex;
    align-items:center;
    margin-left: 40px;
    @media only screen and (max-width: 1500px) {
            width: 90%;
            justify-content: center;
    }
    @media only screen and (max-width: 700px) {
            width: 100%;
            margin-left: 0px;
        }
` 
const CarouselImg = styled.img`
    width: 600px;
    @media only screen and (max-width: 1500px) {
        width: 500px;
    }
    @media only screen and (max-width: 700px) {
        width: 300px;
        }
`

const CarouselText = styled.p`
text-align: center;
color: ${props => props.isLightMode ? "#000000" : "#F6F3E6"};
@media only screen and (max-width: 700px) {
    width: 300px;
}
` 


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
        <Carousel> 
          <ArrowLeft isLightMode={props.isLightMode} switchLeft={switchLeft}/>   
          <div>
              <CarouselImg src={pictures[currentImg].img} alt={pictures[currentImg].alt} />
              <CarouselText isLightMode = {props.isLightMode}>{pictures[currentImg].subtitle}</CarouselText>
          </div>
          <ArrowRight isLightMode={props.isLightMode} switchRight={switchRight} />
        </Carousel>
    )
}

export default PictureCarousel;