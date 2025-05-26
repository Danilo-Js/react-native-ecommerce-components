import React from 'react';
import { StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';
type Language = 'en' | 'pt';
export interface Product {
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
    title?: string;
    subTitle?: string;
    language?: Language;
    styles?: {
        container?: StyleProp<ViewStyle>;
        image?: StyleProp<ImageStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
        productTitle?: StyleProp<TextStyle>;
        price?: StyleProp<TextStyle>;
        rating?: StyleProp<TextStyle>;
        description?: StyleProp<TextStyle>;
        buttonContainer?: StyleProp<ViewStyle>;
        button?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
    };
}
declare const ProductDetail: React.FC<ProductDetailProps>;
export default ProductDetail;
