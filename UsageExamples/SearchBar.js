/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SearchBar } from "react-native-ecommerce-components/lib";

const App = () => {
  const [data, setData] = useState([
    { id: "1", name: "Smartphone" },
    { id: "2", name: "Laptop" },
    { id: "3", name: "Headphones" },
    { id: "4", name: "Smartwatch" },
  ]);

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} placeholder="Search products..." />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});

export default App;
