import React, { useState } from 'react';
import '../Assests/css/Register.css'
import Navbar from './Navbar';
import axios from 'axios';
import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

function EditUser(){

    let navigate=useNavigate();

    const {id}=useParams()
    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    })

    const{username,email,password}=user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        loadUser()
    },[]);
    
    const onSubmit=async (e)=>{
        e.preventDefault();
        
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/");
        
        
    };
    const loadUser = async ()=>{
        try{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        const userData = result.data;
        setUser(prevUser => ({ ...prevUser, ...userData }));
        }
        catch (error) {
            console.error('Error loading user data:', error);

        }
    }
    
  return (
    <div>
      <Navbar/>
    <div className="main-container">
     
      <div className="login-container">
        <h2>Edit User</h2>
        <form className="login-form" onSubmit={(e)=>onSubmit(e)}>
          <div className="input-group">

            <input type={"text"} id="username" name="username" placeholder="Enter Username" value={username} onChange={(e)=>onInputChange(e)} />
          </div>
          <div className="input-group">
            <input type={"email"} id="email" name="email" placeholder="Enter Email" value={email} onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className="input-group">
                     <input type={"password"} id="password" name="password" placeholder="Enter Password" value={password} onChange={(e)=>onInputChange(e)}/>
          </div>
             <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default EditUser;
