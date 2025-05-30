import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// Traduções do componente
const translations = {
  en: {
    defaultTitle: "Shopping Cart",
    defaultSubTitle: "Review your items",
    removeConfirmTitle: "Remove Item",
    removeConfirmMessage: "Are you sure you want to remove this item?",
    cancelText: "Cancel",
    confirmRemoveText: "Remove",
    emptyCartTitle: "Empty Cart",
    emptyCartMessage: "Please add items to your cart before checkout.",
    successTitle: "Success",
    successMessage: (total) =>
      `Your order of $${total.toFixed(2)} has been placed!`,
    totalLabel: "Total:",
    checkoutButton: "Checkout",
    removeButtonText: "Remove",
  },
  pt: {
    defaultTitle: "Carrinho de Compras",
    defaultSubTitle: "Revise seus itens",
    removeConfirmTitle: "Remover Item",
    removeConfirmMessage: "Tem certeza que deseja remover este item?",
    cancelText: "Cancelar",
    confirmRemoveText: "Remover",
    emptyCartTitle: "Carrinho Vazio",
    emptyCartMessage:
      "Por favor, adicione itens ao carrinho antes de finalizar.",
    successTitle: "Sucesso",
    successMessage: (total) =>
      `Seu pedido de R$${total.toFixed(2)} foi realizado!`,
    totalLabel: "Total:",
    checkoutButton: "Finalizar Compra",
    removeButtonText: "Remover",
  },
};
const ShoppingCart = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  title,
  subTitle,
  language = "en",
  styles: customStyles = {},
}) => {
  const t = translations[language] || translations.en;
  const [cartItems, setCartItems] = useState(items);
  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleQuantityChange = (id, change) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? Object.assign(Object.assign({}, item), {
            quantity: Math.max(1, item.quantity + change),
          })
        : item
    );
    setCartItems(updated);
    onUpdateQuantity(id, updated.find((i) => i.id === id).quantity);
  };
  const confirmRemove = (id) => {
    Alert.alert(t.removeConfirmTitle, t.removeConfirmMessage, [
      { text: t.cancelText, style: "cancel" },
      {
        text: t.confirmRemoveText,
        style: "destructive",
        onPress: () => {
          const filtered = cartItems.filter((i) => i.id !== id);
          setCartItems(filtered);
          onRemoveItem(id);
        },
      },
    ]);
  };
  const handleCheckout = () => {
    const total = calculateTotal();
    if (cartItems.length === 0) {
      Alert.alert(t.emptyCartTitle, t.emptyCartMessage);
      return;
    }
    onCheckout(cartItems, total);
    setCartItems([]);
    Alert.alert(t.successTitle, t.successMessage(total));
  };
  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, customStyles.itemContainer]}>
      <Text style={[styles.itemText, customStyles.itemText]}>
        {item.name} - ${item.price.toFixed(2)} x {item.quantity}
      </Text>

      <View style={[styles.quantityContainer, customStyles.quantityContainer]}>
        <TouchableOpacity onPress={() => handleQuantityChange(item.id, -1)}>
          <Text style={[styles.quantityButton, customStyles.quantityButton]}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={[styles.quantityText, customStyles.quantityText]}>
          {item.quantity}
        </Text>
        <TouchableOpacity onPress={() => handleQuantityChange(item.id, 1)}>
          <Text style={[styles.quantityButton, customStyles.quantityButton]}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => confirmRemove(item.id)}>
        <Text style={[styles.removeButton, customStyles.removeButton]}>
          {t.removeButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={[styles.container, customStyles.container]}>
      <Text style={[styles.title, customStyles.title]}>
        {title || t.defaultTitle}
      </Text>
      {(subTitle || t.defaultSubTitle) && (
        <Text style={[styles.subTitle, customStyles.subTitle]}>
          {subTitle || t.defaultSubTitle}
        </Text>
      )}

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={[styles.totalContainer, customStyles.totalContainer]}>
        <Text style={[styles.totalText, customStyles.totalText]}>
          {t.totalLabel} ${calculateTotal().toFixed(2)}
        </Text>
        <TouchableOpacity
          style={[styles.button, customStyles.button]}
          onPress={handleCheckout}
        >
          <Text style={[styles.buttonText, customStyles.buttonText]}>
            {t.checkoutButton}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: wp("5%"),
    borderRadius: wp("3%"),
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("2%"),
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: hp("1%"),
  },
  itemText: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: wp("4%"),
    marginRight: wp("2%"),
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp("2%"),
  },
  quantityButton: {
    fontSize: wp("5%"),
    paddingHorizontal: wp("2%"),
  },
  quantityText: {
    fontSize: wp("4%"),
    marginHorizontal: wp("2%"),
  },
  removeButton: {
    color: "red",
    fontSize: wp("4%"),
    marginLeft: wp("2%"),
  },
  totalContainer: {
    marginTop: hp("3%"),
    alignItems: "center",
  },
  totalText: {
    fontSize: wp("5%"),
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("5%"),
    marginTop: hp("2%"),
    borderRadius: wp("2%"),
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("4%"),
  },
  title: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    marginBottom: hp("1%"),
  },
  subTitle: {
    fontSize: wp("4%"),
    color: "#555",
    marginBottom: hp("2%"),
  },
});
export default ShoppingCart;
