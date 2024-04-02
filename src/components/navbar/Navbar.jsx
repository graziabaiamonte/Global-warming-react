import React from 'react';
import styles from './navbar.module.css';
import {  Link  } from 'react-router-dom';


function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.boxH1}>
                <Link to="/" className={styles.textH1}>GLOBAL WARMING</Link>
            </div>
        </div>
    )
}

export default Navbar