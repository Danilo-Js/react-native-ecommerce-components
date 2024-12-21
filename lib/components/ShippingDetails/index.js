import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ShippingDetails = ({ onSubmit, title, subTitle, styles: customStyles = {}, }) => {
    const [recipientName, setRecipientName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        if (!recipientName || !addressLine1 || !city || !state || !postalCode || !country || !phone || !email) {
            Alert.alert('Error', 'Please fill in all required fields.');
            return;
        }
        const shippingDetails = {
            recipientName,
            addressLine1,
            addressLine2,
            city,
            state,
            postalCode,
            country,
            phone,
            email,
        };
        onSubmit(shippingDetails);
        Alert.alert('Success', 'Shipping details submitted successfully!');
    };
    return (<ScrollView contentContainerStyle={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}

      <TextInput style={[styles.input, customStyles.input]} placeholder="Recipient Name" value={recipientName} onChangeText={setRecipientName}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder="Address Line 1" value={addressLine1} onChangeText={setAddressLine1}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder="Address Line 2 (Optional)" value={addressLine2} onChangeText={setAddressLine2}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder="City" value={city} onChangeText={setCity}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder="State" value={state} onChangeText={setState}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder="Postal Code" keyboardType="numeric" value={postalCode} onChangeText={setPostalCode}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder="Country" value={country} onChangeText={setCountry}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder="Phone" keyboardType="phone-pad" value={phone} onChangeText={setPhone}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail}/>

      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handleSubmit}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>Submit Shipping Details</Text>
      </TouchableOpacity>
    </ScrollView>);
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
        backgroundColor: '#007bff',
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
export default ShippingDetails;
