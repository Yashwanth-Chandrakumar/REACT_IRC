import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Login extends Component {

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
         
        <form onSubmit={this.reg} className="f1">
            <h3>REGISTRATION FORM NEW</h3>
          <input type="text" name="name" placeholder="Enter Name" id="nn" className="nameinput"/>
         
          <input type="password" name="pass" placeholder="Enter Password" id="pp" className="passinput" />
     
          <input type="submit" value="Submit" />
        </form>
        
      </div>
    );
  }
}

export default Login;
