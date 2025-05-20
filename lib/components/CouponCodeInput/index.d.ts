import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
type Language = 'en' | 'pt';
interface CouponCodeInputProps {
    onApplyCoupon: (coupon: string) => void;
    onRemoveCoupon?: () => void;
    placeholder?: string;
    title?: string;
    subTitle?: string;
    styles?: {
        container?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
        input?: StyleProp<ViewStyle>;
        buttonContainer?: StyleProp<ViewStyle>;
        buttonApply?: StyleProp<ViewStyle>;
        buttonRemove?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
        message?: StyleProp<TextStyle>;
    };
    language?: Language;
}
declare const CouponCodeInput: React.FC<CouponCodeInputProps>;
export default CouponCodeInput;
