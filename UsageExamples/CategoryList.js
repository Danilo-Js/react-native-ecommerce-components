import React from "react";
import { View, Alert } from "react-native";
import { CategoryList } from "react-native-ecommerce-components/lib";

const App = () => {
  const categories = [
    {
      id: "1",
      name: "Electronics",
      image:
        "https://cdn3.iconfinder.com/data/icons/glypho-free/64/laptop-256.png",
      description: "Gadgets, devices, and accessories",
    },
    {
      id: "2",
      name: "Fashion",
      image:
        "https://cdn0.iconfinder.com/data/icons/news-and-magazine/512/fashion-256.png",
      description: "Trendy clothing and accessories",
    },
    {
      id: "3",
      name: "Home & Kitchen",
      image:
        "https://cdn2.iconfinder.com/data/icons/kitchen-appliances-computers-and-electronics/32/Appliances-15-256.png",
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
