import React from 'react';
import dianoras from '../Images/dianoras.png';
import seeblad from '../Images/seeblad.png';
import '../Styles/Header.css';

const Header = (props) => {

    const mode = () => {
        if(props.isLightmode) {
            return "Dark Mode";
        } else {
            return "Light Mode";
        }
    }
    return(
        <div className="header">
          <img src={seeblad} alt="A yellow leaf shape, a heraldic seebladt" className="seeblad"/>
          <img src={dianoras} alt="Decorative text saying Dianora's Page" className="dianora"/>
          <p onClick={props.changeMode} isLightMode={props.isLightMode} className="mode">{mode()}</p>
        </div>
    );
}
export default Header;