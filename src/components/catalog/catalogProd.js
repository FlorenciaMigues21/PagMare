import React from "react";
import { Product } from './product'
import './catalogProd.css'
import { useData } from "../../hooks/useData";
import { Grid } from "@mui/material";
import { ButtonAppBar } from '../catalog/navbarCat'
import "@progress/kendo-theme-default/dist/all.css";
import * as ReactDOM from "react-dom";

let items = null

const CatalogProd = ({ cat }) => {

    const { docs: prods } = useData('Productos');

    items = []
    let filter = {}

    let newItems = []
    if (cat == null){
        newItems = items;
    } else {
        for (let i=0; i<items.length; i++){
            if (items[i].props.children.props.prod.Caracteristicas === cat){
                newItems.push(items[i]);
            }
        }
    }

    prods.map((prod) =>
        items.push(
            <Grid key={prod.id} item xs={12} sm={6} md={4} lg={4}>
                <Product key={prod.id} prod={prod}/>
            </Grid>
        )
    )

    if (items.length > 0){
        for (let i=0; i<items.length; i++) {
            if (filter[items[i].props.children.props.prod.Caracteristicas] == null) {
                filter[items[i].props.children.props.prod.Caracteristicas] = [i];
            } else {
                filter[items[i].props.children.props.prod.Caracteristicas].push(i);
            }
        }
        ReactDOM.render(
            <div>
                <ButtonAppBar list={filter}/>
            </div>,
            document.getElementById('filters')
        );
    }

    return(
        <div id="page">
            <div id='filters'>
            </div>
            <div className="catalogRow">
                <Grid className="productsCol" container justify="center" spacing={4}>
                    {
                        newItems
                    }
                </Grid>
            </div>
        </div>
    )
}

export default CatalogProd;