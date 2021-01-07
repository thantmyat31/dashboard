import React from 'react';
import styles from './Button.module.css';

const Button = ({ title, type, style }) => {
    return (
        <button 
            type={type} 
            style={style}
            className={styles.button}>{title}</button>
    );
}
 
export default Button;