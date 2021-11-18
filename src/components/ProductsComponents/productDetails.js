import React from "react";
import {BrowserRouter, useParams} from "react-router-dom";
import { database as db } from '../../firebase/config';
import './productDetails.css'
import ReactDOM from "react-dom";
import { getDoc, doc } from "firebase/firestore";
import {ButtonBase, Grid, Menu, TextField} from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import MenuItem from "@mui/material/MenuItem";

export const PositionedMenu = ({list, title}) =>{

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log("Entro en PosMenu")

    if (list == null){
        console.log("Colores es null")
        return <></>
    }

    let items = [];

    console.log("List: ", list)
    console.log("Largo lista", list.length)
    console.log("caca")

    for (let i=0; i<list.length; i++){
        console.log("COLOR", list[i])
        items.push(
            <MenuItem onClick={handleClose} disableRipple>
                {list[i]}
            </MenuItem>
        );
    }

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="contained"
                style={{color:"white",backgroundColor:"#3c564f",textTransform:"capitalize",fontFamily:"Open Sans, sans-serif"}}
            >
                {title}
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {
                    items
                }
            </Menu>
        </div>
    );
}


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const ProductDetails = () => {
    const idProd = useParams()
    console.log("idProd: ", idProd.id)
    let prom = getDoc(doc(db, 'Productos', idProd.id))
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    console.log("Promise: ", prom)

    prom.then(function(prod){
        if (prod.exists){
            const { Nombre, Caracteristicas, Precio, Fotos, Marca, Descripcion } = prod.data();

            const maxSteps = Fotos.length;
            ReactDOM.render(
                <div>
                    <div className="blog-details" style={{paddingTop:'80px',paddingBottom:'90px'}}>
                        <Grid container spacing={3} alignItems="center"
                              justifyContent="center">
                            <Grid item xl={2}>

                            </Grid>
                            <Grid item sm={6} lg={6} xl={4} alignItems="center"
                                  justifyContent="center" style={{textAlign:"center"}}>
                                <Box className="First" sx={{ maxWidth: 600, flexGrow: 1 }} style={{marginLeft:"50px"}}>
                                    <Paper
                                        square
                                        elevation={0}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: 50,
                                            pl: 2,
                                            bgcolor: 'background.default',
                                        }}
                                    >
                                        <Typography>{Fotos[activeStep].img}</Typography>
                                    </Paper>
                                    <AutoPlaySwipeableViews
                                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                        index={activeStep}
                                        onChangeIndex={handleStepChange}
                                        enableMouseEvents
                                    >
                                        {Fotos.map((step, index) => (
                                            <div key={step}>
                                                {Math.abs(activeStep - index) <= 2 ? (
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            display: 'block',
                                                            maxWidth: 800,
                                                            maxHeight:800,
                                                            overflow: 'hidden',
                                                            width: '100%',
                                                        }}
                                                        src={step}
                                                    />
                                                ) : null}
                                            </div>
                                        ))}
                                    </AutoPlaySwipeableViews>
                                    <MobileStepper
                                        steps={maxSteps}
                                        position="static"
                                        activeStep={activeStep}
                                        nextButton={
                                            <Button
                                                size="small"
                                                onClick={handleNext}
                                                disabled={activeStep === maxSteps - 1}
                                            >
                                                Next
                                                {theme.direction === 'rtl' ? (
                                                    <KeyboardArrowLeft />
                                                ) : (
                                                    <KeyboardArrowRight />
                                                )}
                                            </Button>
                                        }
                                        backButton={
                                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                                {theme.direction === 'rtl' ? (
                                                    <KeyboardArrowRight />
                                                ) : (
                                                    <KeyboardArrowLeft />
                                                )}
                                                Back
                                            </Button>
                                        }
                                    />
                                </Box>
                            </Grid>
                            <Grid item sm={6} lg={6} xl={4}>
                                <h3 className="principal">{Nombre}</h3>
                                <h3 className="price"> ${Precio}</h3>
                                <h3 className="brand">{Marca}</h3>
                                <ul className="listaButtons">
                                    <li>
                                        <PositionedMenu list={Colores} title={"Colores disponibles"}/>
                                    </li>
                                    <li>
                                        <PositionedMenu list={Talle} title={"Talles disponibles"}/>
                                    </li>
                                </ul>
                                <h3 className="desc" style={{textAlign:"justify"}}> {Descripcion}</h3>

                            </Grid>
                            <Grid item xl={2}>

                            </Grid>
                        </Grid>
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

