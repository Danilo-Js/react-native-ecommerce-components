import React from 'react';
interface OrderTrackingStep {
    id: string;
    title: string;
    description: string;
    status: 'completed' | 'current' | 'pending';
}
interface OrderTrackingProps {
    steps: OrderTrackingStep[];
    title: string;
    subTitle?: string;
    styles?: {
        container?: object;
        title?: object;
        subTitle?: object;
        stepContainer?: object;
        stepTitle?: object;
        stepDescription?: object;
        stepCompleted?: object;
        stepCurrent?: object;
        stepPending?: object;
    };
}
declare const OrderTracking: React.FC<OrderTrackingProps>;
export default OrderTracking;
