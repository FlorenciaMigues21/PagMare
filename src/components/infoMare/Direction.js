import React from 'react';
import {Grid} from '@material-ui/core';
import mapa from './mapa.png'
import './Direction.css'

function Direction(){
    return (
        <div  className="Contenido">
            <Grid container direction="row"
                      justifyContent="center"
                      alignItems="center" className="col">
                <Grid item xs={12} xl={6} sm={12} md={6} className="item1" data-aos="fade-up">
                    <div className="direccion">
                        <h3>Visitanos</h3>
                        <ul className="lista">
                            <li>
                                <i className="fa fa-map-marker" aria-hidden="true">
                                </i>
                                <p>Av.Rosales 122, 28021</p>
                            </li>
                        </ul>

                    </div>
                    <div className="contacto">
                        <h3>Contáctanos</h3>
                        <ul className="lista">
                            <li>
                                <i className="fa fa-instagram" aria-hidden="true"> </i>
                                <p>mare.multimarca.uy</p>
                            </li>
                            <li>
                                <i className="fa fa-envelope" aria-hidden="true"> </i>
                                <p>mare.multimarca@gmail.com</p>
                            </li>
                            <li>
                                <i className="fa fa-phone" aria-hidden="true"> </i>
                                <p>Tel:1234567</p>8
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} xl={6} sm={12} md={6} className="item2">
                    <a href="https://goo.gl/maps/6wTXLbBCk6BfznQw7"><img src={mapa} alt="mapa"/></a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Direction