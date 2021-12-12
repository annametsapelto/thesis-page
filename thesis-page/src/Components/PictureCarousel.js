/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import {pictures} from '../Utility/CarouselData';
import {useState} from 'react';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

const PictureCarousel = ({isLightMode}) => {
    const [currentImg, setCurrentImg] = useState(0);

    const carousel = ({isLightMode}) => css`
        display: flex;
        align-items:center;
        margin-left: 40px;
        ${isLightMode === false && `
            color: #F6F3E6
        `}
        @media only screen and (max-width: 1500px) {
            width: 90%;
            justify-content: center;
        }
        @media only screen and (max-width: 700px) {
            width: 100%;
            margin-left: 0px;}
        `
    const carouselImg = css`
    width: 600px;
    @media only screen and (max-width: 1500px) {
        width: 500px;
    }
    @media only screen and (max-width: 700px) {
        width: 300px;
    }
    `
    const carouselP = ({isLightMode}) => css`
    text-align: center;
    @media only screen and (max-width: 700px) {
            width: 300px;
        }
    ${isLightMode === false && `
        color: #F6F3E6;
    `}    
    ` 

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
        <div css={carousel({isLightMode})}> 
          <ArrowLeft isLightMode={isLightMode} switchLeft={switchLeft}/>   
          <div>
              <img src={pictures[currentImg].img} alt={pictures[currentImg].alt} css={carouselImg} />
              <p css={carouselP({isLightMode})}>{pictures[currentImg].subtitle}</p>
          </div>
          <ArrowRight isLightMode={isLightMode} switchRight={switchRight} />
        </div>
    )
}

export default PictureCarousel;