import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
const translations = {
    en: {
        defaultTitle: 'Shipping Details',
        defaultSubTitle: 'Enter your shipping information',
        placeholders: {
            recipientName: 'Recipient Name',
            addressLine1: 'Address Line 1',
            addressLine2: 'Address Line 2 (Optional)',
            city: 'City',
            state: 'State',
            postalCode: 'Postal Code',
            country: 'Country',
            phone: 'Phone',
            email: 'Email',
        },
        errorTitle: 'Error',
        errorMessage: 'Please fill in all required fields.',
        successTitle: 'Success',
        successMessage: 'Shipping details submitted successfully!',
        submitButton: 'Submit Shipping Details',
    },
    pt: {
        defaultTitle: 'Detalhes de Envio',
        defaultSubTitle: 'Insira suas informações de envio',
        placeholders: {
            recipientName: 'Nome do Destinatário',
            addressLine1: 'Endereço Linha 1',
            addressLine2: 'Endereço Linha 2 (Opcional)',
            city: 'Cidade',
            state: 'Estado',
            postalCode: 'CEP',
            country: 'País',
            phone: 'Telefone',
            email: 'Email',
        },
        errorTitle: 'Erro',
        errorMessage: 'Por favor, preencha todos os campos obrigatórios.',
        successTitle: 'Sucesso',
        successMessage: 'Detalhes de envio enviados com sucesso!',
        submitButton: 'Enviar Detalhes de Envio',
    },
};
const ShippingDetails = ({ onSubmit, title, subTitle, language = 'en', styles: customStyles = {}, }) => {
    const t = translations[language] || translations.en;
    const displayTitle = title || t.defaultTitle;
    const displaySubTitle = subTitle || t.defaultSubTitle;
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
        if (!recipientName ||
            !addressLine1 ||
            !city ||
            !state ||
            !postalCode ||
            !country ||
            !phone ||
            !email) {
            Alert.alert(t.errorTitle, t.errorMessage);
            return;
        }
        const details = {
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
        onSubmit(details);
        Alert.alert(t.successTitle, t.successMessage);
    };
    return (<ScrollView contentContainerStyle={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{displayTitle}</Text>
      {displaySubTitle && (<Text style={[styles.subTitle, customStyles.subTitle]}>{displaySubTitle}</Text>)}

      <TextInput style={[styles.input, customStyles.input]} placeholder={t.placeholders.recipientName} value={recipientName} onChangeText={setRecipientName}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder={t.placeholders.addressLine1} value={addressLine1} onChangeText={setAddressLine1}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder={t.placeholders.addressLine2} value={addressLine2} onChangeText={setAddressLine2}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder={t.placeholders.city} value={city} onChangeText={setCity}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder={t.placeholders.state} value={state} onChangeText={setState}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder={t.placeholders.postalCode} keyboardType="numeric" value={postalCode} onChangeText={setPostalCode}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder={t.placeholders.country} value={country} onChangeText={setCountry}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder={t.placeholders.phone} keyboardType="phone-pad" value={phone} onChangeText={setPhone}/>
      <TextInput style={[styles.input, customStyles.input]} placeholder={t.placeholders.email} keyboardType="email-address" value={email} onChangeText={setEmail}/>

      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handleSubmit}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>{t.submitButton}</Text>
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
