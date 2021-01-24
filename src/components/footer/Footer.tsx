import React from 'react';
import styles from './Footer.module.css';
import stylesContainer from "../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container}  ${styles.footerContainer}`}>
                <h3>Sapronov Vitaliy</h3>
                <div className={styles.iconsBlock}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span>© 2021 All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
