import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Wishlist = ({ items, onRemoveItem, onAddToCart, title, subTitle, styles: customStyles = {}, }) => {
    const handleRemoveItem = (id) => {
        Alert.alert('Remove Item', 'Are you sure you want to remove this item from your wishlist?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Remove',
                style: 'destructive',
                onPress: () => onRemoveItem(id),
            },
        ]);
    };
    const handleAddToCart = (item) => {
        Alert.alert('Add to Cart', `Do you want to add "${item.name}" to your cart?`, [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Add',
                style: 'default',
                onPress: () => onAddToCart(item),
            },
        ]);
    };
    const renderItem = ({ item }) => (<View style={[styles.itemContainer, customStyles.itemContainer]}>
      <Image source={{ uri: item.image }} style={[styles.image, customStyles.image]}/>
      <View style={styles.itemDetails}>
        <Text style={[styles.itemText, customStyles.itemText]}>{item.name}</Text>
        <Text style={[styles.priceText, customStyles.priceText]}>${item.price.toFixed(2)}</Text>
        <View style={[styles.buttonContainer, customStyles.buttonContainer]}>
          <TouchableOpacity style={[styles.button, customStyles.button]} onPress={() => handleAddToCart(item)}>
            <Text style={[styles.buttonText, customStyles.buttonText]}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, customStyles.button]} onPress={() => handleRemoveItem(item.id)}>
            <Text style={[styles.buttonText, customStyles.buttonText]}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>);
    return (<View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}
      <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} contentContainerStyle={{ paddingBottom: hp('3%') }}/>
    </View>);
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
