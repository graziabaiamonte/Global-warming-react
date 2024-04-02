import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GraphicData from '../graphic/GraphicData';
import styles from './api.module.css';


function ApiTemperature() {
    const [temperatureData, setTemperatureData] = useState(null);
    const [currentValue, setCurrentValue] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://global-warming.org/api/temperature-api');
                const formattedData = response.data.result.map(item => ({
                    ...item,
                    year: parseInt(item.time.split('.')[0]),

                }));
                setTemperatureData(formattedData);

                if (formattedData && formattedData.length > 0) {
                    setCurrentValue(formattedData[formattedData.length - 1].station);
                }

            } catch (error) {
                console.error('Error fetching temperature data:', error);
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
                    <p><strong>Station Temperature:</strong> {data.station} °C</p>
                    <p><strong>Land Temperature:</strong> {data.land} °C</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className={styles.boxMain}>
            {temperatureData ? (
                <div className={styles.boxGraphic}>
                    <GraphicData data={temperatureData} dataKeyX={"year"} dataKey1={"station"} dataKey2={"land"}/>

                    <div className={styles.graphicLegend}>
                        <p>x : Year</p>
                        <p>y : Temperature (°C)</p>
                    </div>

                    <div className={styles.boxToday}>
                        <p> Today's Value: {currentValue}</p>
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

export default ApiTemperature;
