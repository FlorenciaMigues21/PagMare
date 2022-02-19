import React from "react";
import './Footer.css'
import {Grid,Button} from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import mapa from "../infoMare/mapa.png";

function Foooter() {
    return(
        <div className={'foot'}>
            <div className="infoFooter">
                <Grid container spacing={4} alignItems="center"
                      justifyContent="center" style={{backgroundColor:'#faf4f0 ',padding:"50px"}}>
                    <Grid className="itemGridFooter" item xs={3}>
                        <RoomIcon/>
                        <h4 className="textInfo">Av.Gorlero 838, local 06</h4>
                    </Grid>
                    <Grid className="itemGridFooter" item xs={3}>
                        <MailIcon/>
                        <h4 className="textInfo">mare.multimarca@gmail.com</h4>
                    </Grid>
                    <Grid className="itemGridFooter" item xs={3}>
                        <WhatsAppIcon/>
                        <h4 className="textInfo">12345678</h4>
                    </Grid>
                    <Grid className="itemGridFooter" item xs={3}>
                        <ul>
                            <li>
                                <InstagramIcon />
                            </li>
                            <li>
                                <Button href="https://www.instagram.com/mare.multimarca.uy/" style={{textTransform:"capitalize",fontFamily:"Open Sans, sans-serif"}}>
                                    <p className="textInfo">mare.multimarca.uy</p>
                                </Button>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Foooter;