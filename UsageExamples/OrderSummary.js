/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {OrderSummary} from 'react-native-ecommerce-helper/lib';

const App = () => {
  const orderItems = [
    {id: '1', name: 'Smartphone', price: 499.99, quantity: 1},
    {id: '2', name: 'Headphones', price: 59.99, quantity: 2},
    {id: '3', name: 'Laptop', price: 1299.99, quantity: 1},
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 25.0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    Alert.alert(
      'Checkout',
      `Your order total is $${total.toFixed(2)}. Proceeding to payment...`,
    );
  };

  return (
    <View style={styles.container}>
      <OrderSummary
        items={orderItems}
        subtotal={subtotal}
        shipping={shipping}
        tax={tax}
        total={total}
        onCheckout={handleCheckout}
        title="Order Summary"
        subTitle="Review your order before proceeding"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
