/* eslint-disable prettier/prettier */
import React from "react";
import { View, Alert } from "react-native";
import { ProductDetail } from "react-native-ecommerce-components/lib";

const App = () => {
  const product = {
    id: "1",
    title: "Smartphone Pro X",
    description:
      "A powerful smartphone with excellent camera quality and long battery life.",
    price: 999.99,
    image:
      "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-iphone-256.png",
    rating: 4.8,
  };

  const handleAddToCart = (paramProduct) => {
    Alert.alert("Add to Cart", `${paramProduct.title} added to cart.`);
  };

  const handleBuyNow = (paramProduct) => {
    Alert.alert("Buy Now", `Proceeding to buy ${paramProduct.title}.`);
  };

  return (
    <View style={{ flex: 1 }}>
      <ProductDetail
        product={product}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        title="Product Details"
        subTitle="Explore the features of this product"
      />
    </View>
  );
};

export default App;
