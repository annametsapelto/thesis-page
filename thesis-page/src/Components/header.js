import React from 'react';
import dianoras from '../Images/dianoras.png';
import seeblad from '../Images/seeblad.png';

const Header = (props) => {

    const mode = () => {
        if(props.isLightMode) {
            return "Dark Mode";
        } else {
            return "Light Mode";
        }
    }
    return(
        <div>
          <img src={seeblad} alt="A yellow leaf shape, a heraldic seebladt"/>
          <img src={dianoras} alt="Decorative text saying Dianora's Page"/>
          <p onClick={props.changeMode} isLightMode={props.isLightMode}>{mode()}</p>
        </div>
    );
}
export default Header;