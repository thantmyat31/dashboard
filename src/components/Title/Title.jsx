import React from 'react';
import styles from './Title.module.css';

const Title = ({ title, icon }) => {
    return (
        <h1 className={styles.title}>
            {title}
            {icon}
        </h1>
    );
}
 
export default Title;