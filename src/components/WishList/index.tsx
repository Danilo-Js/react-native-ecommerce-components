import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
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

// Traduções do componente
const translations: Record<Language, {
  defaultTitle: string;
  defaultSubTitle?: string;
  removeConfirmTitle: string;
  removeConfirmMessage: string;
  addConfirmTitle: string;
  addConfirmMessage: (name: string) => string;
  cancelText: string;
  removeText: string;
  addText: string;
}> = {
  en: {
    defaultTitle: 'Wishlist',
    defaultSubTitle: 'Your saved items',
    removeConfirmTitle: 'Remove Item',
    removeConfirmMessage: 'Are you sure you want to remove this item from your wishlist?',
    addConfirmTitle: 'Add to Cart',
    addConfirmMessage: name => `Do you want to add "${name}" to your cart?`,
    cancelText: 'Cancel',
    removeText: 'Remove',
    addText: 'Add',
  },
  pt: {
    defaultTitle: 'Lista de Desejos',
    defaultSubTitle: 'Seus itens salvos',
    removeConfirmTitle: 'Remover Item',
    removeConfirmMessage: 'Tem certeza que deseja remover este item da lista de desejos?',
    addConfirmTitle: 'Adicionar ao Carrinho',
    addConfirmMessage: name => `Deseja adicionar "${name}" ao seu carrinho?`,
    cancelText: 'Cancelar',
    removeText: 'Remover',
    addText: 'Adicionar',
  },
};

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface WishlistProps {
  items: WishlistItem[];
  onRemoveItem: (id: string) => void;
  onAddToCart: (item: WishlistItem) => void;
  title?: string;
  subTitle?: string;
  language?: Language;
  styles?: {
    container?: StyleProp<ViewStyle>;
    itemContainer?: StyleProp<ViewStyle>;
    image?: StyleProp<ImageStyle>;
    itemText?: StyleProp<TextStyle>;
    priceText?: StyleProp<TextStyle>;
    buttonContainer?: StyleProp<ViewStyle>;
    button?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyle>;
    title?: StyleProp<TextStyle>;
    subTitle?: StyleProp<TextStyle>;
  };
}

const Wishlist: React.FC<WishlistProps> = ({
  items,
  onRemoveItem,
  onAddToCart,
  title,
  subTitle,
  language = 'en',
  styles: customStyles = {},
}) => {
  const t = translations[language] || translations.en;
  const displayTitle = title || t.defaultTitle;
  const displaySubTitle = subTitle || t.defaultSubTitle;

  const handleRemoveItem = (id: string) => {
    Alert.alert(
      t.removeConfirmTitle,
      t.removeConfirmMessage,
      [
        { text: t.cancelText, style: 'cancel' },
        { text: t.removeText, style: 'destructive', onPress: () => onRemoveItem(id) },
      ]
    );
  };

  const handleAddToCart = (item: WishlistItem) => {
    Alert.alert(
      t.addConfirmTitle,
      t.addConfirmMessage(item.name),
      [
        { text: t.cancelText, style: 'cancel' },
        { text: t.addText, onPress: () => onAddToCart(item) },
      ]
    );
  };

  const renderItem = ({ item }: { item: WishlistItem }) => (
    <View style={[styles.itemContainer, customStyles.itemContainer]}>
      <Image source={{ uri: item.image }} style={[styles.image, customStyles.image]} />
      <View style={styles.itemDetails}>
        <Text style={[styles.itemText, customStyles.itemText]}>{item.name}</Text>
        <Text style={[styles.priceText, customStyles.priceText]}>${item.price.toFixed(2)}</Text>
        <View style={[styles.buttonContainer, customStyles.buttonContainer]}>
          <TouchableOpacity style={[styles.button, customStyles.button]} onPress={() => handleAddToCart(item)}>
            <Text style={[styles.buttonText, customStyles.buttonText]}>{t.addText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, customStyles.button]} onPress={() => handleRemoveItem(item.id)}>
            <Text style={[styles.buttonText, customStyles.buttonText]}>{t.removeText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{displayTitle}</Text>
      {displaySubTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{displaySubTitle}</Text>}
      <FlatList data={items} renderItem={renderItem} keyExtractor={item => item.id} contentContainerStyle={{ paddingBottom: hp('3%') }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
    backgroundColor: '#f9f9f9',
    borderRadius: wp('2%'),
    elevation: 2,
    padding: wp('3%'),
  },
  image: {
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: wp('2%'),
    marginRight: wp('4%'),
  },
  itemDetails: {
    flex: 1,
  },
  itemText: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    marginBottom: hp('0.5%'),
  },
  priceText: {
    fontSize: wp('4%'),
    color: '#555',
    marginBottom: hp('1%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('2%'),
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp('3.5%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  subTitle: {
    fontSize: wp('4.5%'),
    color: '#777',
    marginBottom: hp('2%'),
  },
});

export default Wishlist;
