/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import Ornaments from "./Ornaments";

const ThirdText = ({isLightMode}) => {
    const third = ({isLightMode}) => css`
        width: 50%;
        margin-left: 20px;
        margin-right: 20%;
        padding: 10px;
        ${isLightMode === false && `
            color: #F6F3E6;
        `}
        @media only screen and (max-width: 900px) {
            width: 95%;
            margin-left: 10px;
            margin-right: 20px;
        }
    `
    const thirdTitle = css`
        text-align: center;
    `
    return (
        <div css={third({isLightMode})}>
            <Ornaments isLightMode={isLightMode} />
            <h3 css={thirdTitle}>SCA</h3>
            <p>The reenactment group SCA (Society for Creative Anachronism) is an international group for reenacting history pre year 1600. 
                Here in Finland, we have determined that our period starts from the year 500 so we don’t reenact for example Antiquity. 
                Nevertheless, we can have Viking warriors and Renaissance gentlefolk in the same events. </p>
            <p>SCA is divided into reenactment groups with similar rules called kingdoms which are ruled by kings and queens chosen biannually 
                by a tournament. Europe belongs to the kingdom of Drachenwald which is also divided into duchies and baronies. 
                Finland is the barony of Aarnimetsä and ruled by the baron and baroness who are chosen by the public every two years. 
                I ran for baroness with my husband ten years ago though we weren’t chosen. My local group, a canton, is called Humalasalo and it has 
                populace in Tampere, Hämeenlinna, Valkeakoski and Lahti with their surroundings.</p>
            <p>Being in the SCA means that our activities are very international. 
                I have attended SCA events in Sweden and Germany and many friends of mine attend events abroad every year.</p>
            <Ornaments isLightMode={isLightMode} />
        </div>
    )
}

export default ThirdText;