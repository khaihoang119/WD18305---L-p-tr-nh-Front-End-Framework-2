import React, { useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';

const ProductDetail = () => {
    //querry params
    const searchParams = useSearchParams();
    //path params
    const params = useParams();

    useEffect(() => {
        console.log("querry params", searchParams.get("id"));
        console.log("path params", params);
    }, []);

    return (
        <div>
            <h1 className="text-success">Product Detail</h1>
        </div>
    );
};

export default ProductDetail;