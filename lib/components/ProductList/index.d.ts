import React from 'react';
interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    rating?: number;
}
interface ProductListProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
    onProductPress: (product: Product) => void;
    gridView?: boolean;
    title: string;
    subTitle?: string;
    styles?: {
        container?: object;
        productContainer?: object;
        productImage?: object;
        productTitle?: object;
        productPrice?: object;
        button?: object;
        buttonText?: object;
        title?: object;
        subTitle?: object;
    };
}
declare const ProductList: React.FC<ProductListProps>;
export default ProductList;
