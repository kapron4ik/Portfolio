import React from 'react';
import styles from './Main.module.css';
import stylesContainer from '../common/styles/Container.module.css';

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={`${stylesContainer.container} ${styles.mainContainer}`}>
                <div className={styles.greeting}>
                    <span>Hello!</span>
                    <h3>I'm Sapronov Vitaliy</h3>
                    <span>A front-end developer</span>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
}

export default Main;
