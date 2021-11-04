import React from 'react';
import '../Styles/Footer.css';

const Footer = (props) => {
    return (
        <div className={"footer " + (!props.isLightMode ? "darkFooter": "")}>
            <p>All rights reserved by Anna Metsäpelto 2021</p>
        </div>

    )

}
export default Footer;