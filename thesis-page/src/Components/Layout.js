import React from 'react';
import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Maintext from './Maintext';
import SecondText from './SecondText';
import ThirdText from './ThirdText';
import PictureCarousel from './PictureCarousel';
import styled from 'styled-components';

const MainFlex = styled.div`
    display: flex;
    background-color: ${props => props.lightMode ? "#F6F3E6" : "#1D1D1D"}
    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`
const FirstFlex = styled.div`
@media only screen and (max-width: 900px) {
    order: 1;
}
`
const SecondFlex = styled.div`
    flex-direction: column;
    @media only screen and (max-width: 900px) {        
    order: 2;
}
`
const LastFlex = styled.div`
@media only screen and (max-width: 900px) {
    order: 3;
`

const Layout = () => {
    const [lightMode, setLightMode] = useState(true);

    const changeMode = () =>{
      if(lightMode) {
          setLightMode(false);
      } else {
          setLightMode(true);
      }
    }
    return (
        <>
           <Header changeMode = {changeMode} isLightMode = {lightMode}/>
           <MainFlex lightMode = {lightMode}>                       
               <SecondText isLightMode={lightMode} />
                <SecondFlex>
                <FirstFlex>
                   <Maintext isLightMode={lightMode}/>
                </FirstFlex>        
                <LastFlex>                      
                    <PictureCarousel isLightMode={lightMode} />
                    <ThirdText isLightMode={lightMode} />
                </LastFlex>
                </SecondFlex>
               </MainFlex>
           <Footer isLightMode = {lightMode}/>
        </>
    )
}

export default Layout;