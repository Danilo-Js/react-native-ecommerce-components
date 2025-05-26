import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
type Language = 'en' | 'pt';
export interface PaymentDetails {
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    cvv: string;
    billingAddress?: string;
}
interface PaymentGatewayProps {
    onPaymentSubmit: (paymentDetails: PaymentDetails) => void;
    title?: string;
    subTitle?: string;
    language?: Language;
    styles?: {
        container?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
        input?: StyleProp<ViewStyle>;
        button?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
    };
}
declare const PaymentGateway: React.FC<PaymentGatewayProps>;
export default PaymentGateway;
