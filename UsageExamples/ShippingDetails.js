/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Alert} from 'react-native';
import {ShippingDetails} from 'react-native-ecommerce-helper/lib';

const ShippingDetailsTest = () => {
  const handleShippingDetails = shippingDetails => {
    console.log('Shipping Details:', shippingDetails);
    Alert.alert('Success', 'Shipping details submitted!');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ShippingDetails
        title="Shipping Information"
        subTitle="Please enter your shipping details below"
        onSubmit={handleShippingDetails}
      />
    </View>
  );
};

export default ShippingDetailsTest;
