import React from 'react';
import {Grid} from '@material-ui/core';
import './infoSection.css'
import Clothes from './photo-1512436991641-6745cdb1723f.jpg'
import 'animate.css';


function InfoSection(){
    return (
        <div className="Info" id="info">
            <div className="infoInicial">
            <h2 data-aos="fade-up">NOSOTRAS</h2>
                <Grid container
                      direction="row"
                      justifyContent="center"
                      alignItems="center" className="col">

                    <Grid item xs={12} xl={6} sm={12} md={6} className="item1">
                        <p>
                            MARÉ es una tienda multimarca en donde pueden encontrar variedad de productos de marcas
                            uruguayas.
                            Nuestro objetivo como multimarca es impulsar el diseño y la mano de obra local. Por esto decidimos crear un espacio en donde marcas/emprendimientos puedan exponer sus productos y lograr
                            de esta manera un crecimiento.
                        </p>
                    </Grid>
                    <Grid item xs={12} xl={6} sm={12} md={6}   className="item2">
                        <img className="imagen" src={Clothes} alt="ropa"/>
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={3} className="col" data-aos="fade-up">
                <Grid item xs={12} xl={4} sm={12} md={4}>
                    <div className="columnas">
                        <h2>Objetivo</h2>
                        <p>Nuestro objetivo como multimarca es impulsar el diseño y la mano de obra local.
                            Impulsar el valor y crecimiento de la misma.</p>
                    </div>
                </Grid>
                <Grid item xs={12} xl={4} sm={12} md={4}>
                    <div className="columnas">
                        <h2>Visión</h2>
                        <p>
                            Ser una empresa líder e impulsar a marcas locales. Nos inspira ser el medio por el que diferentes marcas de diseño Uruguayo logren cumplir sus objetivos.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} xl={4} sm={12} md={4}>
                    <div className="columnas">
                        <h2>Misión</h2>
                        <p>
                            Brindarle al consumidor una experiencia de consumo innovadora,  al tener acceso a variedad de marcas locales con mano de obra uruguaya concientizando así la importancia de la misma.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default InfoSection