import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
// Traduções do componente
const translations = {
    en: {
        defaultTitle: 'New Client',
        defaultSubTitle: 'Enter client details',
        errorTitle: 'Error',
        errorMessage: missing => `Please fill in all fields: ${missing.join(', ')}`,
        successTitle: 'Success',
        successMessage: 'Customer registered successfully!',
        submitButton: 'Register',
    },
    pt: {
        defaultTitle: 'Novo Cliente',
        defaultSubTitle: 'Insira os dados do cliente',
        errorTitle: 'Erro',
        errorMessage: missing => `Por favor, preencha todos os campos: ${missing.join(', ')}`,
        successTitle: 'Sucesso',
        successMessage: 'Cliente registrado com sucesso!',
        submitButton: 'Registrar',
    },
};
const NewClient = ({ onSubmit, fields, title, subTitle, language = 'en', styles: customStyles = {}, }) => {
    const t = translations[language] || translations.en;
    const displayTitle = title || t.defaultTitle;
    const displaySubTitle = subTitle || t.defaultSubTitle;
    const [formData, setFormData] = useState({});
    const handleInputChange = (field, value) => {
        setFormData(Object.assign(Object.assign({}, formData), { [field]: value }));
    };
    const handleSubmit = () => {
        const missingFields = fields.filter(field => !formData[field]);
        if (missingFields.length > 0) {
            Alert.alert(t.errorTitle, t.errorMessage(missingFields));
            return;
        }
        onSubmit(formData);
        setFormData({});
        Alert.alert(t.successTitle, t.successMessage);
    };
    return (<ScrollView style={[styles.container, customStyles.container]} contentContainerStyle={{ paddingBottom: hp('10%') }}>
      <Text style={[styles.title, customStyles.title]}>{displayTitle}</Text>
      {displaySubTitle && (<Text style={[styles.subTitle, customStyles.subTitle]}>{displaySubTitle}</Text>)}
      {fields.map(field => (<TextInput key={field} style={[styles.input, customStyles.input]} placeholder={field} value={formData[field] || ''} onChangeText={value => handleInputChange(field, value)}/>))}
      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handleSubmit}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>
          {t.submitButton}
        </Text>
      </TouchableOpacity>
    </ScrollView>);
};
const styles = StyleSheet.create({
    container: {
        padding: wp('5%'),
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
        paddingHorizontal: wp('5%'),
        alignItems: 'center',
        borderRadius: wp('2%'),
        marginBottom: hp('3%'),
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: wp('4%'),
    },
    title: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        marginBottom: hp('1%'),
    },
    subTitle: {
        fontSize: wp('4%'),
        color: '#555',
        marginBottom: hp('2%'),
    },
});
export default NewClient;
