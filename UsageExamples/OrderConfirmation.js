/* eslint-disable prettier/prettier */
import React from "react";
import { View, Alert } from "react-native";
import { OrderConfirmation } from "react-native-ecommerce-components/lib";

const OrderConfirmationTest = () => {
  const handleContinueShopping = () => {
    Alert.alert("Continue Shopping", "Navigating to home page...");
  };

  const handleViewOrderDetails = () => {
    Alert.alert("Order Details", "Showing order details...");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <OrderConfirmation
        title="Order Confirmed"
        subTitle="Thank you for your purchase!"
        orderId="ORD12345"
        orderDate="2024-06-21"
        totalAmount={149.99}
        paymentMethod="Credit Card"
        shippingAddress="123 Main Street, Cityville, CA"
        onContinueShopping={handleContinueShopping}
        onViewOrderDetails={handleViewOrderDetails}
      />
    </View>
  );
};

export default OrderConfirmationTest;
