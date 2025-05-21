import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
type Language = 'en' | 'pt';
type OrderTrackingStep = {
    id: string;
    title: string;
    description: string;
    status: 'completed' | 'current' | 'pending';
};
interface OrderTrackingProps {
    steps: OrderTrackingStep[];
    title?: string;
    subTitle?: string;
    language?: Language;
    styles?: {
        container?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
        stepContainer?: StyleProp<ViewStyle>;
        stepTitle?: StyleProp<TextStyle>;
        stepDescription?: StyleProp<TextStyle>;
        stepCompleted?: StyleProp<ViewStyle>;
        stepCurrent?: StyleProp<ViewStyle>;
        stepPending?: StyleProp<ViewStyle>;
    };
}
declare const OrderTracking: React.FC<OrderTrackingProps>;
export default OrderTracking;
