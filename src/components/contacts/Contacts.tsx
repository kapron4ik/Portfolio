import React from 'react';
import styles from './Contacts.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import Work from "../works/work/Work";

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container}  ${styles.skillsContainer}`}>
                <h2>Contacts</h2>
                <form action="handler.php" className={styles.formBlock}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <a href="" className={styles.btn}>Submit</a>
            </div>
        </div>
    );
}

export default Contacts;
