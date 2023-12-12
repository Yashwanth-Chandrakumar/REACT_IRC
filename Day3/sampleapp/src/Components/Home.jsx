import '../Assests/css/Home.css'
import Navbar from './Navbar';
import { useEffect,useState } from 'react';
function Home()
{
    const [localStorageItem, setLocalStorageItem] = useState('');
    const [showAnimation, setShowAnimation] = useState(false);
  
  useEffect(() => {
    
    const itemFromLocalStorage = localStorage.getItem('username');

    if (itemFromLocalStorage) {
      setLocalStorageItem(itemFromLocalStorage);
      setShowAnimation(true); // Trigger animation when username is present
      setTimeout(() => {
        setShowAnimation(false); // Turn off animation after 2 seconds
      }, 2000);
    }
  }, []);

    return(
        <div>
            <Navbar/>
            <div className="main-container" style={{ backgroundColor: 'white' }}>
                <div className={showAnimation ? 'success-animation' : ''}>
                <h1>LOGIN SUCCESSFUL</h1>

                </div>
                <div>
                   <h1>
                    {localStorageItem}
                    </h1> 
                </div>
                

        </div>
            
        </div>
    )
}

export default Home;