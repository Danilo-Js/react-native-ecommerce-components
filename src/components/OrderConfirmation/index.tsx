import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
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

// Traduções para labels e botões
const translations: Record<Language, {
  defaultTitle: string;
  defaultSubTitle: string;
  orderIdLabel: string;
  orderDateLabel: string;
  totalAmountLabel: string;
  paymentMethodLabel: string;
  shippingAddressLabel: string;
  continueShopping: string;
  viewOrderDetails: string;
}> = {
  en: {
    defaultTitle: 'Order Confirmed!',
    defaultSubTitle: 'Thank you for your purchase.',
    orderIdLabel: 'Order ID:',
    orderDateLabel: 'Order Date:',
    totalAmountLabel: 'Total Amount:',
    paymentMethodLabel: 'Payment Method:',
    shippingAddressLabel: 'Shipping Address:',
    continueShopping: 'Continue Shopping',
    viewOrderDetails: 'View Order Details',
  },
  pt: {
    defaultTitle: 'Pedido Confirmado!',
    defaultSubTitle: 'Obrigado pela sua compra.',
    orderIdLabel: 'ID do Pedido:',
    orderDateLabel: 'Data do Pedido:',
    totalAmountLabel: 'Valor Total:',
    paymentMethodLabel: 'Método de Pagamento:',
    shippingAddressLabel: 'Endereço de Entrega:',
    continueShopping: 'Continuar Comprando',
    viewOrderDetails: 'Ver Detalhes do Pedido',
  },
};

interface OrderConfirmationProps {
  orderId: string;
  orderDate: string;
  totalAmount: number;
  paymentMethod: string;
  shippingAddress: string;
  onContinueShopping: () => void;
  onViewOrderDetails: () => void;
  title?: string;
  subTitle?: string;
  language?: Language;
  styles?: {
    container?: StyleProp<ViewStyle>;
    title?: StyleProp<TextStyle>;
    subTitle?: StyleProp<TextStyle>;
    orderInfo?: StyleProp<ViewStyle>;
    orderInfoText?: StyleProp<TextStyle>;
    buttonContainer?: StyleProp<ViewStyle>;
    button?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyle>;
  };
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  orderId,
  orderDate,
  totalAmount,
  paymentMethod,
  shippingAddress,
  onContinueShopping,
  onViewOrderDetails,
  title,
  subTitle,
  language = 'en',
  styles: customStyles = {},
}) => {
  const t = translations[language] || translations.en;
  const displayTitle = title || t.defaultTitle;
  const displaySubTitle = subTitle || t.defaultSubTitle;

  return (
    <ScrollView contentContainerStyle={[styles.container, customStyles.container]}>
      {/* Title */}
      <Text style={[styles.title, customStyles.title]}>{displayTitle}</Text>
      {displaySubTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{displaySubTitle}</Text>}

      {/* Order Details */}
      <View style={[styles.orderInfo, customStyles.orderInfo]}>
        <Text style={[styles.orderInfoText, customStyles.orderInfoText]}>
          <Text style={styles.boldText}>{t.orderIdLabel} </Text>
          {orderId}
        </Text>
        <Text style={[styles.orderInfoText, customStyles.orderInfoText]}>
          <Text style={styles.boldText}>{t.orderDateLabel} </Text>
          {orderDate}
        </Text>
        <Text style={[styles.orderInfoText, customStyles.orderInfoText]}>
          <Text style={styles.boldText}>{t.totalAmountLabel} </Text>
          ${totalAmount.toFixed(2)}
        </Text>
        <Text style={[styles.orderInfoText, customStyles.orderInfoText]}>
          <Text style={styles.boldText}>{t.paymentMethodLabel} </Text>
          {paymentMethod}
        </Text>
        <Text style={[styles.orderInfoText, customStyles.orderInfoText]}>
          <Text style={styles.boldText}>{t.shippingAddressLabel} </Text>
          {shippingAddress}
        </Text>
      </View>

      {/* Buttons */}
      <View style={[styles.buttonContainer, customStyles.buttonContainer]}>
        <TouchableOpacity
          style={[styles.button, customStyles.button]}
          onPress={onContinueShopping}
        >
          <Text style={[styles.buttonText, customStyles.buttonText]}>{t.continueShopping}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, customStyles.button]}
          onPress={onViewOrderDetails}
        >
          <Text style={[styles.buttonText, customStyles.buttonText]}>{t.viewOrderDetails}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
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
