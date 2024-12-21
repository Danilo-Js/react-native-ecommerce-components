import React from 'react';
interface OrderConfirmationProps {
    orderId: string;
    orderDate: string;
    totalAmount: number;
    paymentMethod: string;
    shippingAddress: string;
    onContinueShopping: () => void;
    onViewOrderDetails: () => void;
    title: string;
    subTitle?: string;
    styles?: {
        container?: object;
        title?: object;
        subTitle?: object;
        orderInfo?: object;
        orderInfoText?: object;
        buttonContainer?: object;
        button?: object;
        buttonText?: object;
    };
}
declare const OrderConfirmation: React.FC<OrderConfirmationProps>;
export default OrderConfirmation;
