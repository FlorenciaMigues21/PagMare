import React from 'react';
import '../../App.css'
import HeroSection from "../HeroSection/HeroSection";
import Cards from '../Cards/Cards'
import InfoSection from '../infoMare/infoSection'
import Direction from '../infoMare/Direction'


function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <InfoSection />
            <Direction />
        </>
    );
}

export default Home;