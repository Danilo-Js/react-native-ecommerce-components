import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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

const CouponCodeInput: React.FC<CouponCodeInputProps> = ({
  onApplyCoupon,
  onRemoveCoupon,
  placeholder = 'Enter coupon code',
  title,
  subTitle,
  styles: customStyles = {},
}) => {
  const [coupon, setCoupon] = useState('');
  const [message, setMessage] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    if (!coupon.trim()) {
      Alert.alert('Invalid Coupon', 'Please enter a valid coupon code.');
      return;
    }

    onApplyCoupon(coupon);
    setIsCouponApplied(true);
    setMessage('Coupon applied successfully!');
  };

  const handleRemoveCoupon = () => {
    setCoupon('');
    setIsCouponApplied(false);
    setMessage('');
    if (onRemoveCoupon) {
      onRemoveCoupon();
    }
  };

  return (
    <View style={[styles.container, customStyles.container]}>
      {/* Title */}
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}

      {/* Input Field */}
      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder={placeholder}
        value={coupon}
        onChangeText={setCoupon}
        editable={!isCouponApplied}
      />

      {/* Buttons */}
      <View style={[styles.buttonContainer, customStyles.buttonContainer]}>
        {!isCouponApplied ? (
          <TouchableOpacity
            style={[styles.buttonApply, customStyles.buttonApply]}
            onPress={handleApplyCoupon}
          >
            <Text style={[styles.buttonText, customStyles.buttonText]}>Apply Coupon</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.buttonRemove, customStyles.buttonRemove]}
            onPress={handleRemoveCoupon}
          >
            <Text style={[styles.buttonText, customStyles.buttonText]}>Remove Coupon</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Message */}
      {message && <Text style={[styles.message, customStyles.message]}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp('5%'),
    alignItems: 'center',
  },
  title: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    textAlign: 'center',
  },
  subTitle: {
    fontSize: wp('4%'),
    color: '#555',
    marginBottom: hp('2%'),
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: hp('6%'),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
    fontSize: wp('4%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonApply: {
    backgroundColor: '#28a745',
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    borderRadius: wp('2%'),
    flex: 1,
    marginRight: wp('2%'),
  },
  buttonRemove: {
    backgroundColor: '#dc3545',
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    borderRadius: wp('2%'),
    flex: 1,
    marginRight: wp('2%'),
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  message: {
    marginTop: hp('1%'),
    fontSize: wp('4%'),
    color: '#28a745',
  },
});

export default CouponCodeInput;
