import React from "react";
import {useData} from "../../hooks/useData";
import {Brand} from "./brand";

/***
 * "Container" contiene el resultado de iterar todas las marcas y modelarlas en el componente "Brand".
 *
 * Toma la informacion de la base de datos mediante el hook "useData.js". Aca debe modelarse
 * el resultado de la iteracion, osea aca se modela como se vera en la pagina lo que sea que
 * se modele en "brand".
 *
 * Este componente es el que debe ser llamado desde donde se modele la pagina "Home".
 */

export const Container = () =>{
    const { docs: brands } = useData('Marcas');

    // TODO hacer que se vea bien bonito.

    return (
        <div>
            {
                brands.map((brand) =>
                    <Brand key={brand.id} brand={brand}/>
                )
            }
        </div>
    )
}