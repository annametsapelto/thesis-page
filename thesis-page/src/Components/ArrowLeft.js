/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import Arrow from '../Images/arrow-left.png';


const ArrowLeft = ({isLightMode, switchLeft}) => {
const styles = ({isLightMode}) => css`
            height: 90px;
            width: 60px;
            background-color: #EEB414; 
            cursor: pointer;
            min-width: 70px;
            background-image: url(${Arrow});
            background-repeat: no-repeat;
            background-size: 90%;
            margin-right: 2px;
            &:hover {
                background-color: #F6F3E6;
            }
            ${isLightMode === false &&
            `
                background-color: #F6F3E6;
                &:hover {
                    background-color: #EEB414;
                } 
            `}
            @media only screen and (max-width: 1200px) {
                width: 40px;
                height: 60px;
                min-width: 40px;
            }`
       
    return (
        <button onClick={switchLeft}
            css={styles({isLightMode})}
        />
    )
}

export default ArrowLeft;