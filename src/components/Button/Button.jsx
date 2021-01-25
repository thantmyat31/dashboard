import React from 'react';
import styles from './Button.module.css';
import cx from 'classnames';

const Button = ({ title, type, style, onClick, btnColor }) => {
    return (
        <button 
            type={type} 
            style={style}
            onClick={onClick}
            className={
                btnColor && btnColor === 'danger'?
                cx(styles.button, styles.danger):
                styles.button
            }>{title}</button>
    );
}
 
export default Button;