# 🚚 **OrderTracking**

The **OrderTracking** component displays the status of an order through a series of steps, each representing a phase in the delivery process.

---

## 📸 **Component Preview**

<table>
  <tr>
    <td><strong>OrderTracking</strong></td>
    <td><img src="../Images/OrderTracking.png" alt="OrderTracking" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Props**

| Prop           | Type                             | Required | Description                                              |
|-----------------|----------------------------------|----------|----------------------------------------------------------|
| `steps`        | `OrderTrackingStep[]`           | ✅       | Array of steps, each representing an order status.       |
| `title`        | `string`                        | ✅       | Title text displayed at the top of the tracking component. |
| `subTitle`     | `string`                        | ❌       | Subtitle text displayed below the title.                |
| `styles`       | `object`                        | ❌       | Custom styles for `container`, `title`, `subTitle`, `stepContainer`, `stepTitle`, `stepDescription`, `stepCompleted`, `stepCurrent`, and `stepPending`. |

### 📦 **OrderTrackingStep Object Structure**

```ts
interface OrderTrackingStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
}
```

---

## 💻 **Usage Example**

### 📝 **Basic Example**

```tsx
import React from 'react';
import { View } from 'react-native';
import { OrderTracking } from 'react-native-ecommerce-helper/lib';

const steps = [
  {
    id: '1',
    title: 'Order Placed',
    description: 'Your order has been placed.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Order Processed',
    description: 'Your order is being processed.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Shipped',
    description: 'Your order has been shipped.',
    status: 'current',
  },
  {
    id: '4',
    title: 'Out for Delivery',
    description: 'Your order is on the way.',
    status: 'pending',
  },
  {
    id: '5',
    title: 'Delivered',
    description: 'Your order has been delivered.',
    status: 'pending',
  },
];

const OrderTrackingTest = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <OrderTracking
        title="Track Your Order"
        subTitle="Stay updated with your order status"
        steps={steps}
      />
    </View>
  );
};

export default OrderTrackingTest;
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
