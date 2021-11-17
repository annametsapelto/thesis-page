import React from 'react';
import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Maintext from './Maintext';
import SecondText from './SecondText';
import ThirdText from './ThirdText';
import PictureCarousel from './PictureCarousel';
import styles from '../Styles/Layout.module.css';

const Layout = () => {

    const [lightMode, setLightMode] = useState(true);

    const changeMode = () =>{
      if(lightMode) {
          setLightMode(false);
      } else {
          setLightMode(true);
      }
    }
    const isDark = !lightMode ? styles.darkBackground: styles.lightBackground;
    return (
        <div className={isDark}>
            <Header changeMode = {changeMode} isLightMode = {lightMode}/>
            <div className={styles.mainFlex}>                      
                <SecondText isLightMode={lightMode} className={styles.second} />
                <div className={styles.secondFlex}>            
                    <div className={styles.first}>           
                        <Maintext isLightMode={lightMode}/>
                        <PictureCarousel isLightMode={lightMode} />                    
                    </div>
                    <div className={styles.last}>           
                        <ThirdText isLightMode={lightMode} />
                    </div>
                </div>
            </div>
            <Footer isLightMode = {lightMode}/>
        </div>
    )
}

export default Layout;