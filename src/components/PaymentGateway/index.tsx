import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface PaymentGatewayProps {
  onPaymentSubmit: (paymentDetails: PaymentDetails) => void;
  title: string;
  subTitle?: string;
  styles?: {
    container?: object;
    title?: object;
    subTitle?: object;
    input?: object;
    button?: object;
    buttonText?: object;
  };
}

interface PaymentDetails {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
  billingAddress?: string;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({
  onPaymentSubmit,
  title,
  subTitle,
  styles: customStyles = {},
}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !cardHolder || !expirationDate || !cvv) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    const paymentDetails: PaymentDetails = {
      cardNumber,
      cardHolder,
      expirationDate,
      cvv,
      billingAddress,
    };

    onPaymentSubmit(paymentDetails);
    Alert.alert('Success', 'Payment processed successfully!');
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}

      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder="Card Number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
        maxLength={16}
      />
      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder="Card Holder"
        value={cardHolder}
        onChangeText={setCardHolder}
      />
      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder="Expiration Date (MM/YY)"
        value={expirationDate}
        onChangeText={setExpirationDate}
        maxLength={5}
      />
      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder="CVV"
        keyboardType="numeric"
        secureTextEntry
        value={cvv}
        onChangeText={setCvv}
        maxLength={3}
      />
      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder="Billing Address (Optional)"
        value={billingAddress}
        onChangeText={setBillingAddress}
      />

      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handlePayment}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>Submit Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp('5%'),
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
    elevation: 2,
  },
  title: {
    fontSize: wp('6%'),
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
    height: hp('6%'),
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: hp('2%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('2%'),
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: hp('2%'),
    alignItems: 'center',
    borderRadius: wp('2%'),
    marginTop: hp('2%'),
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
});

export default PaymentGateway;
