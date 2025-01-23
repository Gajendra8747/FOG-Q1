import React from "react";
import Product from "../../interfaces/product.interface";
import ProductCard from "./product";

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center py-6 md:py-12 gap-8">
            {products.map((p, i) => (
                <ProductCard product={p} key={i} />
            ))}
        </div>
    );
};

export default ProductList;
