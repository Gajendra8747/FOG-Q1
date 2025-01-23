import FilterHeader from "./filterheader";
import ProductList from "./productlist";
import Pagination from "./pagination";
import { useEffect, useReducer, useState } from "react";
import { fetchProductReducer, productInitialState } from "./product.state";
import config from "../../../config.json";

const ProductListing = () => {
    const [productData, dispatch] = useReducer(
        fetchProductReducer,
        productInitialState
    );
    const [currentpage, setCurrentPage] = useState(1);
    const [productperpage, setProductPerPage] = useState(16);
    const [sortby, setSortBy] = useState<"price" | "brand" | "default">(
        "default"
    );

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        const fetchData = async () => {
            dispatch({ type: "FETCH_INIT", payload: null });
            try {
                let url = `${config.backend}/api/products?page=${currentpage}&productperpage=${productperpage}`;
                if (sortby != "default") {
                    url += `&sortBy=${sortby}`;
                }
                const response = await fetch(url); // Replace with your API
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();

                dispatch({ type: "FETCH_SUCCESS", payload: result });
            } catch (error) {
                console.log(error);
                dispatch({ type: "FETCH_FAILURE", payload: null });
            }
        };
        fetchData();
    }, [currentpage, productperpage, sortby]);

    return (
        <>
            <FilterHeader
                productperpage={productperpage}
                setProductPerPage={setProductPerPage}
                setCurrentPage={setCurrentPage}
                setSortBy={setSortBy}
                total_products={productData.total_products}
                current_page={productData.current_page}
            />
            <ProductList products={productData.products} />
            <Pagination
                currentpage={currentpage}
                setCurrentPage={setCurrentPage}
                totalpages={productData.total_pages}
            />
        </>
    );
};

export default ProductListing;
