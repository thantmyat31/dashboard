import React from 'react';
import styles from './Input.module.css';
import cx from 'classnames';
import { useSelector } from 'react-redux';

const Input = ({ id, label, value, onChange, required, ...rest }) => {
    const { inputGridFullWidth } = useSelector(state => state.ui);

    const getClassName = (value) => {
        if(value && value.length > 0) return cx(styles.input, styles.not__empty);
        else return styles.input;
    }
    return (
        <div className={
            inputGridFullWidth?
            cx(styles.input__group, styles.full__width):
            styles.input__group
        }>
            {
                label && 
                <label htmlFor={id} className={styles.label}>
                    {label} 
                    {required && <span  className={styles.required}>★</span>}
                </label>
            }
            <input 
                id={id}
                value={value}
                onChange={onChange}
                required={required?true:false}
                {...rest}
                className={getClassName(value)}
            />
            <span className={styles.border}></span>
        </div>
    );
}
 
export default Input;