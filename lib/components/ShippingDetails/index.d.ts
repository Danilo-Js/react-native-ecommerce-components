import React from 'react';
interface ShippingDetailsProps {
    onSubmit: (shippingDetails: ShippingDetailsData) => void;
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
interface ShippingDetailsData {
    recipientName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
}
declare const ShippingDetails: React.FC<ShippingDetailsProps>;
export default ShippingDetails;
