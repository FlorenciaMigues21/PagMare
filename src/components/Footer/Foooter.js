import React from "react";
import logoIg from './logoIg.png';
import logoMare from '../Navbar/logoMare.png'
import './Footer.css'
import {Link} from "react-router-dom";
import {Grid,Button} from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import mapa from "../infoMare/mapa.png";

function Foooter() {
    return(
            <Grid container spacing={3}
                  alignItems="center"
                  justifyContent="center" style={{backgroundColor:'#faf4f0 ',padding:"50px"}}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <ul className="listaItems">
                        <li className="firstColumn">
                            <a href={'/home'}>
                                Inicio
                            </a>
                        </li>
                        <li className="firstColumn">
                            <a href={'/#'}>
                                Nosotras
                            </a>
                        </li>
                        <li className="firstColumn">
                            <a href={'/catalog'}>
                                Tienda
                            </a>
                        </li>
                        <li className="firstColumn">
                            <a href={'/#'}>
                                Donde estamos
                            </a>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <ul className="listaItems">
                        <li className="secondColumn">
                            <RoomIcon/>
                            <h4>Av.Gorlero 838, local 06</h4>
                        </li>
                        <li className="secondColumn">
                            <MailIcon/>
                            <h4>mare.multimarca@gmail.com</h4>
                        </li>
                        <li className="secondColumn">
                            <WhatsAppIcon/>
                            <h4>12345678</h4>
                        </li>
                        <li className="secondColumn" id="ig">
                            <Button href="https://www.instagram.com/mare.multimarca.uy/" style={{textTransform:"capitalize",fontFamily:"Open Sans, sans-serif"}} startIcon={<InstagramIcon />}>
                                Instagram
                            </Button>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <a href="https://www.google.com.uy/maps/place/Juan+Gorlero+838,+20100+Punta+del+Este,+Departamento+de+Maldonado/@-34.9606913,-54.9441452,17z/data=!3m1!4b1!4m5!3m4!1s0x9575056d7eb38d2f:0x49ad62804ff6c467!8m2!3d-34.9606957!4d-54.9419565?hl=es-419"><img src={mapa} alt="mapa"/></a>
                </Grid>
            </Grid>
    )
}

export default Foooter