import { Link } from 'react-router-dom';
import styles from './home.module.css';
import Footer from '../footer/Footer';

function Home() {
    return (
        <>
            <div className={styles.homeBox}>

                <div className={`${styles.mainBox} ${styles.temperature}`}>
                    <Link to='/temperature' className={styles.link}> Temperature</Link>
                </div>

                <div className={`${styles.mainBox} ${styles.co2}`}>
                    <Link to='/co2' className={styles.link}> Co2</Link>
                </div>

                <div className={`${styles.mainBox} ${styles.methane}`}>
                    <Link to='/methane' className={styles.link}> Methane</Link>
                </div>

                <div className={`${styles.mainBox} ${styles.nitrous}`}>
                    <Link to='/nitrousOxide' className={styles.link}> No2</Link>
                </div>

                <div className={`${styles.mainBox} ${styles.polar}`}>
                    <Link to='/polarIce' className={styles.link}> Polar Ice</Link>
                </div>

            </div>

            <div>
                <Footer />
            </div>
        </>
    );
}

export default Home;



