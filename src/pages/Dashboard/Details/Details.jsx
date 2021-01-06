import React from 'react';
import DetailCard from './../../../components/DetailCard/DetailCard';

import { BsPeopleFill, BsBuilding, BsBriefcaseFill } from 'react-icons/bs';
import { FaExchangeAlt, FaBus } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';

import styles from './Details.module.css';

const Details = () => {
    return (
        <>
            <div className={styles.row}>
                <DetailCard icon={BsPeopleFill} title="Users" end={200} />
                <DetailCard icon={BsBuilding} title="Cities" end={120} />
                <DetailCard icon={FaExchangeAlt} title="$ Exchange Rate" end={1330} />
                <DetailCard icon={BsBriefcaseFill} colorDanger={true} title="Agencies" end={1330} />
                <DetailCard icon={FaBus} colorDanger={true} title="Valid Trips" end={200} />
                <DetailCard icon={MdAirlineSeatReclineNormal} colorDanger={true} title="Valid Seats" end={30} />
            </div>
        </>
    );
}
 
export default Details;