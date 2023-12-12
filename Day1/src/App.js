// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


import New from './Components/New';
import Login from './Components/Login';
import Navbar from './Components/NavbarReg';
function Heading()
{
  let title ="MY HEADING";
    return(
      <div>
      <h1>{title}</h1>
      <h1>Hello</h1>
      </div>
    );
}
function App() {
  
   return(
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<New />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/New" element={<New />}/>

        </Routes>
      </Router>
    
    </div>
        
   )
}


export default App;
