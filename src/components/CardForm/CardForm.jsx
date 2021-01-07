import React from 'react';
import Button from '../Button/Button';
import styles from './CardForm.module.css';
import cx from 'classnames';

const CardForm = ({ children, onSubmit, btnLabel, btnType, btnPosition }) => {
    return (
        <div className={styles.form}>
            <form onSubmit={onSubmit}>
                {children}
                <div className={
                    btnPosition && btnPosition === 'middle'?
                    cx(styles.middle, styles.form__button):
                    btnPosition && btnPosition === 'end'?
                    cx(styles.end, styles.form__button):
                    styles.form__button
                }>
                    <Button title={btnLabel} type={btnType} />
                </div>
            </form>
        </div>
    );
}
 
export default CardForm;