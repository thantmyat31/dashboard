import React from 'react';

import DBLayout from './../../components/DBLayout/DBLayout';
import Details from './Details/Details';

import { BsFillGridFill, BsTable } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import Form from './Form/Form';
import Table from './Table/Table';
 
const Dashboard = () => {
    const navLinks = [
        { path: '/', name: 'Dashboard', icon: <BsFillGridFill /> },
        { path: '/form', name: 'Form', icon: <FaWpforms /> },
        { path: '/table', name: 'Table', icon: <BsTable /> }
    ];

    const routes = [
        { path: '/', component: Details },
        { path: '/form', component: Form },
        { path: '/table', component: Table }
    ];

    return (
        <DBLayout 
            navLinks={navLinks}
            routes={routes}
        />
     );
}
 
export default Dashboard;