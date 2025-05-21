import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
type Language = 'en' | 'pt';
interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}
interface OrderSummaryProps {
    items: OrderItem[];
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
    onCheckout: () => void;
    title?: string;
    subTitle?: string;
    language?: Language;
    styles?: {
        container?: StyleProp<ViewStyle>;
        itemContainer?: StyleProp<ViewStyle>;
        itemText?: StyleProp<TextStyle>;
        summaryContainer?: StyleProp<ViewStyle>;
        summaryText?: StyleProp<TextStyle>;
        totalText?: StyleProp<TextStyle>;
        button?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
    };
}
declare const OrderSummary: React.FC<OrderSummaryProps>;
export default OrderSummary;
