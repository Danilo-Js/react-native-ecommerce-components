import React from 'react';
interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    rating?: number;
}
interface ProductDetailProps {
    product: Product;
    onAddToCart: (product: Product) => void;
    onBuyNow: (product: Product) => void;
    title: string;
    subTitle?: string;
    styles?: {
        container?: object;
        image?: object;
        title?: object;
        subTitle?: object;
        description?: object;
        price?: object;
        rating?: object;
        buttonContainer?: object;
        button?: object;
        buttonText?: object;
    };
}
declare const ProductDetail: React.FC<ProductDetailProps>;
export default ProductDetail;
