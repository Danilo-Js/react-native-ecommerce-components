/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Alert} from 'react-native';
import {CouponCodeInput} from 'react-native-ecommerce-helper/lib';

const CouponCodeInputTest = () => {
  const handleApplyCoupon = coupon => {
    Alert.alert('Coupon Applied', `Coupon Code: ${coupon}`);
  };

  const handleRemoveCoupon = () => {
    Alert.alert('Coupon Removed', 'The coupon has been removed.');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <CouponCodeInput
        title="Apply Your Coupon"
        subTitle="Enter a valid coupon code to get discounts"
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
      />
    </View>
  );
};

export default CouponCodeInputTest;
