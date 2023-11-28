import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const{_id} = useParams()
    const [product, setProduct] =useState({})

   useEffect(() => {
        const products = localStorage.getItem('product')
        setProduct(JSON.parse(products))
      }, [])
    return (
        <div>
            <h1>{_id}</h1>
            <h1>{product.name}</h1>
        </div>
    );
};

export default Details;