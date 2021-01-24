import React from 'react';
import styles from './Header.module.css';
import {Nav} from "./nav/Nav";

function Header() {
    return (
        <div className={styles.headerBlock}>
            <Nav/>
        </div>
    );
}

export default Header;
