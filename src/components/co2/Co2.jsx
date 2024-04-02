import ApiCo2 from "../requestApi/ApiCo2";
import Footer from "../footer/Footer";
import styles from './co2.module.css'
function Co2() {
    return (
        <div className={styles.bodyBox}>
            <div className={styles.boxH2}>
                <h2>C02</h2>
            </div>
            <ApiCo2 />

            <div className={styles.boxInformation}>
                <p>
                    For thousands of years, the natural concentration of CO2 in earth atmosphere
                    was around 280 ppm. From the beginning of the industrial revolution, human activities like
                    the burning of fossil fuels, deforestation, and livestock have increased
                    this amount by more than 30%.
                </p>
            </div>

            <div className={styles.boxLegend}>
                <h3>Legend</h3>
                <p>
                    <span className={styles.definition}>Cycle:</span> Refers to the CO2 value measured on a given day,
                    which can fluctuate based on various factors such as human activity, changes
                    climate and atmospheric conditions. The cycle may show daily variations or
                    seasonal in the CO2 level.
                </p>
                <p>
                    <span className={styles.definition}>Trend:</span> Represents a moving average or statistical analysis of the data for
                    highlight the general direction in which the CO2 level is moving over time.
                    This value can be useful to identify any significant changes or
                    long-term trends, such as the gradual increase in the level of CO2 in the Earth's atmosphere.
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default Co2;