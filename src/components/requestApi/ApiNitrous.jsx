import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './api.module.css';
import GraphicData from '../graphic/GraphicData';

function ApiNitrous() {
    const [nitrousData, setNitrousData] = useState(null);
    const [currentValue, setCurrentValue] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://global-warming.org/api/nitrous-oxide-api');
                const formattedData = response.data.nitrous.map(item => ({
                    ...item,
                    year: parseFloat(item.date),
                    value: parseFloat(item.average)
                }));
                setNitrousData(formattedData);

                if (formattedData && formattedData.length > 0) {
                    setCurrentValue(formattedData[formattedData.length - 1].value);
                }

            } catch (error) {
                console.error('Error fetching nitrous data:', error);
            }
        };

        fetchData();
    }, []);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div style={{ backgroundColor: 'white', padding: '5px', border: '1px solid #ccc' }}>
                    <p><strong>Date:</strong> {data.year}</p>
                    <p><strong>Average Value:</strong> {data.value}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className={styles.boxMain}>
            {nitrousData ? (
                <div className={styles.boxGraphic} >
                   

                    <GraphicData data={nitrousData} dataKeyX={"year"} dataKey1={"value"} />

                    <div className={styles.graphicLegend}>
                        <p>x : Year</p>
                        <p>y : Nitrous Oxide mole fraction (ppb)</p>
                    </div>


                    <div className={styles.boxToday}>
                        <p>Today's Value: {currentValue}</p>
                    </div>
                </div>
            ) : (
                <div>
                <p>Loading..</p>
                <span className={styles.loader}></span>
               </div>
            )}
        </div>
    );
}

export default ApiNitrous;
