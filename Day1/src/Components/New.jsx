import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Navbar from "./NavbarReg";

class New extends Component {

  constructor(props)
  {
    super(props);

    this.state =
    {
      name:'',
    }
  }

  reg = () => {

    const nameValue = document.getElementById("pp").value; 
    if(window.confirm("sure ?"))
    {
      if(nameValue=="pass")
        alert("password is correct");
    else
      alert("password is incorrect");
    }
    else
      alert("not confirmed");
  };

  render() {
  
    return (
      
      <div>
        <Navbar />
        <form onSubmit={this.reg} className="f1">
            <h3>REGISTRATION FORM</h3>
          <input type="text" name="name" placeholder="Enter Name" id="nn" className="nameinput"/>
         
          <input type="password" name="pass" placeholder="Enter Password" id="pp" className="passinput" />
     
          <input type="email" name="email" placeholder="Enter Email" className="emailinput" />
   
          <input type="date" name="dob" placeholder="Enter DOB" className="dob"/>
          <span>
          <input type="radio" name="gender" value="male" id="male" />
  <label for="male">Male</label>
        
  <input type="radio" name="gender" value="female" id="female" />
  <label for="female">Female</label>

          </span>
        
          <select name="Occupation">
            <option>PUBLIC</option>
            <option>PRIVATE</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        {/* <h1 id="uname">{name}</h1> */}
        <div className="next-home">
          <h1>Hello World</h1>

        </div>
      </div>
    );
  }
}

export default New;
