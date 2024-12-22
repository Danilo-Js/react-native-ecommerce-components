/* eslint-disable prettier/prettier */
import React from "react";
import { View, Alert } from "react-native";
import { CategoryList } from "react-native-ecommerce-helper/lib";

const App = () => {
  const categories = [
    {
      id: "1",
      name: "Electronics",
      image: "https://via.placeholder.com/100",
      description: "Gadgets, devices, and accessories",
    },
    {
      id: "2",
      name: "Fashion",
      image: "https://via.placeholder.com/100",
      description: "Trendy clothing and accessories",
    },
    {
      id: "3",
      name: "Home & Kitchen",
      image: "https://via.placeholder.com/100",
      description: "Essentials for your home",
    },
  ];

  const handleCategorySelect = (category) => {
    Alert.alert("Category Selected", `You selected: ${category.name}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <CategoryList
        categories={categories}
        onSelectCategory={handleCategorySelect}
        title="Shop by Category"
        subTitle="Choose a category to explore products"
      />
    </View>
  );
};

export default App;
