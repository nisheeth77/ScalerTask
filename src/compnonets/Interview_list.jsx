import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Interview_list.css";
import { Link } from 'react-router-dom';



const Interview_list = () => {

  const [details, setDetails] = useState([])

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const getDetails = await axios.get("http://localhost:3000/interview")
        setDetails(getDetails.data)
        console.log(details.email)
      } catch (err) {
        console.log(err)
      }
    };
    fetchDetails();
  }, [])

  const handleDelete = async (id) =>
  {
    try{
      await axios.delete("http://localhost:3000/interview/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
    console.log(id)
  }
  return (
    <div>
      <Link to="/details"></Link>
      <div className="header">
        <h1 class="main_heading"> Interview Creation Portal</h1>
      </div>
      <div className="Main_container">
      {details.map((detail) => (
        <div key={detail.id} >

          <div className="Interview_list_container">
            <h2>Interviewee Details</h2>
            <div className='details_container'>


              <h4 className='details'>
                Name - {detail.name}
              </h4>
              <h4 className='details'>
                Email - {detail.email}
              </h4 >
              <h4 className='details'>
                Date - {detail.date}
              </h4>
              <div className='time'>
                <h6>Start time - {detail.st}</h6>
                <h6>End time - {detail.et}</h6>
              </div>



            </div>
            <div className='btn-update_delete'>
              <button  style={{ color: 'white' }}><Link to={`/update/${detail.id}`}>Update</Link></button>
              <button onClick={()=>{handleDelete(detail.id)}}>Delete </button>
              <button  ><Link to ={`{/details/${detail.id}`} >Details </Link></button>
            </div>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  )
}
export default Interview_list;