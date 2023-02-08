import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CartWidget = ({cantCarrito}) => {
    return (
        <>
        <p>{cantCarrito}</p>
        <FaCartPlus size={'40px'} color={'white'}/>
        </>
    );
}

export default CartWidget;
