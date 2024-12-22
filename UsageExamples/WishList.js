/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Alert} from 'react-native';
import {WishList} from 'react-native-ecommerce-helper/lib';

const App = () => {
  const wishlistItems = [
    {
      id: '1',
      name: 'Smartphone',
      price: 699.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Headphones',
      price: 199.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      name: 'Smartwatch',
      price: 299.99,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const handleRemoveItem = id => {
    Alert.alert('Removed', `Item with ID: ${id} removed from wishlist`);
  };

  const handleAddToCart = item => {
    Alert.alert('Added to Cart', `${item.name} added to the cart`);
  };

  return (
    <View style={{flex: 1}}>
      <WishList
        items={wishlistItems}
        onRemoveItem={handleRemoveItem}
        onAddToCart={handleAddToCart}
        title="My Wishlist"
        subTitle="Your favorite products"
      />
    </View>
  );
};

export default App;
