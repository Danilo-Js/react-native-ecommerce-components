import React from 'react';
interface CartItem {
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
    title: string;
    subTitle?: string;
    styles?: {
        container?: object;
        itemContainer?: object;
        itemText?: object;
        button?: object;
        buttonText?: object;
        totalContainer?: object;
        totalText?: object;
        title?: object;
        subTitle?: object;
    };
}
declare const ShoppingCart: React.FC<ShoppingCartProps>;
export default ShoppingCart;
