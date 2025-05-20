import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
// Estrutura de traduções
const translations = {
    en: {
        invalidTitle: 'Invalid Coupon',
        invalidMessage: 'Please enter a valid coupon code.',
        applyButton: 'Apply Coupon',
        removeButton: 'Remove Coupon',
        successMessage: 'Coupon applied successfully!',
        placeholder: 'Enter coupon code',
    },
    pt: {
        invalidTitle: 'Cupom inválido',
        invalidMessage: 'Por favor, insira um código de cupom válido.',
        applyButton: 'Aplicar cupom',
        removeButton: 'Remover cupom',
        successMessage: 'Cupom aplicado com sucesso!',
        placeholder: 'Insira o código do cupom',
    },
};
const CouponCodeInput = ({ onApplyCoupon, onRemoveCoupon, placeholder, title, subTitle, styles: customStyles = {}, language = 'en', }) => {
    const [coupon, setCoupon] = useState('');
    const [message, setMessage] = useState('');
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    // Seleciona traduções conforme idioma
    const t = translations[language] || translations.en;
    const placeholderText = placeholder || t.placeholder;
    const handleApplyCoupon = () => {
        if (!coupon.trim()) {
            Alert.alert(t.invalidTitle, t.invalidMessage);
            return;
        }
        onApplyCoupon(coupon);
        setIsCouponApplied(true);
        setMessage(t.successMessage);
    };
    const handleRemoveCoupon = () => {
        setCoupon('');
        setIsCouponApplied(false);
        setMessage('');
        onRemoveCoupon === null || onRemoveCoupon === void 0 ? void 0 : onRemoveCoupon();
    };
    return (<View style={[styles.container, customStyles.container]}>
      {title && <Text style={[styles.title, customStyles.title]}>{title}</Text>}
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}

      <TextInput style={[styles.input, customStyles.input]} placeholder={placeholderText} value={coupon} onChangeText={setCoupon} editable={!isCouponApplied}/>

      <View style={[styles.buttonContainer, customStyles.buttonContainer]}>
        {!isCouponApplied ? (<TouchableOpacity style={[styles.buttonApply, customStyles.buttonApply]} onPress={handleApplyCoupon}>
            <Text style={[styles.buttonText, customStyles.buttonText]}>
              {t.applyButton}
            </Text>
          </TouchableOpacity>) : (<TouchableOpacity style={[styles.buttonRemove, customStyles.buttonRemove]} onPress={handleRemoveCoupon}>
            <Text style={[styles.buttonText, customStyles.buttonText]}>
              {t.removeButton}
            </Text>
          </TouchableOpacity>)}
      </View>

      {message ? (<Text style={[styles.message, customStyles.message]}>{message}</Text>) : null}
    </View>);
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
