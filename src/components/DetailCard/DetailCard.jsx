import React from 'react';

import styles from './DetailCard.module.css';
import cx from 'classnames';
import CountUp from 'react-countup';


const DetailCard = ({ icon: Icon, end, title, colorDanger }) => {

    return ( 
        <>
            <div className={styles.col}>
                <div className={colorDanger?cx(styles.card, styles.danger):styles.card}>
                    <Icon className={styles.icon} />
                    <h3>{title}</h3>
                    <span><CountUp start={0} end={end} duration={2} separator="," /></span>
                </div>
            </div>
        </>
     );
}
 
export default DetailCard;