import React from 'react';
import styles from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2>My skills</h2>
                <div className={styles.skills}>
                    <Skill
                        title={"HTML/CSS"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam molestiae," +
                        "tempore voluptatibus. A in quaerat rem rerum voluptatem."}/>
                    <Skill
                        title={"JS"}
                        description={"Amet debitis odio reprehenderit " +
                        "tempore voluptatibus. A in quaerat rem rerum voluptatem."}/>
                    <Skill
                        title={"TS"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam molestiae," +
                        "optio repellat rerum similique sint veniam voluptatibus? Amet debitis odio reprehenderit"}/>
                </div>

            </div>
        </div>
    );
}

export default Skills;
