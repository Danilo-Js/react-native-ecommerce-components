import React from 'react';
interface CouponCodeInputProps {
    onApplyCoupon: (coupon: string) => void;
    onRemoveCoupon?: () => void;
    placeholder?: string;
    title: string;
    subTitle?: string;
    styles?: {
        container?: object;
        title?: object;
        subTitle?: object;
        input?: object;
        buttonContainer?: object;
        buttonApply?: object;
        buttonRemove?: object;
        buttonText?: object;
        message?: object;
    };
}
declare const CouponCodeInput: React.FC<CouponCodeInputProps>;
export default CouponCodeInput;
