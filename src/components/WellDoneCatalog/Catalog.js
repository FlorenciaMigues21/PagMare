import React, { useState } from 'react';
import {useData} from "../../hooks/useData";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import { grey } from "@mui/material/colors";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import './FilterDropMenu.css'
import * as ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import { Grid} from "@mui/material";
import {ProductCard} from "./ProductCard";
import "@progress/kendo-theme-default/dist/all.css";



export function Catalog(){

    const { docs: prods } = useData('Productos');
    const [ filter, setFilter ] = useState(null)
    const [ setup, setSetup ] = useState(false)

    const temp = {}

    if (prods.length > 0 && !setup){
        for (let i=0; i<prods.length; i++){
            if (temp[prods[i].Caracteristicas] == null){
                temp[prods[i].Caracteristicas] = [i];
            } else {
                temp[prods[i].Caracteristicas].push(i)
            }
        }
        ReactDOM.render(
            <ButtonAppBar list={temp} prods={prods}/>,
            document.getElementById('filter-container')
        );

        console.log('Temp: ', temp)

        setFilter(temp)

        console.log('Filter: ', filter)
        setSetup(true)
    }


    return (
         <div id={'big-container'}>
            <div id={'filter-container'}>

            </div>

        </div>
    )

}




/**
 *      NAVBAR DE FILTROS
 */

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {

        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: grey[50],
            },
        },
    },
}));
const ButtonAppBar = ({ list, prods }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFilteredClose = (event) => {
        setAnchorEl(null);
        let value = event.currentTarget.innerText;

        if (value == 'Seleccionar todo'){
            let products = [];
            prods.map((item) => {
                products.push(
                    <Grid key={item.id} item xs={12} sm={6} md={4} lg={4} alignItems="center"
                          justifyContent="center">
                        <ProductCard key={item.id} prod={item}/>
                    </Grid>
                )
            })
            setCards(products)
        } else {
            let products = []
            prods.map((item) => {
                if (item.Caracteristicas == value){
                    products.push(
                        <Grid key={item.id} item xs={12} sm={6} md={4} lg={4} alignItems="center"
                              justifyContent="center">
                            <ProductCard key={item.id} prod={item}/>
                        </Grid>
                    )
                }
            })
            setCards(products);
        }


    }

    let items = []

    items.push(
        <MenuItem key={'Seleccionar todo'} onClick={handleFilteredClose} disableRipple>
            Seleccionar todo
        </MenuItem>
    )

    for (const [key] of Object.entries(list)) {
        items.push(
            <MenuItem key={key} onClick={handleFilteredClose} disableRipple>
                {key}
            </MenuItem>
        )
    }

    let products = [];
    prods.map((item) => {
        products.push(
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={4} alignItems="center"
                  justifyContent="center">
                <ProductCard key={item.id} prod={item}/>
            </Grid>
        )
    })

    const [cards, setCards ] = useState(products)

    return (
        <div>
            <Box sx={{ flexGrow: 1,boxShadow: "none" }}>
                <AppBar position="static" elevation={0} style={{background: 'white'}}>
                    <Toolbar>
                        <Button
                            id="demo-customized-button"
                            aria-controls="demo-customized-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon/>}>
                            Filters
                        </Button>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            {
                                items
                            }
                        </StyledMenu>
                    </Toolbar>
                </AppBar>
            </Box>
            <div id='catalog-cont' className='catalogRow'>
                <Grid id='prod-cont' className="productsCol" container justify="center" spacing={4}>
                    {
                        cards
                    }
                </Grid>
            </div>
        </div>
    );
}
