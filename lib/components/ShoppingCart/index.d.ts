import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
type Language = 'en' | 'pt';
export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}
interface ShoppingCartProps {
    items: CartItem[];
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemoveItem: (id: string) => void;
    onCheckout: (items: CartItem[], total: number) => void;
    title?: string;
    subTitle?: string;
    language?: Language;
    styles?: {
        container?: StyleProp<ViewStyle>;
        itemContainer?: StyleProp<ViewStyle>;
        itemText?: StyleProp<TextStyle>;
        button?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
        totalContainer?: StyleProp<ViewStyle>;
        totalText?: StyleProp<TextStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
        quantityContainer?: StyleProp<ViewStyle>;
        quantityButton?: StyleProp<TextStyle>;
        quantityText?: StyleProp<TextStyle>;
        removeButton?: StyleProp<TextStyle>;
    };
}
declare const ShoppingCart: React.FC<ShoppingCartProps>;
export default ShoppingCart;
