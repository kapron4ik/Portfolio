import React from 'react';
import styles from './Works.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import Work from "./work/Work";

function Works() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2>My works</h2>
                <div className={styles.skills}>
                    <Work
                        image={"https://drugoy.com.ua/uploads/blog/4dd3a-start.jpg"}
                        title={"My first work"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam molestiae," +
                        "tempore voluptatibus. A in quaerat rem rerum voluptatem."}/>
                    <Work
                        image={"https://drugoy.com.ua/uploads/blog/4dd3a-start.jpg"}
                        title={"My second work"}
                        description={"Amet debitis odio reprehenderit " +
                        "tempore voluptatibus. A in quaerat rem rerum voluptatem."}/>
                </div>

            </div>
        </div>
    );
}

export default Works;
