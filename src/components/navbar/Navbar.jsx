import React from 'react';
import styles from './navbar.module.css';

import {  Link  } from 'react-router-dom';


function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.boxH1}>
                <Link to="/home">GLOBAL </Link>
            </div>
        </div>
    )
}

export default Navbar