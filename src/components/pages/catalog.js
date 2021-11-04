import React from 'react';
import '../../App.css'
import CatalogProd from '../catalog/catalogProd'
import { RecipeDropDownList } from '../catalog/navbarProducts'
import "@progress/kendo-theme-default/dist/all.css";

function Catalog() {
    return (
        <>
            <RecipeDropDownList />
            <CatalogProd/>
        </>
    );
}

export default Catalog;