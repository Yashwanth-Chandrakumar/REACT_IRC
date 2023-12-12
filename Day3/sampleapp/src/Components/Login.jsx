import React ,{useState}from 'react';
import '../Assests/css/Login.css'
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(){
  const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
      e.preventDefault();
  
      try {
          
          const response = await axios.get('http://localhost:8080/users');
  
      
          const foundUser = response.data.find(
              (userData) =>
                  userData.username === user.username && userData.password === user.password
                  
          );
  
          if (foundUser) {

            localStorage.setItem('username', user.username);
            
              navigate('/Home');

          } else {

              alert('Invalid credentials')
          }
      } catch (error) {
          console.error('Error during login:', error);
      }
  };
  
  return (
    <div>
      <Navbar/>
    <div className="main-container">
     
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={(e)=>onSubmit(e)}>
          <div className="input-group">

            <input type="text"
             id="username" 
             name="username"
            placeholder='Enter Username'
             value={username}
            onChange={onInputChange}/>
          </div>
          <div className="input-group">

            <input type="password"
             id="password" 
             name="password"
              placeholder='Enter Password'
              value={password}
              onChange={onInputChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
