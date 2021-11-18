import React from "react";
import {BrowserRouter, useParams} from "react-router-dom";
import { database as db } from '../../firebase/config';
import './productDetails.css'
import ReactDOM from "react-dom";
import { getDoc, doc } from "firebase/firestore";
import {ButtonBase, Grid, TextField} from "@material-ui/core";
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
import Menu from "@mui/material/Menu";
import {grey} from "@mui/material/colors";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


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
                    <div className="blog-details">
                        <Grid container spacing={3}>
                            <Grid item xs={6} alignItems="center"
                                  justifyContent="center">
                                <Box className="First" sx={{ maxWidth: 600, flexGrow: 1 }}>
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
                            <Grid item xs={6}>
                                <h3 className="principal">{Nombre}</h3>
                                <h3 className="price"> ${Precio}</h3>
                                <h3 className="brand">{Marca}</h3>
                                <TextField  id="outlined-basic" style={{width:"200px", marginBottom:"25px",borderColor:"Black", alignItems:"center", justifySelf:"center"}} label="Talle" variant="outlined" />
                                <TextField  id="outlined-basic" style={{width:"100px",marginLeft:"25px", marginBottom:"25px",borderColor:"Black", alignItems:"center", justifySelf:"center"}} label="Cantidad" variant="outlined" />
                                <Button style={{backgroundColor:'#abc2b8',color:'white',
                                    display:"block",
                                    width: "100%",
                                    lineHeightt: 1.4,
                                    paddingLeft: "5px",
                                    paddingRight: "5px",
                                    whiteSpace: "normal",
                                    marginTop: 0,
                                    minHeight: "44px"}}>Agregar al carro</Button>
                                <h3 className="desc"> {Descripcion}</h3>
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

