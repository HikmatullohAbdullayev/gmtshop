import React, { useEffect } from 'react';

function KorzinaProduct(props) {
    useEffect(() => {
        const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
        console.log(cartProducts);
    }, []);
    return (
        <div>
           {
            cartProducts.map((item) => (
                <div key={item.id} className="box">
                        <h1>{item.name}</h1>
                </div>
            ))
           }
        </div>
    );
}

export default KorzinaProduct;