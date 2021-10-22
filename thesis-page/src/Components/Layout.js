import React from 'react';
import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Maintext from './Maintext';
import SecondText from './SecondText';
import ThirdText from './ThirdText';
import PictureCarousel from './PictureCarousel';

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
           <Maintext isLightMode={lightMode}/>
           <SecondText isLightMode={lightMode} />
           <PictureCarousel isLightMode={lightMode} />
           <ThirdText isLightMode={lightMode} />
           <Footer isLightMode = {lightMode}/>
        </>
    )
}

export default Layout;