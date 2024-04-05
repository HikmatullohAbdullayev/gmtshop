import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
    const { id } = useParams()
     return (
        <div>
            Tovar - {id}
        </div>
    );
}

export default ProductDetail;