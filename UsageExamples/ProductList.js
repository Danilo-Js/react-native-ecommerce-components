/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Alert} from 'react-native';
import {ProductList} from 'react-native-ecommerce-helper/lib';

const App = () => {
  const products = [
    {
      id: '1',
      title: 'Product 1',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Product 2',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      title: 'Product 3',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const handleAddToCart = product => {
    Alert.alert('Add to Cart', `${product.title} added to cart.`);
  };

  const handleProductPress = product => {
    Alert.alert('Product Selected', `You selected ${product.title}`);
  };

  return (
    <View style={{flex: 1}}>
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onProductPress={handleProductPress}
        gridView={true}
        title="Our Products"
        subTitle="Find the best deals here"
      />
    </View>
  );
};

export default App;
