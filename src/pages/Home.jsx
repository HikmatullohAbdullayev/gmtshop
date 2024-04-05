import React from 'react';
import ProductCaruselSection from './sections/ProductCaruselSection';
import HeroCarusel from '../components/HeroCarusel';

function Home(props) {
    return (
        <div>
            <HeroCarusel/>
            <ProductCaruselSection/>
        </div>
    );
}

export default Home;