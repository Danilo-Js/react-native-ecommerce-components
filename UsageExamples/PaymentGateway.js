/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Alert} from 'react-native';
import {PaymentGateway} from 'react-native-ecommerce-helper/lib';

const PaymentGatewayTest = () => {
  const handlePayment = paymentDetails => {
    console.log('Payment Details:', paymentDetails);
    Alert.alert('Payment Success', 'Payment details have been submitted.');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <PaymentGateway
        title="Secure Payment"
        subTitle="Please enter your card details"
        onPaymentSubmit={handlePayment}
      />
    </View>
  );
};

export default PaymentGatewayTest;
