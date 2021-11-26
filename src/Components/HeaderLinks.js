import React from 'react'
import "./Css/headerLinks.css"
// import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import {Link } from "react-router-dom"


const HeaderLinks = () => {
    const user = false
    return (
        <div className="topbar">
     
            <div className="top-center">
                <ul className="toplist">
                    <li  className="toplist-item">
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li  className="toplist-item">
                        <Link to="/livechannel " className="link" >Live Channel</Link>
                    </li>
                    <li  className="toplist-item">
                        <Link to="/socialmedia" className="link">Social Media</Link> 
                    </li>
                    <li  className="toplist-item">
                        <Link to="/sponsers" className="link">Sponsers</Link>
                    </li>
                    <li  className="toplist-item">
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                    
                    <li  className="toplist-item">
                        {user&&"Logout"}
                    </li>          
                 </ul>
            </div>
            
        </div>
    )
}


export default HeaderLinks
