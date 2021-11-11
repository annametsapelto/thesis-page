import React from 'react';
import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Maintext from './Maintext';
import SecondText from './SecondText';
import ThirdText from './ThirdText';
import PictureCarousel from './PictureCarousel';
import '../Styles/Layout.css';

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
        <div className={(lightMode ? "lightBackground": "darkBackground")}>
           <Header changeMode = {changeMode} isLightMode = {lightMode}/>
           <div className="mainFlex">
                <SecondText isLightMode={lightMode} className="second"/>  
                <div className="secondFlex">
                    <div className="first">
                        <Maintext isLightMode={lightMode}/>
                        <PictureCarousel isLightMode={lightMode} />
                    </div>
                    <div className="last">
                        <ThirdText isLightMode={lightMode} />
                    </div>
                </div>         

            </div>
           <Footer isLightMode = {lightMode}/>
        </div>
    )
}

export default Layout;