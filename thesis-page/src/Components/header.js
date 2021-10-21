import React from 'react';
import dianoras from '../Images/dianoras.png';
import seeblad from '../Images/seeblad.png';

const Header = (changeMode, isLightMode) => {

    const mode = () => {
        if(isLightmode) {
            return "Dark Mode";
        } else {
            return "LightMode";
        }
    }
    return(
        <div>
          <img src={seeblad} alt="Picture of a yellow leaf shape, a heraldic seebladt"/>
          <img src={dianoras} alt="Decorative text saying Dianora's Page"/>
          <p onClick={changeMode} isLightMode={isLightMode}>{mode}</p>
        </div>
    );
}
export default Header;