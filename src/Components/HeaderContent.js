import React from 'react'
import HeaderSocial from "./HeaderSocial";
import HeaderLinks from "./HeaderLinks";

function HeaderContent() {
    return (
        <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <HeaderSocial />
            <HeaderLinks />
        </div>
    )
}

export default HeaderContent
