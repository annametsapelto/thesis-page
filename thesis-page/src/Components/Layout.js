/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React from 'react';
import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Maintext from './Maintext';
import SecondText from './SecondText';
import ThirdText from './ThirdText';
import PictureCarousel from './PictureCarousel';

const Layout = () => {

    const back = ({lightMode}) => css`
        background-color: #F6F3E6;
        ${!lightMode && `
            background-color: #1D1D1D;
        `}
    `;

    const mainFlex = css`
        display: flex;
        @media only screen and (max-width: 900px) {
            flex-direction: column;
        }
        `
            
    const secondFlex =css`
        flex-direction: column;
    `
    const first = css`
        @media only screen and (max-width: 900px) {
        order: 1;
    }
    `;
    
    const second = css`
        @media only screen and (max-width: 900px) {
            order: 2;
        }
    `

    const last = css`
        @media only screen and (max-width: 900px) {
            order: 3;
        }
    `

    const [lightMode, setLightMode] = useState(true);

    const changeMode = () =>{
      if(lightMode) {
          setLightMode(false);
      } else {
          setLightMode(true);
      }
    }
    return (
        <div css={back({lightMode})}>
           <Header changeMode = {changeMode} isLightMode = {lightMode}/>
           <div css={mainFlex}>
               <div css={second}>
                   <SecondText isLightMode={lightMode} />
                </div>           
                <div css={secondFlex}> 
                    <div css={first}>
                        <Maintext isLightMode={lightMode}/>
                    </div>              
                    <div css={last}>
                        <PictureCarousel isLightMode={lightMode} />
                        <ThirdText isLightMode={lightMode} />
                    </div>
                </div>
           </div>
           <Footer isLightMode = {lightMode}/>
        </div>
    )
}

export default Layout;