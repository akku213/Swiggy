import { useState } from 'react';
// import Logo from '../../images/logo.png';
import resList from '../utils/mockData';
import RestaurantCard from "./RestaurantCard";
import { APPLOGO, APPLogo } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    let [btnNameReact, setbtnNameReact] = useState("Login");
    const handleSearch = () => {
      onSearch(searchText);
    };

    
    return (
        <div className='header'>
          {<div className='logo-container'>
           <img alt='logo' className='logo' 
           src={APPLOGO}
           />
           </div>}
          <div className='search-container'>
            <input
              type="text"
              className='input-text'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className='search-btn' onClick={handleSearch}>
              
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" fill="#6C6E75" ></path>
                </svg>
            </button>
                

            </div>
            <div className='nav-items'>
                <ul>
                    <li>{onlineStatus ? "Online:🟢" : "Offline:🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/help" >Help</Link></li>
                    <li>Cart</li>
                    <button className='login' 
                    onClick={()=>{ 
                        btnNameReact === "Login"?
                        setbtnNameReact("Logout"):
                        setbtnNameReact("Login");
                        console.log(btnNameReact);
                    }}
                    >
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
   )
};

export default Header;