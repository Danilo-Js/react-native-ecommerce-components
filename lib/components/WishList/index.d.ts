import React from 'react';
import { StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';
type Language = 'en' | 'pt';
export interface WishlistItem {
    id: string;
    name: string;
    price: number;
    image: string;
}
interface WishlistProps {
    items: WishlistItem[];
    onRemoveItem: (id: string) => void;
    onAddToCart: (item: WishlistItem) => void;
    title?: string;
    subTitle?: string;
    language?: Language;
    styles?: {
        container?: StyleProp<ViewStyle>;
        itemContainer?: StyleProp<ViewStyle>;
        image?: StyleProp<ImageStyle>;
        itemText?: StyleProp<TextStyle>;
        priceText?: StyleProp<TextStyle>;
        buttonContainer?: StyleProp<ViewStyle>;
        button?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
    };
}
declare const Wishlist: React.FC<WishlistProps>;
export default Wishlist;
