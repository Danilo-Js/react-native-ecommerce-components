import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
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

// Traduções para títulos, labels e botões
const translations: Record<Language, {
  defaultTitle: string;
  defaultSubTitle?: string;
  subtotal: string;
  shipping: string;
  tax: string;
  total: string;
  checkoutButton: string;
}> = {
  en: {
    defaultTitle: 'Order Summary',
    defaultSubTitle: 'Review your order',
    subtotal: 'Subtotal:',
    shipping: 'Shipping:',
    tax: 'Tax:',
    total: 'Total:',
    checkoutButton: 'Proceed to Checkout',
  },
  pt: {
    defaultTitle: 'Resumo do Pedido',
    defaultSubTitle: 'Revise seu pedido',
    subtotal: 'Subtotal:',
    shipping: 'Frete:',
    tax: 'Imposto:',
    total: 'Total:',
    checkoutButton: 'Finalizar Compra',
  },
};

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  onCheckout: () => void;
  title?: string;
  subTitle?: string;
  language?: Language;
  styles?: {
    container?: StyleProp<ViewStyle>;
    itemContainer?: StyleProp<ViewStyle>;
    itemText?: StyleProp<TextStyle>;
    summaryContainer?: StyleProp<ViewStyle>;
    summaryText?: StyleProp<TextStyle>;
    totalText?: StyleProp<TextStyle>;
    button?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyle>;
    title?: StyleProp<TextStyle>;
    subTitle?: StyleProp<TextStyle>;
  };
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  subtotal,
  shipping,
  tax,
  total,
  onCheckout,
  title,
  subTitle,
  language = 'en',
  styles: customStyles = {},
}) => {
  const t = translations[language] || translations.en;
  const displayTitle = title || t.defaultTitle;
  const displaySubTitle = subTitle || t.defaultSubTitle;

  const renderItem = ({ item }: { item: OrderItem }) => (
    <View style={[styles.itemContainer, customStyles.itemContainer]}>
      <Text style={[styles.itemText, customStyles.itemText]}>
        {item.name} x{item.quantity}
      </Text>
      <Text style={[styles.itemText, customStyles.itemText]}>
        ${(item.price * item.quantity).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{displayTitle}</Text>
      {displaySubTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{displaySubTitle}</Text>}

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />

      <View style={[styles.summaryContainer, customStyles.summaryContainer]}>
        <Text style={[styles.summaryText, customStyles.summaryText]}>
          {t.subtotal} ${subtotal.toFixed(2)}
        </Text>
        <Text style={[styles.summaryText, customStyles.summaryText]}>
          {t.shipping} ${shipping.toFixed(2)}
        </Text>
        <Text style={[styles.summaryText, customStyles.summaryText]}>
          {t.tax} ${tax.toFixed(2)}
        </Text>
        <Text style={[styles.totalText, customStyles.totalText]}>
          {t.total} ${total.toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={onCheckout}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>{t.checkoutButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp('5%'),
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
    elevation: 2,
    flex: 1,
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
  itemList: {
    marginBottom: hp('2%'),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp('1%'),
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: wp('4%'),
  },
  summaryContainer: {
    marginTop: hp('2%'),
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: hp('2%'),
  },
  summaryText: {
    fontSize: wp('4%'),
    marginBottom: hp('1%'),
  },
  totalText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginTop: hp('1%'),
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: hp('2%'),
    marginTop: hp('3%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
});

export default OrderSummary;