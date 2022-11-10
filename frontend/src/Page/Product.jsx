import { Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import styles from '../styles/product.module.css'
import axios from 'axios'

const Product = () => {
    const [time,setTime] = useState("");
    const [qty,setQty] = useState("")
    const handleSubmit = async () => {
        const payload = {
            time,
            qty

        }
        // console.log(payload)
       await axios.post("http://localhost:8080/graph/add",payload)
    }
  return (
    <div className={styles.container}>
        <Text fontWeight={'bold'} fontSize="2xl">Add Number of products sold</Text>
        <br />
        <label>Time : </label>
        <Input placeholder='Enter Time (eg : 1:00 - 1:15)' width={"20%"} onChange={(e) => {setTime(e.target.value)}} />
        <br /><br />
        <label>No of Quantity sold : </label>
        <Input placeholder='Quantity sold' width={"20%"} onChange={(e) => {setQty(e.target.value)}} />
        <br /> <br />
        <Button variant={"outline"} onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default Product