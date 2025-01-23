import Product from "../../interfaces/product.interface";

interface ProductState {
    current_page: number;
    total_pages: number;
    page_size: number;
    total_products: number;
    products: Product[];
}
// Define the initial state
export const productInitialState: ProductState = {
    current_page: 1,
    total_pages: 0,
    page_size: 16,
    total_products: 0,
    products: [],
};

// Define the reducer
export const fetchProductReducer = (
    state: ProductState,
    action: {
        type: string;
        payload: {
            products: Product[];
            current_page: number;
            total_pages: number;
            page_size: number;
            total_products: number;
        } | null;
    }
): ProductState => {
    switch (action.type) {
        case "FETCH_INIT":
            return {
                ...state,
                current_page: 1,
                total_pages: 0,
                total_products: 0,
            };
        case "FETCH_SUCCESS":
            if (!action.payload) return { ...state };
            return {
                ...state,
                products: action.payload.products,
                current_page: action.payload.current_page,
                total_pages: action.payload.total_pages,
                page_size: action.payload.page_size,
                total_products: action.payload.total_products,
            };
        case "FETCH_FAILURE":
            return {
                ...state,
                current_page: 1,
                total_pages: 0,
                page_size: 16,
                total_products: 0,
                products: [],
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
