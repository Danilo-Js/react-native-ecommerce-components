import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
// Traduções para título, subtítulo e botão
const translations = {
    en: {
        defaultTitle: 'Products',
        defaultSubTitle: 'Browse our products',
        addToCartButton: 'Add to Cart',
    },
    pt: {
        defaultTitle: 'Produtos',
        defaultSubTitle: 'Confira nossos produtos',
        addToCartButton: '+ Carrinho',
    },
};
const ProductList = ({ products, onAddToCart, onProductPress, gridView = false, title, subTitle, language = 'en', styles: customStyles = {}, }) => {
    const t = translations[language] || translations.en;
    const displayTitle = title || t.defaultTitle;
    const displaySubTitle = subTitle !== null && subTitle !== void 0 ? subTitle : t.defaultSubTitle;
    const renderItem = ({ item }) => (<TouchableOpacity style={[
            gridView ? styles.gridItem : styles.listItem,
            customStyles.productContainer,
        ]} onPress={() => onProductPress(item)}>
      <Image source={{ uri: item.image }} style={[styles.productImage, customStyles.productImage]}/>
      <Text style={[styles.productTitle, customStyles.productTitle]}>
        {item.title}
      </Text>
      <Text style={[styles.productPrice, customStyles.productPrice]}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={[styles.button, customStyles.button]} onPress={() => onAddToCart(item)}>
        <Text style={[styles.buttonText, customStyles.buttonText]}>
          {t.addToCartButton}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>);
    return (<View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{displayTitle}</Text>
      {displaySubTitle && (<Text style={[styles.subTitle, customStyles.subTitle]}>
          {displaySubTitle}
        </Text>)}
      <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={gridView ? 2 : 1} contentContainerStyle={styles.listContainer}/>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        padding: wp('5%'),
        backgroundColor: '#fff',
        borderRadius: wp('3%'),
        flex: 1,
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
    listContainer: {
        alignItems: 'center',
    },
    gridItem: {
        width: wp('45%'),
        margin: wp('2.5%'),
        padding: wp('2%'),
        backgroundColor: '#f9f9f9',
        borderRadius: wp('2%'),
        alignItems: 'center',
        elevation: 2,
    },
    listItem: {
        width: wp('90%'),
        marginBottom: hp('2%'),
        padding: wp('3%'),
        backgroundColor: '#f9f9f9',
        borderRadius: wp('2%'),
        alignItems: 'flex-start',
        elevation: 2,
    },
    productImage: {
        width: wp('30%'),
        height: hp('15%'),
        borderRadius: wp('2%'),
        marginBottom: hp('1%'),
    },
    productTitle: {
        fontSize: wp('4%'),
        fontWeight: 'bold',
        marginBottom: hp('0.5%'),
    },
    productPrice: {
        fontSize: wp('3.5%'),
        color: '#007bff',
        marginBottom: hp('1%'),
    },
    button: {
        backgroundColor: '#28a745',
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('4%'),
        borderRadius: wp('2%'),
        marginTop: hp('1%'),
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: wp('4%'),
    },
});
export default ProductList;
