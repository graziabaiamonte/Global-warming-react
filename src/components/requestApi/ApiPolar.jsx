import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GraphicData from '../graphic/GraphicData';
import styles from './api.module.css';


function ApiPolar() {
    const [arcticData, setArcticData] = useState(null);
    const [currentValue, setCurrentValue] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://global-warming.org/api/arctic-api');
                const data = response.data.arcticData.data;
                setArcticData(data);

                // Trova il valore più recente di estensione del ghiaccio marino
                const latestYearMonth = Object.keys(data).pop();
                const latestValue = data[latestYearMonth].value;
                setCurrentValue(latestValue);
            } catch (error) {
                console.error('Error fetching arctic data:', error);
            }
        };

        fetchData();
    }, []);

    const formatData = (data) => {
        return Object.keys(data)
            .filter(yearMonth => data[yearMonth].value >= 10 && data[yearMonth].value <= 30)
            .map(yearMonth => {
                
                const year = yearMonth.slice(0, 4);
                const month = yearMonth.substring(4);  
                return {
                    yearMonth: `${year}.${month}`, 
                    year, 
                    month, 
                    value: data[yearMonth].value, 
                    anom: data[yearMonth].anom, 
                    monthlyMean: data[yearMonth].monthlyMean
                };
            });
    };

    return (
        <div className={styles.boxMain}>
            {arcticData ? (
                <div className={styles.boxGraphic}>

                    <GraphicData data={formatData(arcticData)} dataKeyX={"year"} dataKey1={"value"} dataKey2={"anom"} dataKey3={"monthlyMean"} />

                    <div className={styles.graphicLegend}>
                        <p>x : Year</p>
                        <p>y : Sea Ice Extent (million square km)</p>
                    </div>

                    <div className={styles.boxToday}>
                        <p>Current Arctic Sea Ice Extent: {currentValue} million square km</p>
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

export default ApiPolar;
