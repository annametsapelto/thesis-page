import React from 'react';
import styles from '../Styles/Footer.module.css';

const Footer = (isLightMode) => {
    return (
        <p className={`${styles.footer} !isLightMode ? ${styles.dark}: ${""}`}>All rights reserved by Anna Metsäpelto 2021 </p>
    )
}
export default Footer;