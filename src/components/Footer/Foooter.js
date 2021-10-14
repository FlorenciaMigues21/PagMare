import React from "react";
import logoIg from './logoIg.png';
import logoMare from '../Navbar/logoMare.png'
import './Footer.css'
import {Link} from "react-router-dom";


function Foooter() {
    return(
        <div className="footer-container">
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/sign-up'>Inicio</Link>
                        <Link to='/'>Nosotras</Link>
                        <Link to='/'>Tienda</Link>
                        <Link to='/'>Donde estamos</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Av.Rosales 122, 28021</h2>
                        <h2>Mail: mare.multimarca@gmail.com</h2>
                        <h2>Tel:12345678</h2>
                        <img src={logoIg} width="25,6" height="25,6" alt=""/>
                        <h6>mare.multimarca.uy</h6>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foooter