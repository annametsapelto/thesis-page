import React from 'react';
import dianoras from '../Images/dianoras.png';
import seeblad from '../Images/seeblad.png';
import styled from 'styled-components';

const FullHeader = styled.div`
    background-color: ${props => props.isLightMode ? "#C21616": "#1D1D1D"};
    display: flex;
    align-items: center;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`
const ModeStyle = styled.div`
    color: #F6F3E6;
    align-self: flex-end;
    justify-self: flex-end;
    margin-right: 2%;
    padding-bottom: 10px;
    cursor: pointer;
    &:hover {
        color: #EEB414;
    }
    @media only screen and (max-width: 900px) {
        order: 3;
    }
`
const Seeblad = styled.img`
    width: 100px;
    margin: 5%;
    @media only screen and (max-width: 900px) {
        order: 2;
    }
`
const Dianora = styled.img`
    margin-top: 50px;
    margin-bottom: 50px;
    @media only screen and (max-width: 900px) {
        order: 1;
    }
`

const Header = (props) => {

    const mode = () => {
        if(props.isLightMode) {
            return "Dark Mode";
        } else {
            return "Light Mode";
        }
    }
    return(
        <FullHeader isLightMode = {props.isLightMode}>
          <Seeblad src={seeblad} alt="A yellow leaf shape, a heraldic seebladt"/>
          <Dianora src={dianoras} alt="Decorative text saying Dianora's Page"/>
          <ModeStyle>
              <p onClick={props.changeMode} isLightMode={props.isLightMode}>{mode()}</p>
          </ModeStyle>
        </FullHeader>
    );
}
export default Header;