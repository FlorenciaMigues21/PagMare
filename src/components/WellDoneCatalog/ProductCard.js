import React from "react";
import './ProductCard.css';

export const ProductCard = ({ prod }) => {

    const { id, Nombre, Precio, Fotos, Marca } = prod;

    return (
        <div className="product">
            <div className="productBrand">
                <h4>{Marca}</h4>
            </div>
            <div className="imagen">
                <a href={`/product/${id}`}>
                    <img src={ Fotos[0] } alt={id}/>
                </a>
            </div>
            <div className="productInfo">
                <h1>{Nombre}</h1>
            </div>
            <div className="productPrice">
                <small>$</small>
                <strong>{Precio}</strong>
            </div>
        </div>
    )

}