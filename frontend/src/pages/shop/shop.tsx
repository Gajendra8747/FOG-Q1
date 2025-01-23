import React from "react";
import HeadSection from "./head";
import WhatWeProvide from "./whatweprovide";
import ProductList from "../../components/productlisting/productlisting";

const Shop: React.FC = () => {
    return (
        <>
            <section>
                <HeadSection />
            </section>
            <section>
                <ProductList />
            </section>
            <section>
                <WhatWeProvide />
            </section>
        </>
    );
};

export default Shop;
