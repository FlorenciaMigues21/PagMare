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
                <Grid item xs={12} xl={6} sm={12} md={6} className="item1">
                    <h3>Visitanos</h3>
                    <p>
                        Av.Rosales 122, 28021
                    </p>
                    <h3>Contáctanos</h3>
                    <p>
                        Mail: mare.multimarca@gmail.com
                    </p>
                    <p>
                        Instagram: mare.multimarca.uy
                    </p>
                    <p>
                        Tel:12345678
                    </p>
                </Grid>
                <Grid item xs={12} xl={6} sm={12} md={6} className="item2">
                    <a href="https://goo.gl/maps/6wTXLbBCk6BfznQw7"><img src={mapa} alt="mapa"/></a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Direction