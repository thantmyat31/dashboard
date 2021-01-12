import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputGridToggleAction } from '../../redux/ui/ui.action';

import styles from './GridToggleButton.module.css';
import { BsGrid1X2Fill, BsListUl } from 'react-icons/bs';

const GridToggleButton = () => {
    const { inputGridFullWidth } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const handleOnClick = (status) => {
        dispatch(inputGridToggleAction(!status));
    }

    return (
        <div className={styles.grid__button} onClick={() => handleOnClick(inputGridFullWidth)}>
            {
                inputGridFullWidth?
                <BsGrid1X2Fill className={styles.icon} />:
                <BsListUl className={styles.icon} />
            }
        </div>
    );
}
 
export default GridToggleButton;