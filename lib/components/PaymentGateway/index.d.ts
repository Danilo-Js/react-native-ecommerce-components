import React from 'react';
interface PaymentGatewayProps {
    onPaymentSubmit: (paymentDetails: PaymentDetails) => void;
    title: string;
    subTitle?: string;
    styles?: {
        container?: object;
        title?: object;
        subTitle?: object;
        input?: object;
        button?: object;
        buttonText?: object;
    };
}
interface PaymentDetails {
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    cvv: string;
    billingAddress?: string;
}
declare const PaymentGateway: React.FC<PaymentGatewayProps>;
export default PaymentGateway;
