/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {OrderTracking} from 'react-native-ecommerce-helper/lib';

const steps = [
  {
    id: '1',
    title: 'Order Placed',
    description: 'Your order has been placed.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Order Processed',
    description: 'Your order is being processed.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Shipped',
    description: 'Your order has been shipped.',
    status: 'current',
  },
  {
    id: '4',
    title: 'Out for Delivery',
    description: 'Your order is on the way.',
    status: 'pending',
  },
  {
    id: '5',
    title: 'Delivered',
    description: 'Your order has been delivered.',
    status: 'pending',
  },
];

const OrderTrackingTest = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <OrderTracking
        title="Track Your Order"
        subTitle="Stay updated with your order status"
        steps={steps}
      />
    </View>
  );
};

export default OrderTrackingTest;
