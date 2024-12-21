import React from 'react';
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
    title: string;
    subTitle?: string;
    styles?: {
        container?: object;
        itemContainer?: object;
        itemText?: object;
        summaryContainer?: object;
        summaryText?: object;
        totalText?: object;
        button?: object;
        buttonText?: object;
        title?: object;
        subTitle?: object;
    };
}
declare const OrderSummary: React.FC<OrderSummaryProps>;
export default OrderSummary;
