import React from 'react'
import './HeroSection.css'
import {Button} from '../Buttons/Button'

function HeroSection() {
    return (
        <div  className="hero-container" id="mare">
            <div className="hero-content">
                <h2 className="portada" data-aos="fade-up">¡GRAN APERTURA!</h2>
                <div className="hero-btns">
                    <Button href="/tienda" className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                        Ver catálogo
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
