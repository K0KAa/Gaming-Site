import React from 'react'
import "./Css/home.css";
import {Link} from "react-router-dom";


function Home() {
    return (
        <div className= "home">
               <article className="text">
                    <section className="section">
                        <h3>Join our community and be the part of</h3>
                        <h3 className="official">The Maggies Official</h3>
                        <section>To know more about the community see the <Link to="/detail" className="detailLink">Details </Link></section>
                    </section>
                </article>
                <div className="buttons">
                    <button  className="btn">
                        <Link to="/register" className="btnTxt">Be A Maggy</Link>
                    </button>
                    <Link to="/login">
                    <   span className="loginTxt">already a maggy ?</span>
                    </Link>  
                </div>         
        </div>
    )
}

export default Home;
