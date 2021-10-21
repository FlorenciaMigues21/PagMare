import React from "react";
import {useData} from "../../hooks/useData";
import {Brand} from "./brand";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './brands.css'

/***
 * "Container" contiene el resultado de iterar todas las marcas y modelarlas en el componente "Brand".
 *
 * Toma la informacion de la base de datos mediante el hook "useData.js". Aca debe modelarse
 * el resultado de la iteracion, osea aca se modela como se vera en la pagina lo que sea que
 * se modele en "brand".
 *
 * Este componente es el que debe ser llamado desde donde se modele la pagina "Home".
 */

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


export const Gallery = () => {

    console.log("En gallery")

    const { docs: brands } = useData('Marcas');

    console.log("Brands:",brands);

    let items = [];

    brands.map((brand) =>
        items.push(<Brand key={brand.id} brand={brand}/>)
    )

    console.log("Items:",items);



    return (
        <AliceCarousel mouseTracking items={items} responsive={responsive}
                       controlsStrategy="alternate" />
    );
}





