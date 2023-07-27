import { useEffect } from "react";
import Product from "./Product";
import fetchProduct from "../utils/fetchProduct";
import { useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect( () => {
        fetchProduct()
        .then( (data) => setProducts(data) )
        .catch((eror) => console.log(eror))
    },[]);
    
    // decide what to Render
    let output;
    if(error){
        output = <div>There was an error</div>
    }
    else if(products?.length > 0){
        output = products.map((product) => <Product key={product.id}></Product>)
    }
    else{
        <div>NO Product Found</div>
    }
    return (
        <div className="container z-10 mx-auto my-12 p-9">
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {output}
            </div>
        </div>
    );
};
export default ProductList;