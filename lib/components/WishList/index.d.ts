import React from 'react';
interface WishlistItem {
    id: string;
    name: string;
    price: number;
    image: string;
}
interface WishlistProps {
    items: WishlistItem[];
    onRemoveItem: (id: string) => void;
    onAddToCart: (item: WishlistItem) => void;
    title: string;
    subTitle?: string;
    styles?: {
        container?: object;
        itemContainer?: object;
        image?: object;
        itemText?: object;
        priceText?: object;
        buttonContainer?: object;
        button?: object;
        buttonText?: object;
        title?: object;
        subTitle?: object;
    };
}
declare const Wishlist: React.FC<WishlistProps>;
export default Wishlist;
