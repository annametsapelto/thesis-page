import React from 'react';
import styles from '../Styles/Footer.module.css';

const Footer = (props) => {
    const isDark = !props.isLightMode ? styles.dark: "";
    return (
        <p className={`${styles.footer} ${isDark}`}>All rights reserved by Anna Metsäpelto 2021 </p>
    )
}
export default Footer;