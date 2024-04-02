import ApiPolar from '../requestApi/ApiPolar'
import Footer from "../footer/Footer";
import styles from './polar.module.css';

function PolarIce() {
    return (
        <div className={styles.bodyBox}>

            <div className={styles.boxH2}>
                <h2>Polar Ice</h2>
            </div>

            <ApiPolar />

            <div className={styles.boxInformation}>
                <p>
                    The arctic is warming around twice as fast as global average.
                    Some of the reasons for this are: The arctic amplification, the albedo effect,
                    and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the arctic ice cover.
                    From 2010 to present we are losing 12.85% per decade! Another consequence is permafrost thawing.
                    This is a process in which large amounts of methane is released to the atmosphere,
                    fueling more the process of global warming.
                </p>
            </div>

            <div className={styles.boxLegend}>
                <h3>Legend</h3>

                <p>
                    Value: This attribute represents the actual extent of the ice
                    Arctic marine in million square kilometers (million square km) for the period
                    specified. Indicates the amount of sea ice present in the Arctic area during
                    a particular month or year.
                </p>

                <p>
                    <span className={styles.definition}>Anom:</span> This attribute represents the ice extent anomaly
                    Arctic marine relative to a specified base period. The anomaly indicates
                    how much the extent of sea ice in a given period differs from
                    historical average for the same period of the year. Positive indicates expansion
                    compared to the historical average, while negative indicates a reduction compared
                    to the historical average.
                </p>

                <p>
                    <span className={styles.definition}>MonthlyMean: </span>This attribute represents the monthly average of the extension
                    of Arctic sea ice for the specified period. Indicates the average of the extension
                    of sea ice for the specified month in the historical period considered.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default PolarIce;