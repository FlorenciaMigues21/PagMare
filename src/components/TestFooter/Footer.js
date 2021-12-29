import React from "react";
import './Footer.css'
import { Button } from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Footer() {
    return(
        <div className="flexbox" style={{backgroundColor:'#faf4f0 ',padding:"50px"}}>
            <div className="secondColumn">
                <RoomIcon/>
                <h4>Av.Gorlero 838, local 06</h4>
            </div>
            <div className="secondColumn">
                <MailIcon/>
                <h4>mare.multimarca@gmail.com</h4>
            </div>
            <div className="secondColumn">
                <WhatsAppIcon/>
                <h4>12345678</h4>
            </div>
            <div className="secondColumn" id="ig">
                <Button href="https://www.instagram.com/mare.multimarca.uy/" style={{textTransform:"capitalize",fontFamily:"Open Sans, sans-serif"}} startIcon={<InstagramIcon />}>
                    <p>mare.multimarca.uy</p>
                </Button>
            </div>
        </div>
    )
}
