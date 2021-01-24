import React from 'react';
import styles from './Work.module.css';
import stylesContainer from '../../common/styles/Container.module.css';

type PropsType = {
    image: string
    title: string
    description: string
}

function Work(props: PropsType) {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.imgContainer}>
                <img src={props.image} alt="Snow"/>
                <a href="" className={styles.btn}>View</a>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}



export default Work;
