import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Product(props) {
    const { id } = useParams()
    return (
        <div>
            <Link to={`/product/${id}`}>
            katalog
            </Link>
        </div>
    );
}

export default Product;