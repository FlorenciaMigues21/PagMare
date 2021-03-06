import React from 'react';
import '../../App.css'
import "@progress/kendo-theme-default/dist/all.css";
import {useData} from "../../hooks/useData";
import EditIcon from '@mui/icons-material/Edit';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { grey } from '@mui/material/colors';
import '../catalog/navbarCatCSS.css'
import {Product} from "../catalog/product";
import {Grid as muGrid} from "@mui/material";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Divider from "@mui/material/Divider";

let items = null
let prods = null
let filter = null

function Catalog() {

    const { docs: prod } = useData('Productos')
    prods = prod

    filter = {}

    if (prods.length > 0){
        items = renderCatalog(prods, null);

        for (let i=0; i<prods.length; i++){
            if (filter[prods[i].Caracteristicas] == null){
                filter[prods[i].Caracteristicas] = [i];
            } else {
                filter[prods[i].Caracteristicas].push(i)
            }
        }
    }

    return (
        <>
            <div id='filter-cont'>
                <ButtonAppBar list={filter}/>
            </div>
            <div id='catalog-cont' className='catalogRow'>
                <muGrid id='prod-cont' className="productsCol" container justify="center" spacing={4}>
                    {
                        items
                    }
                </muGrid>
            </div>
        </>
    );
}

function renderCatalog(prods, cat){

    items = []
    if (cat == null){
        prods.map((prod) =>
            items.push(
                <muGrid key={prod.id} item xs={12} sm={6} md={4} lg={4} alignItems="center"
                      justifyContent="center">
                    <Product key={prod.id} prod={prod}/>
                </muGrid>
            )
        )
    } else {
        prods.map((prod) => {
            if (prod.Caracteristicas === cat) {
                items.push(
                    <div className={'prod'}>
                        <muGrid key={prod.id} item xs={12} sm={6} md={4} lg={4}>
                            <Product key={prod.id} prod={prod}/>
                        </muGrid>
                    </div>
                )
            }
        });
    }
    return(items);
}

export default withRouter(Catalog);

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
        borderRadius: 6,
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
                display:"none",
            },
            '&:active': {
                backgroundColor: grey[50],
            },
        },
    },
}));

const ButtonAppBar = ({list}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNormalClose = (event) => {
        setAnchorEl(null);
    }

    const handleClose = (event) => {
        setAnchorEl(null);
        let value = event.currentTarget.innerText
        if (value === 'Seleccionar todo')(value=null);
        items = renderCatalog(prods, value)
        ReactDOM.render(
            <BrowserRouter>
                <muGrid id='prod-cont' className="productsCol" container justify="center" spacing={4}>
                    {items}
                </muGrid>
            </BrowserRouter>,
            document.getElementById('catalog-cont')
        );
    };

    let filt = []

    filt.push(
        <MenuItem onClick={handleClose} disableRipple style={{display:"none"}}>
            Seleccionar todo
        </MenuItem>
    )
    for (const [key] of Object.entries(list)) {
        filt.push(
            <MenuItem onClick={handleClose} disableRipple>
                {key}
            </MenuItem>
        )
    }


    return (
        <Box sx={{ flexGrow: 1,boxShadow: "none",paddingTop:'100px'}}>
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
                        onClose={handleNormalClose}
                    >
                        {filt}
                    </StyledMenu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}