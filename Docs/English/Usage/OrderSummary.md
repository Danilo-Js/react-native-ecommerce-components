# 📦 **OrderSummary**

The **OrderSummary** component provides a detailed summary of an order, including itemized costs, totals, and an actionable checkout button.

---

## 📸 **Component Preview**

<table>
  <tr>
    <td><strong>OrderSummary</strong></td>
    <td><img src="../../Images/OrderSummary.png" alt="OrderSummary" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Props**

| Prop         | Type          | Required | Description                                                                                                                                                  |
| ------------ | ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `items`      | `OrderItem[]` | ✅       | Array of order items with `id`, `name`, `price`, and `quantity`.                                                                                             |
| `subtotal`   | `number`      | ✅       | Subtotal amount of the order.                                                                                                                                |
| `shipping`   | `number`      | ✅       | Shipping cost of the order.                                                                                                                                  |
| `tax`        | `number`      | ✅       | Tax amount of the order.                                                                                                                                     |
| `total`      | `number`      | ✅       | Total amount of the order (subtotal + shipping + tax).                                                                                                       |
| `onCheckout` | `() => void`  | ✅       | Callback function triggered on pressing the checkout button.                                                                                                 |
| `title`      | `string`      | ✅       | Title text displayed at the top of the summary.                                                                                                              |
| `subTitle`   | `string`      | ❌       | Subtitle text displayed below the title.                                                                                                                     |
| `styles`     | `object`      | ❌       | Custom styles for `container`, `itemContainer`, `itemText`, `summaryContainer`, `summaryText`, `totalText`, `button`, `buttonText`, `title`, and `subTitle`. |
| `language`         | `en` ou `pt`                 | ❌          | Component language in Portuguese or English (default). |

### 📦 **OrderItem Object Structure**

```ts
interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
```

---

## 💻 **Usage Example**

### 📝 **Basic Example**

```tsx
import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import { OrderSummary } from "react-native-ecommerce-components/lib";

const App = () => {
  const orderItems = [
    { id: "1", name: "Smartphone", price: 499.99, quantity: 1 },
    { id: "2", name: "Headphones", price: 59.99, quantity: 2 },
    { id: "3", name: "Laptop", price: 1299.99, quantity: 1 },
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 25.0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    Alert.alert(
      "Checkout",
      `Your order total is $${total.toFixed(2)}. Proceeding to payment...`
    );
  };

  return (
    <View style={styles.container}>
      <OrderSummary
        items={orderItems}
        subtotal={subtotal}
        shipping={shipping}
        tax={tax}
        total={total}
        onCheckout={handleCheckout}
        title="Order Summary"
        subTitle="Review your order before proceeding"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
```

---

## 🧪 **Testing**

Make sure to test the component after adding it to your project:

```sh
npx react-native run-android
```

or for iOS:

```sh
npx react-native run-ios
```

---

For more information or advanced customization, refer to the [main documentation](../../README.md).
