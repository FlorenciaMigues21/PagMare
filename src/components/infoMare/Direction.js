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
                                <p>Av.Gorlero 838, local 06</p>
                            </li>
                            <li>
                                <p>De Lunes a Domingo, 10hs a 19hs</p>
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
                    <a href="https://www.google.com.uy/maps/place/Juan+Gorlero+838,+20100+Punta+del+Este,+Departamento+de+Maldonado/@-34.9606913,-54.9441452,17z/data=!3m1!4b1!4m5!3m4!1s0x9575056d7eb38d2f:0x49ad62804ff6c467!8m2!3d-34.9606957!4d-54.9419565?hl=es-419"><img src={mapa} alt="mapa"/></a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Direction