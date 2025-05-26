import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Idiomas suportados
type Language = 'en' | 'pt';

// Traduções do componente
const translations: Record<Language, {
  defaultTitle: string;
  defaultSubTitle?: string;
  errorTitle: string;
  errorMessage: string;
  successTitle: string;
  successMessage: string;
  placeholders: {
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    cvv: string;
    billingAddress: string;
  };
  submitButton: string;
}> = {
  en: {
    defaultTitle: 'Payment',
    defaultSubTitle: 'Enter your payment details',
    errorTitle: 'Error',
    errorMessage: 'Please fill in all required fields.',
    successTitle: 'Success',
    successMessage: 'Payment processed successfully!',
    placeholders: {
      cardNumber: 'Card Number',
      cardHolder: 'Card Holder',
      expirationDate: 'Expiration Date (MM/YY)',
      cvv: 'CVV',
      billingAddress: 'Billing Address (Optional)',
    },
    submitButton: 'Submit Payment',
  },
  pt: {
    defaultTitle: 'Pagamento',
    defaultSubTitle: 'Insira os dados de pagamento',
    errorTitle: 'Erro',
    errorMessage: 'Por favor, preencha todos os campos obrigatórios.',
    successTitle: 'Sucesso',
    successMessage: 'Pagamento processado com sucesso!',
    placeholders: {
      cardNumber: 'Número do Cartão',
      cardHolder: 'Titular do Cartão',
      expirationDate: 'Validade (MM/AA)',
      cvv: 'CVV',
      billingAddress: 'Endereço de Cobrança (Opcional)',
    },
    submitButton: 'Enviar Pagamento',
  },
};

// Detalhes do pagamento capturados
export interface PaymentDetails {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
  billingAddress?: string;
}

interface PaymentGatewayProps {
  onPaymentSubmit: (paymentDetails: PaymentDetails) => void;
  title?: string;
  subTitle?: string;
  language?: Language;
  styles?: {
    container?: StyleProp<ViewStyle>;
    title?: StyleProp<TextStyle>;
    subTitle?: StyleProp<TextStyle>;
    input?: StyleProp<ViewStyle>;
    button?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyle>;
  };
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({
  onPaymentSubmit,
  title,
  subTitle,
  language = 'en',
  styles: customStyles = {},
}) => {
  const t = translations[language] || translations.en;
  const displayTitle = title || t.defaultTitle;
  const displaySubTitle = subTitle || t.defaultSubTitle;

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !cardHolder || !expirationDate || !cvv) {
      Alert.alert(t.errorTitle, t.errorMessage);
      return;
    }
    const paymentDetails: PaymentDetails = { cardNumber, cardHolder, expirationDate, cvv, billingAddress };
    onPaymentSubmit(paymentDetails);
    Alert.alert(t.successTitle, t.successMessage);
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{displayTitle}</Text>
      {displaySubTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{displaySubTitle}</Text>}

      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder={t.placeholders.cardNumber}
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
        maxLength={16}
      />
      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder={t.placeholders.cardHolder}
        value={cardHolder}
        onChangeText={setCardHolder}
      />
      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder={t.placeholders.expirationDate}
        value={expirationDate}
        onChangeText={setExpirationDate}
        maxLength={5}
      />
      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder={t.placeholders.cvv}
        keyboardType="numeric"
        secureTextEntry
        value={cvv}
        onChangeText={setCvv}
        maxLength={3}
      />
      <TextInput
        style={[styles.input, customStyles.input]}
        placeholder={t.placeholders.billingAddress}
        value={billingAddress}
        onChangeText={setBillingAddress}
      />

      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handlePayment}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>{t.submitButton}</Text>
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