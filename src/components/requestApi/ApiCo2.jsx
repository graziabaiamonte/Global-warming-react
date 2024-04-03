import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GraphicData from '../graphic/GraphicData';
import styles from './api.module.css';

function ApiCo2() {
    const [co2Data, setCo2Data] = useState(null);
    const [currentValue, setCurrentValue] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://global-warming.org/api/co2-api');
                const formattedData = response.data.co2.map(item => ({
                    ...item,
                    date: new Date(`${item.year}.${item.month}`).toISOString().split('T')[0].substr(0, 7).replace(/-/g, '.')
                }));

                const currentDate = new Date();
                const tenYearsAgo = new Date().setFullYear(currentDate.getFullYear() - 10);
                const filteredData = formattedData.filter(item => new Date(item.date) >= new Date(tenYearsAgo));

                setCo2Data(filteredData);

                if (filteredData && filteredData.length > 0) {
                    setCurrentValue(filteredData[filteredData.length - 1].cycle);
                }

            } catch (error) {
                console.error('Error fetching CO2 data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.boxMain}>
            {co2Data ? (
                <div className={styles.boxGraphic}>
               
                    <GraphicData data={co2Data} dataKeyX={"date"} dataKey1={"cycle"} dataKey2={"trend"} />

                    <div className={styles.graphicLegend}>
                        <p>x : Year</p>
                        <p>y : Part Per Million (ppm)</p>
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

export default ApiCo2;
