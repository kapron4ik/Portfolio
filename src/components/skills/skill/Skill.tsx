import React from 'react';
import styles from './Skill.module.css';

type PropsType = {
    title: string
    description: string
}

function Skill(props:PropsType) {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Skill;
