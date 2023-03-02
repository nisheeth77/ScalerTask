import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Interviewee_details = () => {
 const path = useLocation()
 
  const interviewee_id = path.pathname.split("/")[2]
  console.log(interviewee_id)

    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
          try {
            const getDetails = await axios.get("http://localhost:3000/interview/"+interviewee_id)
          console.log(getDetails)
            console.log("hello")
            
          } catch (err) {
            console.log(err)
          }
        };
        fetchDetails();
      }, [])
      return (

    <div>Interviewee_details</div>
  )
}

export default Interviewee_details