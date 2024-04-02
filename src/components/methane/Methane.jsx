import ApiMethane from '../requestApi/ApiMethane';
import Footer from "../footer/Footer";
import styles from './methane.module.css'

function Methane() {
    return (
        <div className={styles.bodyBox}>
            <div className={styles.boxH2}>
                <h2>Methane</h2>
            </div>
            <ApiMethane />
            <br></br>

            <div className={styles.boxInformation}>
                <p>
                    Methane is a flammable gas formed by geological and biological processes.
                    Some of the natural ones are leaks from natural gas systems and wetlands.
                    50-65% of total global methane emissions come from human activities.
                    These include livestock, agriculture, oil and gas systems, waste from homes and businesses,
                    landfills, and so on. Methane is a gas with a global warming potential several
                    times stronger than of CO2. For more than 650,000 years, methane concentration in
                    the atmosphere was between 350 – 800 ppb. From the beginning of the industrial revolution,
                    human activities have increased this amount by around 150%
                </p>
            </div>


            <div className={styles.boxLegend}>
                <h3>Legend</h3>
                <p>
                    <span className={styles.definition}>Average:</span> This value represents the average level of the
                    methane in the atmosphere in parts per million (ppm) for the specified period.
                    It indicates the average concentration of methane in the air during that period of time.
                </p>

                <p>
                    <span className={styles.definition}>Trend:</span> This value represents the trend or direction of the
                    change in the level of methane in the atmosphere over time. Indicates whether the
                    methane concentration is increasing, decreasing or remaining stable during
                    the specified period.
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default Methane;