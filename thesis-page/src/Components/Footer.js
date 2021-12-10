/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';


const Footer = ({isLightMode}) => {
    const styles = ({isLightMode}) => css`
        margin-top: 100px;
        font-size: smaller;
        text-align: center;
        ${isLightMode === false && 
        `
            color: #F6F3E6;
        `
        }
    }`
return (
        <p css={styles({isLightMode})}>All rights reserved by Anna Metsäpelto 2021</p>
    )

}
export default Footer;