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

function Foooter() {
    return(
            <Grid container spacing={3}
                  alignItems="center"
                  justifyContent="center" style={{backgroundColor:'#faf4f0 ',padding:"50px"}}>
                <Grid item xs={4}>
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
                <Grid item xs={4}>
                    <ul className="listaItems">
                        <li className="secondColumn">
                            <RoomIcon/>
                            <h4>Av.Rosales 122, 28021</h4>
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
                            <Button style={{textTransform:"capitalize",fontFamily:"Open Sans, sans-serif"}} startIcon={<InstagramIcon />}>
                                Instagram
                            </Button>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
    )
}

export default Foooter