import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { navbarDropdownToggleAction } from './../../redux/ui/ui.action';

import { BsFillCursorFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
    const { navbarDropdown } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const onLogout = () => {
        alert('Logged out');
    }

    const renderDropdown = (status) => {
        if(status) return (
            <div className={styles.dropdown}>
                <Link to="/profile" className={styles.item}>John Carter</Link>
                <p className={styles.item} onClick={onLogout}>logout</p>
            </div>
        );
        return null;
    }

    const handleOnClick = () => {
        dispatch(navbarDropdownToggleAction(true));
    }

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <Link to="/" className={styles.navbar__brand}>
                        <BsFillCursorFill className={styles.logo} /> DashBoard
                    </Link>

                    <div className={styles.nav__right}>
                        <FaUserCircle className={styles.profile} onClick={handleOnClick} />
                        {renderDropdown(navbarDropdown)}
                    </div>
                </nav>
            </header>
        </>
    );
}
 
export default Header;