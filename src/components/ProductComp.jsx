
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Fragment } from 'react';
import ProductData from "../constants/productData.json";
import 'react-lazy-load-image-component/src/effects/blur.css';
import HeadingThere from '../typography/HeadingThere';
import TextOne from '../typography/TextOne';
import TextTwo from '../typography/TextTwo';
import Button from '../components/Button';
import Breadcrumb from '../components/Breadcrumb';
import ProductR from '../components/ProductR';

function Product(props) {
    const { id } = useParams();
    const [modalOpen, setIsModalOpen] = useState(false);
    const [itemIdClik, setItemIdClik] = useState(null);

    const openModal = (itemId) => {
      setItemIdClik(itemId); // Modal ichidagi item idsi
        setIsModalOpen(true); // Modal ochish
    };

    const closeModal = () => {
      setItemIdClik(null); // Modal ochishidan keyin item id ni tozalash
        setIsModalOpen(false); // Modal yopish
    };
    
    return (
        <div>
            <div className="box">
              <Breadcrumb/>
                <div className="grid grid-cols-3  p-2 gap-5">
                    {ProductData.map((item) => (
                        <Fragment key={item.id}>
                            <div className="link">
                                <Link to={`/product/${item.id}`}>
                                    <div className="border border-secondary2 rounded-lg">
                                        <div className="object-cover">
                                            <img className='w-full object-cover rounded-lg h-[300px]' src={item.image} alt="img" />
                                        </div>
                                        <div className="flex flex-col gap-4 p-4">
                                            <HeadingThere>{item.name}</HeadingThere>
                                            <TextTwo>{item.description}</TextTwo>
                                            <TextOne>{item.price}$</TextOne>
                                        </div>
                                    </div>
                                </Link>
                                <div className="w-full my-2 text-center">
                                    <Button primary={true} onClick={() => openModal(item.id)}>Быстрый просмотр</Button>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
            {modalOpen && (
              <ProductR itemIdClik={itemIdClik} closeModal={closeModal}/>
               
            )}
        </div>
    );
}

export default Product;
