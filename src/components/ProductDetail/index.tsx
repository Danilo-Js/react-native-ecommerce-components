import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Idiomas suportados
type Language = 'en' | 'pt';

// Traduções para títulos, subtítulos e botões
const translations: Record<Language, {
  defaultTitle: string;
  defaultSubTitle?: string;
  addToCart: string;
  buyNow: string;
}> = {
  en: {
    defaultTitle: 'Product Details',
    defaultSubTitle: undefined,
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
  },
  pt: {
    defaultTitle: 'Detalhes do Produto',
    defaultSubTitle: undefined,
    addToCart: '+ Carrinho',
    buyNow: 'Comprar Agora',
  },
};

// Modelo de produto
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
}

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  title?: string;
  subTitle?: string;
  language?: Language;
  styles?: {
    container?: StyleProp<ViewStyle>;
    image?: StyleProp<ImageStyle>;
    title?: StyleProp<TextStyle>;
    subTitle?: StyleProp<TextStyle>;
    productTitle?: StyleProp<TextStyle>;
    price?: StyleProp<TextStyle>;
    rating?: StyleProp<TextStyle>;
    description?: StyleProp<TextStyle>;
    buttonContainer?: StyleProp<ViewStyle>;
    button?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyle>;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onAddToCart,
  onBuyNow,
  title,
  subTitle,
  language = 'en',
  styles: customStyles = {},
}) => {
  const t = translations[language] || translations.en;
  const displayTitle = title || t.defaultTitle;
  const displaySubTitle = subTitle || t.defaultSubTitle;

  return (
    <ScrollView style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{displayTitle}</Text>
      {displaySubTitle && (
        <Text style={[styles.subTitle, customStyles.subTitle]}>{displaySubTitle}</Text>
      )}

      <Image source={{ uri: product.image }} style={[styles.image, customStyles.image]} />

      <Text style={[styles.productTitle, customStyles.productTitle]}>
        {product.title}
      </Text>
      <Text style={[styles.price, customStyles.price]}>${product.price.toFixed(2)}</Text>
      {product.rating !== undefined && (
        <Text style={[styles.rating, customStyles.rating]}>⭐ {product.rating}</Text>
      )}

      <Text style={[styles.description, customStyles.description]}>
        {product.description}
      </Text>

      <View style={[styles.buttonContainer, customStyles.buttonContainer]}>
        <TouchableOpacity
          style={[styles.button, customStyles.button]}
          onPress={() => onAddToCart(product)}
        >
          <Text style={[styles.buttonText, customStyles.buttonText]}>
            {t.addToCart}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, customStyles.button]}
          onPress={() => onBuyNow(product)}
        >
          <Text style={[styles.buttonText, customStyles.buttonText]}>
            {t.buyNow}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: hp('40%'),
    borderRadius: wp('2%'),
    marginBottom: hp('2%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  subTitle: {
    fontSize: wp('4.5%'),
    color: '#555',
    marginBottom: hp('2%'),
  },
  productTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  price: {
    fontSize: wp('4.5%'),
    color: '#28a745',
    marginBottom: hp('1%'),
  },
  rating: {
    fontSize: wp('4%'),
    marginBottom: hp('1%'),
  },
  description: {
    fontSize: wp('4%'),
    color: '#555',
    marginBottom: hp('2%'),
    lineHeight: hp('2.5%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
  },
  button: {
    flex: 1,
    paddingVertical: hp('1.5%'),
    marginHorizontal: wp('1%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
});

export default ProductDetail;
