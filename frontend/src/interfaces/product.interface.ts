export default interface Product {
    id: number;
    brandName: string;
    productName: string;
    category: string;
    price: number;
    discountPrice: number | null;
    image: string;
    latest: boolean;
}
