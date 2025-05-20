import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
type Language = 'en' | 'pt';
interface OrderConfirmationProps {
    orderId: string;
    orderDate: string;
    totalAmount: number;
    paymentMethod: string;
    shippingAddress: string;
    onContinueShopping: () => void;
    onViewOrderDetails: () => void;
    title?: string;
    subTitle?: string;
    language?: Language;
    styles?: {
        container?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
        orderInfo?: StyleProp<ViewStyle>;
        orderInfoText?: StyleProp<TextStyle>;
        buttonContainer?: StyleProp<ViewStyle>;
        button?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
    };
}
declare const OrderConfirmation: React.FC<OrderConfirmationProps>;
export default OrderConfirmation;
