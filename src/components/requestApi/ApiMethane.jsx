import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GraphicData from '../graphic/GraphicData';
import styles from './api.module.css';

function ApiMethane() {
    const [methaneData, setMethaneData] = useState(null);
    const [currentValue, setCurrentValue] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://global-warming.org/api/methane-api');
                const formattedData = response.data.methane.map(item => ({
                    ...item,
                    year: parseInt(item.date.split('.')[0]),
                    month: parseInt(item.date.split('.')[1])
                }));
                setMethaneData(formattedData);

                const latestValue = formattedData[formattedData.length - 1];
                setCurrentValue(latestValue.average);
            } catch (error) {
                console.error('Error fetching methane data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.boxMain}>
          
            {methaneData ? (
                <div className={styles.boxGraphic} >
                   
                      <GraphicData data= {methaneData} dataKeyX={"date"} dataKey1={"average"} dataKey2={"trend"}/>

                    <div className={styles.graphicLegend}>
                        <p>x : Year</p>
                        <p>y : Methane (ppm)</p>
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

export default ApiMethane;
