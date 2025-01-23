import { Request, Response } from "express";
import productjsondata from "../../data.json";

interface Product {
    id: number;
    brandName: string;
    productName: string;
    category: string;
    price: number;
    discountPrice: number | null;
    image: string;
    latest: boolean;
}
class ProductData {
    products: Product[];
    current_page?: number;
    page_size?: number;
    total_pages?: number;
    total_products?: number;

    constructor(data: Product[]) {
        this.products = data;
    }

    sort(by: "brand" | "price", order: "asc" | "desc" = "asc") {
        let data = [...this.products];
        if (by === "price") {
            data = data.sort((a, b) => {
                const priceA = a.discountPrice ?? a.price;
                const priceB = b.discountPrice ?? b.price;
                return order === "asc" ? priceA - priceB : priceB - priceA;
            });
        } else if (by === "brand") {
            data = data.sort((a, b) => {
                const brandA = a.brandName.toLowerCase();
                const brandB = b.brandName.toLowerCase();
                return order === "asc"
                    ? brandA.localeCompare(brandB)
                    : brandB.localeCompare(brandA);
            });
        }
        return new ProductData(data);
    }

    paginate(page: number, productsPerPage: number) {
        let data = [...this.products];
        // Pagination
        const totalProducts = data.length;
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        // Slice the products for the current page
        data = data.slice(startIndex, endIndex);

        let pd = new ProductData(data);
        pd.current_page = page;
        pd.total_pages = totalPages;
        pd.page_size = productsPerPage;
        pd.total_products = totalProducts;

        return pd;
    }

    filter(by: "brand" | "category", str: string) {
        let data = [...this.products];

        if (by === "brand") data = data.filter((p, i) => p.brandName === str);
        if (by === "category") data = data.filter((p, i) => p.category === str);

        return new ProductData(data);
    }

    filterByPrice(mn: number, mx: number) {
        let data = [...this.products];

        data = data.filter((p, i) => {
            let price = p.discountPrice ?? p.price;
            return mn <= price && price <= mx;
        });

        return new ProductData(data);
    }
}

// Mock data
const data: Product[] = Array(48)
    .fill(productjsondata)
    .flat()
    .map((p, i) => ({ ...p, id: i + 1 }));

/*
 * Query
 * - sortBy=brand | price
 * - order=asc | desc
 * - filterBrand=brandname
 * - filterCategory=categoryname
 * - minPrice=1000
 * - maxPrice=5000
 */
export const getProducts = (req: Request, res: Response) => {
    try {
        const {
            sortBy,
            order,
            filterBrand,
            filterCategory,
            minPrice,
            maxPrice,
            page = "1",
            productperpage = "16",
        } = req.query;

        // Parse query parameters
        const parsedSortBy: "brand" | "price" =
            sortBy && sortBy === "brand" ? "brand" : "price";
        const parsedOrder: "asc" | "desc" =
            order && order === "desc" ? "desc" : "asc";
        const parsedPage = parseInt(page as string, 10) || 1;
        const parsedProductsPerPage =
            parseInt(productperpage as string, 10) || 16;
        const parsedFilterBrand = filterBrand ? String(filterBrand) : undefined;
        const parsedFilterCategory = filterCategory
            ? String(filterCategory)
            : undefined;
        const parsedFilterMinPrice = minPrice
            ? parseInt(minPrice as string, 10)
            : undefined;
        const parsedFilterMaxPrice = maxPrice
            ? parseInt(maxPrice as string, 10)
            : undefined;

        // Data Object
        let productData = new ProductData(data);
        // Sort data
        if (sortBy) {
            if (order)
                productData = productData.sort(parsedSortBy, parsedOrder);
            else productData = productData.sort(parsedSortBy);
        }
        // Filter
        if (parsedFilterBrand)
            productData = productData.filter("brand", parsedFilterBrand);
        if (parsedFilterCategory)
            productData = productData.filter("category", parsedFilterCategory);
        if (parsedFilterMinPrice && parsedFilterMaxPrice)
            productData = productData.filterByPrice(
                parsedFilterMinPrice,
                parsedFilterMaxPrice
            );
        // Paginate
        productData = productData.paginate(parsedPage, parsedProductsPerPage);

        res.json(productData);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Something went wrong!",
        });
    }
};
