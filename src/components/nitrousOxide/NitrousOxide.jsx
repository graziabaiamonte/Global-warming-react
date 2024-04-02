import ApiNitrous from '../requestApi/ApiNitrous';
import Footer from "../footer/Footer";
import styles from './nitrous.module.css';
function NitrousOxide() {
    return (
        <div className={styles.bodyBox}>
            <div className={styles.boxH2}>
                <h2>Nitrous Oxide</h2>
            </div>
            <ApiNitrous />

            <div className={styles.boxInformation}>
                <p>
                    Nitrous oxide is a gas that is produced by the combustion of
                    fossil fuel and solid waste, nitrogen-base fertilizers, sewage treatment
                    plants, natural processes, and other agricultural and industrial activities.
                    It is the third largest heat-trapping gas in the atmosphere and the biggest
                    ozone-destroying compound emitted by human activities.
                </p>
            </div>

            <div className={styles.boxLegend}>
                <h3>Legend</h3>
                <p>
                    <span className={styles.definition}>Average:</span> This field represents the
                    average concentration of nitrogen oxide in the atmosphere
                    for a certain period of time. Typically, this value
                    it is calculated based on historical data or periodic observations.
                </p>

                <p>
                    <span className={styles.definition}>Trend:</span> This field represents the variation trend of the
                    concentration of nitrogen oxide in the atmosphere over time. Indicate
                    whether the N₂O concentration is increasing, decreasing or remaining stable
                    in time. The trend can be calculated using statistical models or
                    data analysis algorithms to identify patterns or changes in the course
                    weather.
                </p>

            </div>
            <Footer />
        </div>
    );
}

export default NitrousOxide;