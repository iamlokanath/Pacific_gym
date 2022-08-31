import React from 'react'
import humanimg from "../img/humanimg.png";
import "./Dashboard.css"

import { useAppContext } from '../lib/contextLib';

const Dashboard = () => {
  const {data} = useAppContext();
  return (
    <>
     <div className="dashboard-up-form">
       <img src={humanimg} alt=''></img>
        
    
            <div className='container'>
                
            <h3>{data[0]?data[0].firstName + data[0].lastName:"Lokanath Panda"}</h3>
                
                <br />
                
                <h3>{data[0]?data[0].email:"lokanathpanda@123.gmail.com"}</h3>
              
                <br />
                
                <h3>{data[0]?data[0].phone:"8144496407"}</h3>
            </div>
    
    </div>
    </>
  )
}

export default Dashboard