import React from 'react';
import '../../App.css'
import HeroSection from "../HeroSection/HeroSection";
import Cards from '../Cards/Cards'
import InfoSection from '../infoMare/infoSection'
import Direction from '../infoMare/Direction'
import {Gallery} from '../HomeBrands/indexBrandsConteiner'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Gallery />
            <InfoSection path='/info' exact component={InfoSection} style="padding-top: 80px;"/>
            <Direction />
        </>
    );
}

export default Home;