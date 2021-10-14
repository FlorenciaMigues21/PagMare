import React from 'react';
import '../../App.css'
import HeroSection from "../HeroSection/HeroSection";
import Cards from '../Cards/Cards'
import {Gallery} from '../HomeBrands/indexBrandsConteiner'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Gallery />
        </>
    );
}

export default Home;