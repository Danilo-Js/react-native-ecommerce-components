import React from 'react';
import { StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';
type Language = 'en' | 'pt';
export interface Product {
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
    title?: string;
    subTitle?: string;
    language?: Language;
    styles?: {
        container?: StyleProp<ViewStyle>;
        productContainer?: StyleProp<ViewStyle>;
        productImage?: StyleProp<ImageStyle>;
        productTitle?: StyleProp<TextStyle>;
        productPrice?: StyleProp<TextStyle>;
        button?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
    };
}
declare const ProductList: React.FC<ProductListProps>;
export default ProductList;
