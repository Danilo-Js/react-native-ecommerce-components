import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ProductDetail = ({ product, onAddToCart, onBuyNow, title, subTitle, styles: customStyles = {}, }) => {
    return (<ScrollView style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}

      <Image source={{ uri: product.image }} style={[styles.image, customStyles.image]}/>

      <Text style={[styles.productTitle, customStyles.title]}>{product.title}</Text>
      <Text style={[styles.price, customStyles.price]}>${product.price.toFixed(2)}</Text>
      {product.rating && <Text style={[styles.rating, customStyles.rating]}>⭐ {product.rating}</Text>}

      <Text style={[styles.description, customStyles.description]}>{product.description}</Text>

      <View style={[styles.buttonContainer, customStyles.buttonContainer]}>
        <TouchableOpacity style={[styles.button, styles.addToCartButton, customStyles.button]} onPress={() => onAddToCart(product)}>
          <Text style={[styles.buttonText, customStyles.buttonText]}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buyNowButton, customStyles.button]} onPress={() => onBuyNow(product)}>
          <Text style={[styles.buttonText, customStyles.buttonText]}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>);
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
    },
    addToCartButton: {
        backgroundColor: '#007bff',
    },
    buyNowButton: {
        backgroundColor: '#ffc107',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: wp('4%'),
    },
});
export default ProductDetail;
