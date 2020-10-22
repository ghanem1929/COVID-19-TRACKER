import React, {useEffect , useState} from "react";
import {fetchDailyData} from "../../api";
import {Line } from "react-chartjs-2";
import styles from "./Charts.module.css";
const Charts = () => {
    const [dailyData, setdailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setdailyData(await fetchDailyData());
        }
        console.log(dailyData);
        fetchAPI();
    });

    const linechart = (
        dailyData[0] ?
        (
        <Line 
        data ={{
            labels : dailyData.map(({date}) =>  new Date(date).toLocaleDateString() ) ,
            datasets:[{
                date : dailyData.map(({confirmed}) => confirmed ),
                label : "infected",
                borderColor : "#3333ff" ,
                fill : true ,
                },
                {
                date : dailyData.map(({deaths}) => deaths ),
                label : "deaths",
                borderColor : "red" ,
                backgroundColor : "rgba(255 , 0 , 0 ,0.5)",
                fill : true ,
                }],
        }}
        />) : null
    );
    return(
        <div className={styles.container}>
            {linechart}
        </div>
    )
}

export default Charts;