/* eslint-disable prettier/prettier */
import React from "react";
import { View, Alert } from "react-native";
import { WishList } from "react-native-ecommerce-components/lib";

const App = () => {
  const wishlistItems = [
    {
      id: "1",
      name: "Smartphone",
      price: 699.99,
      image:
        "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-iphone-256.png",
    },
    {
      id: "2",
      name: "Headphones",
      price: 199.99,
      image:
        "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-headphone-256.png",
    },
    {
      id: "3",
      name: "Smartwatch",
      price: 299.99,
      image:
        "https://cdn2.iconfinder.com/data/icons/technology-straight-line/128/SVG_LINE_TECHNOLOGY-03-256.png",
    },
  ];

  const handleRemoveItem = (id) => {
    Alert.alert("Removed", `Item with ID: ${id} removed from wishlist`);
  };

  const handleAddToCart = (item) => {
    Alert.alert("Added to Cart", `${item.name} added to the cart`);
  };

  return (
    <View style={{ flex: 1 }}>
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
