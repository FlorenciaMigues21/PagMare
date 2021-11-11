import React from "react";
import {useParams} from "react-router-dom";
import { database as db } from '../../firebase/config';

import ReactDOM from "react-dom";
import { getDoc, doc } from "firebase/firestore";
import {Grid} from "@material-ui/core";


const ProductDetails = () => {
    const idProd = useParams()
    console.log("idProd: ", idProd.id)
    let prom = getDoc(doc(db, 'Productos', idProd.id))

    prom.then(function(prod){
        if (prod.exists){
            const { Nombre, Caracteristicas, Precio, Fotos, Marca, Descripcion } = prod;
            ReactDOM.render(
                <div>
                    <div className="blog-details">
                        <Grid container spacing={2}>
                            <Grid item xs={8}>

                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                            <Grid item xs={8}>

                            </Grid>
                        </Grid>
                        <h2> Blog details - { idProd.id }</h2>
                        <p> Nombre de la marca: {Nombre}</p>
                        <p> Caracteristicas: {Caracteristicas}</p>
                        <p> Precio: {Precio}</p>
                        <p> Marca: {Marca}</p>
                        <img src={Fotos[0]}/>
                        <img src={Fotos[1]}/>
                        <p> Descripcion: {Descripcion}</p>
                    </div>
                </div>,
                document.getElementById(idProd.id)
            );
        } else {
            ReactDOM.render(
                <div>
                    <p> NO SE ENCONTRO EL PRODUCTO </p>
                </div>,
                document.getElementById(idProd.id)
            );
        }
    }).catch(function(error){
        console.log('No se puede acceder al producto', error)
    });
    return (
        <div id={idProd.id}>
        </div>
    );
}

export default ProductDetails;