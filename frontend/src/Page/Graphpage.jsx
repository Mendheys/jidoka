import React from "react";
import { Chart } from "react-google-charts";
import styles from "../styles/graph.module.css";
import { Text } from "@chakra-ui/react";
import Drawer from "../components/Drawer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Graphpage = () => {

    const [data,setData] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8080/graph/fetch").then((res) => setData(res.data))
        

    },[])
    

    const passingData = [["Time", "No of Products sold"]]
    const time = data.map((e) => {
        console.log(e)
        const arr = []
        arr.push(e.time,e.qty)
        passingData.push(arr)
    })

    console.log(passingData)

    
    
//   const data = [
//     ["Time", "No of Products sold"],
//     ["1:00-1:15", 300],
//     ["1:15-1:30", 100],
//     ["1:30-1:45", 50],
//     ["1:00-1:15", 80],
//   ];
  // [["Age", "Weight"], [4, 5.5], [8, 12]]
  return (
    <>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        BAR GRAPH
      </Text>
      <div className={styles.graph}>
        <Chart
          chartType="Bar"
          data={passingData}
          width="60%"
          height="500px"
          legendToggle
        />
      </div>
    </>
  );
};

export default Graphpage;
