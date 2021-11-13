import React from 'react';
import dianoras from '../Images/dianoras.png';
import seeblad from '../Images/seeblad.png';
import styles from '../Styles/Header.module.css';

const Header = (props) => {

    const mode = () => {
        if(props.isLightMode) {
            return "Dark Mode";
        } else {
            return "Light Mode";
        }
    }
    const isDark = !props.isLightMode ? styles.dark: "";
    
    return(
        <div className={`${styles.header} ${isDark}`}>
          <img src={seeblad} alt="A yellow leaf shape, a heraldic seebladt" className={styles.seeblad}/>
          <img src={dianoras} alt="Decorative text saying Dianora's Page" className={styles.dianora}/>
          <p onClick={props.changeMode} isLightMode={props.isLightMode} className={styles.mode}>{mode()}</p>
        </div>
    );
}
export default Header;