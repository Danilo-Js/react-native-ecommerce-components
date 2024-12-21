import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ShoppingCart = ({ items, onUpdateQuantity, onRemoveItem, onCheckout, title, subTitle, styles: customStyles = {}, }) => {
    const [cartItems, setCartItems] = useState(items);
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    const handleQuantityChange = (id, change) => {
        var _a;
        const updatedItems = cartItems.map((item) => item.id === id ? Object.assign(Object.assign({}, item), { quantity: Math.max(1, item.quantity + change) }) : item);
        setCartItems(updatedItems);
        onUpdateQuantity(id, ((_a = updatedItems.find((item) => item.id === id)) === null || _a === void 0 ? void 0 : _a.quantity) || 1);
    };
    const handleRemoveItem = (id) => {
        Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Remove',
                style: 'destructive',
                onPress: () => {
                    const updatedItems = cartItems.filter((item) => item.id !== id);
                    setCartItems(updatedItems);
                    onRemoveItem(id);
                },
            },
        ]);
    };
    const handleCheckout = () => {
        const total = calculateTotal();
        if (cartItems.length === 0) {
            Alert.alert('Empty Cart', 'Please add items to your cart before checkout.');
            return;
        }
        onCheckout(cartItems, total);
        setCartItems([]);
        Alert.alert('Success', `Your order of $${total.toFixed(2)} has been placed!`);
    };
    const renderItem = ({ item }) => (<View style={[styles.itemContainer, customStyles.itemContainer]}>
      <Text style={[styles.itemText, customStyles.itemText]}>
        {item.name} - ${item.price.toFixed(2)} x {item.quantity}
      </Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleQuantityChange(item.id, -1)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleQuantityChange(item.id, 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
    </View>);
    return (<View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>{title}</Text>
      {subTitle && <Text style={[styles.subTitle, customStyles.subTitle]}>{subTitle}</Text>}
      <FlatList data={cartItems} renderItem={renderItem} keyExtractor={(item) => item.id}/>
      <View style={[styles.totalContainer, customStyles.totalContainer]}>
        <Text style={[styles.totalText, customStyles.totalText]}>
          Total: ${calculateTotal().toFixed(2)}
        </Text>
        <TouchableOpacity style={[styles.button, customStyles.button]} onPress={handleCheckout}>
          <Text style={[styles.buttonText, customStyles.buttonText]}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        padding: wp('5%'),
        borderRadius: wp('3%'),
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp('2%'),
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: hp('1%'),
    },
    itemText: {
        fontSize: wp('4%'),
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        fontSize: wp('5%'),
        paddingHorizontal: wp('2%'),
    },
    quantityText: {
        fontSize: wp('4%'),
        marginHorizontal: wp('2%'),
    },
    removeButton: {
        color: 'red',
        fontSize: wp('4%'),
    },
    totalContainer: {
        marginTop: hp('3%'),
        alignItems: 'center',
    },
    totalText: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#28a745',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('5%'),
        marginTop: hp('2%'),
        borderRadius: wp('2%'),
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
export default ShoppingCart;
