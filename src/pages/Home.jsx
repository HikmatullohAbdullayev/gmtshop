import React from 'react';
import ProductCaruselSection from './sections/ProductCaruselSection';
import ProductComp from '../components/ProductComp';
// import Why from '../components/Why';

function Home(props) {
    return (
        <div>
            <ProductComp/>
            <ProductCaruselSection/>
            
        </div>
    );
}

export default Home;