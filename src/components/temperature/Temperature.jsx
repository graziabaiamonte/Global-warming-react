import ApiTemperature from '../requestApi/ApiTemperature';
import styles from './temperature.module.css';
import Footer from "../footer/Footer";

function Temperature() {
    return (
        <div className={styles.bodyBox}>

            <div className={styles.boxH2}>
                <h2>Temperature</h2>
            </div>

            <ApiTemperature />

            <div className={styles.boxInformation}>
                <p>
                    The current global warming rate is not natural. From 1880 to 1981 was
                    (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to (0.18°C / 0.32°F)
                </p>

                <p>
                    Some of the past sudden increase on global temperature present in this graph,
                    correspond to the Roman Warm Period and the Medieval Warm Period.
                    These events were at regional and not global scale
                </p>

                <p>
                    The total average global temperature rise since the industrial revolution
                    is around (1.0 °C / 1.8 °F). Earth northern hemisphere is warming faster.
                    The arctic has warmed between (2 °C / 3.6 °F) and (4 °C / 7.2 °F).
                </p>
            </div>

            <div className={styles.boxLegend}>
                <h3>Legend</h3>
                <p>
                    <span className={styles.definition}>Station:</span> This may refer to temperature data detected by stations
                    specific weather conditions. Weather stations are placed in various locations and
                    they measure local weather conditions, including temperature. So, the "station" field
                    it may contain temperature data detected by a specific weather station.
                </p>

                <p>
                    <span className={styles.definition}>Land:</span> This could represent the average temperature on land in general,
                    based on aggregated data from various sources and weather stations. The "land" field may contain
                    data on the average temperature over land, which could be calculated using climate models
                    global or by combining data from various sources.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Temperature;