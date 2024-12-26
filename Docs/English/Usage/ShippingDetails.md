# 📦 **ShippingDetails**

The **ShippingDetails** component provides a comprehensive interface for collecting user shipping information with validation for required fields.

---

## 📸 **Component Preview**

<table>
  <tr>
    <td><strong>ShippingDetails</strong></td>
    <td><img src="../../Images/ShippingDetails.png" alt="ShippingDetails" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Props**

| Prop        | Type                                           | Required | Description                                              |
|-------------|------------------------------------------------|----------|----------------------------------------------------------|
| `onSubmit`  | `(shippingDetails: ShippingDetailsData) => void` | ✅       | Callback triggered when the shipping details form is submitted. |
| `title`     | `string`                                       | ✅       | Title text displayed at the top of the form.            |
| `subTitle`  | `string`                                       | ❌       | Subtitle text displayed below the title.               |
| `styles`    | `object`                                       | ❌       | Custom styles for `container`, `title`, `subTitle`, `input`, `button`, and `buttonText`. |

### 📦 **ShippingDetailsData Object Structure**

```ts
interface ShippingDetailsData {
  recipientName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
}
```

---

## 💻 **Usage Example**

### 📝 **Basic Example**

```tsx
import React from 'react';
import {View, Alert} from 'react-native';
import {ShippingDetails} from 'react-native-ecommerce-helper/lib';

const ShippingDetailsTest = () => {
  const handleShippingDetails = shippingDetails => {
    console.log('Shipping Details:', shippingDetails);
    Alert.alert('Success', 'Shipping details submitted!');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ShippingDetails
        title="Shipping Information"
        subTitle="Please enter your shipping details below"
        onSubmit={handleShippingDetails}
      />
    </View>
  );
};

export default ShippingDetailsTest;
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
