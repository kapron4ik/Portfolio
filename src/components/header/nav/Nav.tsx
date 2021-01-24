import React from "react";
import styles from './Nav.module.css';

export function Nav() {
    return <div className={styles.nav}>
        <a href="">Home</a>
        <a href="">Skills</a>
        <a href="">Works</a>
        <a href="">Contacts</a>
    </div>
}