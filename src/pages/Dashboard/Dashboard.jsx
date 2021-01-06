import React from 'react';

import DBLayout from './../../components/DBLayout/DBLayout';
import Details from './Details/Details';

import { BsFillGridFill } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import Form from './Form/Form';
 
const Dashboard = () => {
    const navLinks = [
        { path: '/', name: 'Dashboard', icon: <BsFillGridFill /> },
        { path: '/form', name: 'Form', icon: <FaWpforms /> }
    ];

    const routes = [
        { path: '/', component: Details },
        { path: '/form', component: Form }
    ];

    return (
        <DBLayout 
            navLinks={navLinks}
            routes={routes}
        />
     );
}
 
export default Dashboard;