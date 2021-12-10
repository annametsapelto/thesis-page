/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import dianoras from '../Images/dianoras.png';
import seeblad from '../Images/seeblad.png';

const Header = ({isLightMode, changeMode}) => {
    const headCss = ({isLightMode}) => css`
        background-color: #C21616;
        display: flex;
        align-items: center;
        ${isLightMode === false && `
            backGround-color: #1D1D1D;
        `}
    @media only screen and (max-width: 900px) {
            flex-direction: column;
        }`;

    const modeCss = css`
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
    `;
    
    const seebladt = css`
        width: 100px;
        margin: 5%;
        @media only screen and (max-width: 900px) {
            order: 2;
        }
    `; 
    const dianora = css`
        margin-top: 50px;
        margin-bottom: 50px;
        @media only screen and (max-width: 900px) {
            margin-top: 20px;
            max-width: 100%;
            }
    `;
    const mode = () => {
        if(isLightMode) {
            return "Dark Mode";
        } else {
            return "Light Mode";
        }
    }
    return(
        <div css={headCss({isLightMode})}>
          <img css={seebladt} src={seeblad} alt="A yellow leaf shape, a heraldic seebladt"/>
          <img css={dianora} src={dianoras} alt="Decorative text saying Dianora's Page"/>
          <p css={modeCss} onClick={changeMode} isLightMode={isLightMode}>{mode()}</p>
        </div>
    );
}
export default Header;