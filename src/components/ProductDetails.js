//import { useState, useEffect } from 'react';

const ProductDetails = ({ location }) => {
    const params = location.params;

    console.log("params", params);

    // useEffect(() => {
    //     console.log("productInfo: ", productInfo);
    //     setProductInfo(params);
    //     console.log("productInfo: ", productInfo);
    // });



    return (
        <div>
            <h1>Product details</h1>
        </div>
    )
}



export default ProductDetails
