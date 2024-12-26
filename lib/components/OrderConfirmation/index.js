import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const OrderConfirmation = ({ orderId, orderDate, totalAmount, paymentMethod, shippingAddress, onContinueShopping, onViewOrderDetails, title, subTitle, styles: customStyles = {}, }) => {
    return (<ScrollView contentContainerStyle={[styles.container, customStyles.container]}>
      {/* Title */}
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}

      {/* Order Details */}
      <View style={[styles.orderInfo, customStyles.orderInfo]}>
        <Text style={[styles.orderInfoText, customStyles.orderInfoText]}>
          <Text style={styles.boldText}>Order ID:</Text> {orderId}
        </Text>
        <Text style={[styles.orderInfoText, customStyles.orderInfoText]}>
          <Text style={styles.boldText}>Order Date:</Text> {orderDate}
        </Text>
        <Text style={[styles.orderInfoText, customStyles.orderInfoText]}>
          <Text style={styles.boldText}>Total Amount:</Text> ${totalAmount.toFixed(2)}
        </Text>
        <Text style={[styles.orderInfoText, customStyles.orderInfoText]}>
          <Text style={styles.boldText}>Payment Method:</Text> {paymentMethod}
        </Text>
        <Text style={[styles.orderInfoText, customStyles.orderInfoText]}>
          <Text style={styles.boldText}>Shipping Address:</Text> {shippingAddress}
        </Text>
      </View>

      {/* Buttons */}
      <View style={[styles.buttonContainer, customStyles.buttonContainer]}>
        <TouchableOpacity style={[styles.button, customStyles.button]} onPress={onContinueShopping}>
          <Text style={[styles.buttonText, customStyles.buttonText]}>Continue Shopping</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, customStyles.button]} onPress={onViewOrderDetails}>
          <Text style={[styles.buttonText, customStyles.buttonText]}>View Order Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>);
};
const styles = StyleSheet.create({
    container: {
        padding: wp('5%'),
        alignItems: 'center',
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
    orderInfo: {
        width: '100%',
        marginBottom: hp('2%'),
        backgroundColor: '#f9f9f9',
        borderRadius: wp('2%'),
        padding: wp('4%'),
        borderWidth: 1,
        borderColor: '#ccc',
    },
    orderInfoText: {
        fontSize: wp('4%'),
        marginBottom: hp('1%'),
    },
    boldText: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: hp('2%'),
        width: '100%',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: hp('1.5%'),
        alignItems: 'center',
        borderRadius: wp('2%'),
        marginBottom: hp('1%'),
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: wp('4%'),
    },
});
export default OrderConfirmation;
