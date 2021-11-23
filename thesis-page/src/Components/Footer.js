import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    margin-top: 100px;
    font-size: smaller;
    text-align: center;
    color: ${props => props.isLightMode ? "#000000" : "#F6F3E6" }
    `

const Footer = (props) => {
    return (
        <FooterStyle isLightMode = {props.isLightMode}>
            <p>All rights reserved by Anna Metsäpelto 2021</p>
        </FooterStyle>
        
    )

}
export default Footer;