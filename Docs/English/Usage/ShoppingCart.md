# 🛒 **ShoppingCart**

The **ShoppingCart** component provides a detailed overview of items in a user's cart, allowing them to update quantities, remove items, and proceed to checkout.

---

## 📸 **Component Preview**

<table>
  <tr>
    <td><strong>ShoppingCart</strong></td>
    <td><img src="../../Images/ShoppingCart.png" alt="ShoppingCart" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Props**

| Prop             | Type                                             | Required | Description                                              |
|-------------------|--------------------------------------------------|----------|----------------------------------------------------------|
| `items`          | `CartItem[]`                                     | ✅       | Array of cart items with `id`, `name`, `price`, and `quantity`. |
| `onUpdateQuantity` | `(id: string, quantity: number) => void`         | ✅       | Callback to update the quantity of an item in the cart.  |
| `onRemoveItem`   | `(id: string) => void`                            | ✅       | Callback to remove an item from the cart.               |
| `onCheckout`     | `(items: CartItem[], total: number) => void`      | ✅       | Callback triggered when the checkout button is pressed. |
| `title`          | `string`                                         | ✅       | Title text displayed at the top of the shopping cart.   |
| `subTitle`       | `string`                                         | ❌       | Subtitle text displayed below the title.               |
| `styles`         | `object`                                         | ❌       | Custom styles for `container`, `itemContainer`, `itemText`, `button`, `buttonText`, `totalContainer`, `totalText`, `title`, and `subTitle`. |

### 📦 **CartItem Object Structure**

```ts
interface CartItem {
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
