import React from 'react';
import "./Css/headerSocial.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

function HeaderSocial() {
    return (
        <div className="headerSocial">
            <AiFillFacebook className="headerSocialIcons"/>
            <AiFillInstagram className="headerSocialIcons"/>
            <AiFillYoutube className="headerSocialIcons"/>
        </div>
    )
}

export default HeaderSocial
