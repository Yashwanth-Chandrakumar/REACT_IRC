import React, { useState } from 'react';
import '../Assests/css/Register.css'
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register(){

    let navigate=useNavigate();

    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    })

    const{username,email,password}=user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit=async (e)=>{
        e.preventDefault();

        await axios.post("http://localhost:8080/user",user)
        navigate("/");


    };
    
  return (
    <div>
      <Navbar/>
    <div className="main-container">
     
      <div className="login-container">
        <h2>Register</h2>
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
          <div className="input-group">
                     <input type={"password"} id="cpassword" name="password" placeholder="Confirm Password"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;
