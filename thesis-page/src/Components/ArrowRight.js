/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import Arrow from '../Images/arrow-right.png';

const ArrowRight = ({isLightMode, switchRight}) => {
    const styles = ({isLightMode}) => css`
            height: 90px;
            width: 60px;
            background-color: #EEB414; 
            cursor: pointer;
            min-width: 70px;
            background-image: url(${Arrow});
            background-repeat: no-repeat;
            background-size: 90%;
            margin-left: 2px;
            &:hover {
                background-color: #F6F3E6;
            }
            ${!isLightMode &&
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
        <button onClick={switchRight}
            css={styles({isLightMode})}
        />
    )
}

export default ArrowRight;