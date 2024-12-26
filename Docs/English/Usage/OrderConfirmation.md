# 📦 **OrderConfirmation**

The **OrderConfirmation** component provides a clear summary of an order with essential details like order ID, payment method, and shipping address. It also offers actionable buttons for continuing shopping or viewing order details.

---

## 📸 **Component Preview**

<table>
  <tr>
    <td><strong>OrderConfirmation</strong></td>
    <td><img src="../../Images/OrderConfirmation.png" alt="OrderConfirmation" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Props**

| Prop                | Type                          | Required | Description                                              |
|----------------------|------------------------------|----------|----------------------------------------------------------|
| `orderId`           | `string`                     | ✅       | Unique identifier for the order.                        |
| `orderDate`         | `string`                     | ✅       | Date when the order was placed.                         |
| `totalAmount`       | `number`                     | ✅       | Total amount paid for the order.                        |
| `paymentMethod`     | `string`                     | ✅       | Payment method used for the transaction.                |
| `shippingAddress`   | `string`                     | ✅       | Shipping address for the order.                         |
| `onContinueShopping`| `() => void`                 | ✅       | Callback triggered when the 'Continue Shopping' button is pressed. |
| `onViewOrderDetails`| `() => void`                 | ✅       | Callback triggered when the 'View Order Details' button is pressed. |
| `title`            | `string`                     | ✅       | Title text displayed at the top of the confirmation screen. |
| `subTitle`         | `string`                     | ❌       | Subtitle text displayed below the title.               |
| `styles`           | `object`                     | ❌       | Custom styles for container, orderInfo, buttonContainer, orderInfoText, button, buttonText, title, and subTitle. |

---

## 💻 **Usage Example**

### 📝 **Basic Example**

```tsx
import React from 'react';
import {View, Alert} from 'react-native';
import {OrderConfirmation} from 'react-native-ecommerce-helper/lib';

const OrderConfirmationTest = () => {
  const handleContinueShopping = () => {
    Alert.alert('Continue Shopping', 'Navigating to home page...');
  };

  const handleViewOrderDetails = () => {
    Alert.alert('Order Details', 'Showing order details...');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <OrderConfirmation
        title="Order Confirmed"
        subTitle="Thank you for your purchase!"
        orderId="ORD12345"
        orderDate="2024-06-21"
        totalAmount={149.99}
        paymentMethod="Credit Card"
        shippingAddress="123 Main Street, Cityville, CA"
        onContinueShopping={handleContinueShopping}
        onViewOrderDetails={handleViewOrderDetails}
      />
    </View>
  );
};

export default OrderConfirmationTest;
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
