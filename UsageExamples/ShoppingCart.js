/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {ShoppingCart} from 'react-native-ecommerce-helper/lib';

const ShoppingCartTest = () => {
  const [items, setItems] = useState([
    {id: '1', name: 'Product 1', price: 10.99, quantity: 1},
    {id: '2', name: 'Product 2', price: 15.49, quantity: 2},
    {id: '3', name: 'Product 3', price: 7.99, quantity: 3},
    {id: '4', name: 'Product 4', price: 1007, quantity: 1},
    {id: '5', name: 'Product 5', price: 37.99, quantity: 4},
    {id: '6', name: 'Product 6', price: 22.99, quantity: 3},
    {id: '7', name: 'Product 7', price: 70.15, quantity: 1},
  ]);

  const handleUpdateQuantity = (id, quantity) => {
    setItems(prevItems =>
      prevItems.map(item => (item.id === id ? {...item, quantity} : item)),
    );
  };

  const handleRemoveItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleCheckout = (cartItems, total) => {
    Alert.alert('Checkout', `Total: $${total.toFixed(2)}`);
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <ShoppingCart
        items={items}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        title="Shopping Cart"
        subTitle="Review your items below"
      />
    </View>
  );
};

export default ShoppingCartTest;
