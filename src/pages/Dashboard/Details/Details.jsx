import React from 'react';
import CardDetail from './../../../components/CardDetail/CardDetail';

import { BsPeopleFill, BsBuilding, BsBriefcaseFill } from 'react-icons/bs';
import { FaExchangeAlt, FaBus } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';

import styles from './Details.module.css';

const Details = () => {
    return (
        <>
            <div className={styles.row}>
                <CardDetail icon={BsPeopleFill} title="Users" end={200} />
                <CardDetail icon={BsBuilding} title="Cities" end={120} />
                <CardDetail icon={FaExchangeAlt} title="$ Exchange Rate" end={1330} />
                <CardDetail icon={BsBriefcaseFill} colorDanger={true} title="Agencies" end={1330} />
                <CardDetail icon={FaBus} colorDanger={true} title="Valid Trips" end={200} />
                <CardDetail icon={MdAirlineSeatReclineNormal} colorDanger={true} title="Valid Seats" end={30} />
            </div>
        </>
    );
}
 
export default Details;